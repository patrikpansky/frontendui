import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/**
 * A React hook to fetch data using a Redux async action. Compatible with both React Suspense and traditional usage.
 *
 * @param {Function} AsyncAction - The Redux async action to dispatch.
 * @param {Object} queryVariables - The parameters for the async action, including `id`.
 * @param {Object} [params] - Optional configuration for fetching behavior.
 * @param {boolean} [params.deferred=false] - If true, delays the initial fetch until explicitly triggered using the `fetch` function.
 * @param {boolean} [params.network=true] - If false, prevents any network requests.
 *
 * @returns {Object} The hook return values.
 * @returns {Function} read - A Suspense-compatible function that suspends rendering until data is available.
 * @returns {any} entity - The fetched data from the cache (if `params.cache` is true) or null if not available.
 * @returns {boolean} loading - Indicates if the data is being fetched.
 * @returns {any} error - The error object if the fetch failed.
 * @returns {Function} fetch - Fetches data with new parameters or retries the last fetch operation.
 * @returns {any} dispatchResult - The raw value returned by the dispatched Redux action.
 *
 * @example <caption>Using with Suspense</caption>
 * const ParentComponent = () => {
 *   const { read, dispatchResult } = useAsyncAction(fetchParentAction, { id: "parent-id" });
 *
 *   const entity = read(); // Suspends until data is ready
 *
 *   return (
 *       <div>
 *           <div>Parent Data: {entity.name}</div>
 *           <div>Dispatch Result: {JSON.stringify(dispatchResult)}</div>
 *       </div>
 *   );
 * };
 *
 * @example <caption>Using without Suspense</caption>
 * const ParentComponent = () => {
 *   const { entity, loading, error, fetch } = useAsyncAction(fetchParentAction, { id: "parent-id" });
 *
 *   if (loading) return <div>Loading Parent Data...</div>;
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *       <div>
 *           <div>Parent Data: {entity.name}</div>
 *           <button onClick={() => fetch()}>Retry</button>
 *           <button onClick={() => fetch({ id: "new-parent-id" })}>Fetch New Data</button>
 *       </div>
 *   );
 * };
 */
export const useAsyncAction = (AsyncAction, queryVariables, params = { deferred: false, network: true }) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state["items"]);
    const { deferred, network } = params;

    if (!items) {
        throw new Error(
            "Invalid store state: 'items' attribute is missing. Ensure the store state contains 'items' before using useAsyncAction."
        );
    }

    const { id } = queryVariables;

    const result = items[id];

    // Suspense resource
    const [resource, setResource] = useState(() => createResource(deferred ? "success" : "pending"));
    const [lastParams, setLastParams] = useState(queryVariables);
    const [dispatchResult, setDispatchResult] = useState(null);

    const fetchData = async (fetchParams) => {
        const newParams = fetchParams ? { ...lastParams, ...fetchParams } : lastParams;
        if (fetchParams) setLastParams(newParams);
        return new Promise((resolve, reject) => {
            resource.fetch(async () => {
                try {
                    const actionResult = await dispatch(AsyncAction(newParams));
                    setDispatchResult(actionResult); // Save the result of dispatch
                    resolve(actionResult); // Resolve the promise with the action result
                    return actionResult;
                } catch (error) {
                    console.error("Error in fetchData:", error); // Improved logging
                    reject(error); // Reject the promise with the error
                    throw error; // Throw the error for Suspense or other consumers
                }
            });
        });
    };

    useEffect(() => {
        if (network && !deferred) {
            fetchData(queryVariables).catch((error) => {
                console.error("Error during initial fetch:", error);
            });
        }
    }, [id, dispatch, AsyncAction]);

    return {
        read: resource.read, // Provide Suspense-compatible `read` function
        entity: result || dispatchResult,
        loading: resource.getStatus() === "pending",
        error: resource.getStatus() === "error" ? resource.getResult() : null, // Properly reflect error
        fetch: fetchData, // Refetch with new parameters
        dispatchResult, // Include the raw dispatch result
    };
};


// Helper to create a Suspense-compatible resource
const createResource = (initialStatus = "pending") => {
    let status = initialStatus;
    let result;
    let suspender;

    return {
        fetch(fetcher) {
            status = "pending";
            result = undefined;
            suspender = fetcher().then(
                (res) => {
                    status = "success";
                    result = res;
                },
                (err) => {
                    console.error("Error in createResource:", err); // Improved logging
                    status = "error";
                    result = err; // Update result with the error
                }
            );
            return suspender;
        },
        read() {
            if (status === "pending") {
                throw suspender; // Suspends rendering
            } else if (status === "error") {
                throw result; // Throws the error for an ErrorBoundary
            }
            return result; // Returns the resolved data
        },
        getStatus() {
            return status;
        },
        getResult() {
            return result;
        },
    };
};

