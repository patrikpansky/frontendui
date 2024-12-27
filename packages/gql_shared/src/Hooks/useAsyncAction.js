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
    
    const fetchData = async (fetchParams) => {
        // console.log("useAsyncAction fetch start while state", state)
        const newParams = fetchParams ? { ...state.lastParams, ...fetchParams } : state.lastParams;
        if (fetchParams) {
            setState(prev => ({...prev, lastParams: fetchParams}))
        }
        let actionResult= null
        try {
            actionResult = await dispatch(AsyncAction(newParams));
            setState(prev => ({...prev, loading: false, error: null, dispatchResult: actionResult }))
        } catch (error) {
            // console.log("useAsyncAction catch the error", error)
            setState(prev => ({...prev, loading: false, error: error, dispatchResult: null }))
        }
        // console.log("useAsyncAction fetch end while state", state)
        return actionResult
    };

    const [state, setState] = useState({
        loading: !deferred,
        error: null,
        dispatchResult: null,
        fetch: fetchData,
        lastParams: queryVariables,
        // id: crypto.randomUUID()
    })
    // const setState = (what) => {
    //     console.log("useAsyncAction settting state")
    //     if (typeof what === "function") {
    //         const wrap = (prev) => {
    //             const next = what(prev)
    //             console.log("useAsyncAction changed state from", prev)
    //             console.log("useAsyncAction changed state into", next)
    //             return next
    //         }
    //         _setState(wrap)
    //     } else {
    //         _setState(what)
    //     }
    // }
    // console.log("useAsyncAction has state", state, params)
    useEffect(() => {
        if (network && !deferred) {
            fetchData()
        }
    }, [id, AsyncAction]);

    return {
        ...state,
        // read: resource.read, // Suspense-compatible `read` function
        entity: result || state.dispatchResult,
    };
};
