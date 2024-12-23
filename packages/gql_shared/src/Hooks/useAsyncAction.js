import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/**
 * A React hook to fetch data using a Redux async action. Compatible with both React Suspense and traditional usage.
 *
 * @param {Function} AsyncAction - The Redux async action to dispatch.
 * @param {Object} queryVariables - The parameters for the async action, including `id`.
 * @returns {{
*   read: Function, // Suspense-compatible function to read data.
*   entity: any,      // The fetched data or null if not loaded.
*   loading: boolean, // Indicates if the data is being fetched.
*   error: any,     // The error object if the fetch failed.
*   retry: Function, // Retries the last fetch operation with the previous parameters.
*   refetch: Function, // Fetches data with new parameters.
*   dispatchResult: any, // The raw value returned by the dispatch action.
* }}
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
*   const { entity, loading, error, dispatchResult, retry, refetch } = useAsyncAction(fetchParentAction, { id: "parent-id" });
*
*   if (loading) return <div>Loading Parent Data...</div>;
*   if (error) return <div>Error: {error.message}</div>;
*
*   return (
*       <div>
*           <div>Parent Data: {entity.name}</div>
*           <div>Raw Dispatch Result: {JSON.stringify(dispatchResult)}</div>
*           <button onClick={retry}>Retry</button>
*           <button onClick={() => refetch({ id: "new-parent-id" })}>Fetch New Data</button>
*       </div>
*   );
* };
*/

export const useAsyncAction = (AsyncAction, queryVariables, params={deferred: false, network: true}) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state["items"]);
    const {deferred, network} = params
    if (!items) {
        throw Error(
            "Invalid store state: 'items' attribute is missing. Ensure the store state contains 'items' before using useAsyncAction."
        );
    }

    const { id } = queryVariables;

    const result = items[id];

    // Suspense resource
    const [resource, setResource] = useState(() => createResource());
    const [lastParams, setLastParams] = useState(queryVariables);
    const [dispatchResult, setDispatchResult] = useState(null);

    const fetchData = async (fetchParams) => {
        const newParams = fetchParams?{...lastParams, ...fetchParams}:lastParams
        if (fetchParams) setLastParams(newParams)
        resource.fetch(async () => {
            const actionResult = await dispatch(AsyncAction(newParams));
            setDispatchResult(actionResult); // Save the result of dispatch
            return actionResult;
        });
    };

    useEffect(() => {
        if (network && !deferred) {
            fetchData(queryVariables);
        }
    }, [id, dispatch, AsyncAction]);
    //queryVariables must be ommited, otherwise this will be infinite loop of rendering;

    return {
        read: resource.read, // Provide Suspense-compatible `read` function
        entity: result,
        loading: resource.getStatus() === "pending",
        error: resource.getStatus() === "error" ? resource.getResult() : null,
        fetch: fetchData, // Refetch with new parameters
        dispatchResult: dispatchResult, // Include the raw dispatch result
    };
};

// Helper to create a Suspense-compatible resource
const createResource = () => {
    let status = "pending";
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
                    status = "error";
                    result = err;
                }
            );
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
