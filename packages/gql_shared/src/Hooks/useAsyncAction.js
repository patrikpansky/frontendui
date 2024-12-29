import { useCallback } from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/**
 * A custom React hook that fetches data via a Redux async action.
 * Allows optional delayed fetching and provides error/loading states.
 *
 * @function useAsyncAction
 * @param {Function} AsyncAction - **Constant** Redux async action (thunk) to be dispatched.
 * @param {Object} queryVariables - Initial parameters for the async action (e.g. `{ id: "some-id" }`).
 * @param {Object} [request] - Optional configuration object.
 * @param {boolean} [request.deferred=false] - If `true`, the hook won't fetch on mount; you'll need to call `fetch()` manually.
 * @param {boolean} [request.network=true] - If `false`, network requests are skipped entirely (no auto-fetch).
 *
 * @returns {Object} Hook return values.
 * @returns {boolean}   return.loading         - Whether a fetch operation is currently in progress.
 * @returns {any}       return.error           - The error object if the last fetch failed, or `null` otherwise.
 * @returns {any}       return.entity          - The fetched data from Redux state (or from the last successful dispatch).
 * @returns {any}       return.dispatchResult  - The raw value returned by the last dispatched Redux action.
 * @returns {Function}  return.fetch           - A function to initiate the fetch with optional new parameters.
 *
 * @example <caption>Basic Usage (No Suspense)</caption>
 * import { useAsyncAction } from "./useAsyncAction";
 *
 * const MyComponent = () => {
 *   const { entity, loading, error, fetch } = useAsyncAction(fetchUserAction, { id: "123" });
 *
 *   if (loading) return <div>Loading...</div>;
 *   if (error)   return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <div>
 *       <h2>User: {entity?.name}</h2>
 *       <button onClick={() => fetch({ id: "456" })}>
 *         Fetch Another User
 *       </button>
 *     </div>
 *   );
 * };
 *
 * @example <caption>Delaying the Initial Fetch</caption>
 * const MyDeferredComponent = () => {
 *   const { entity, fetch, loading } =
 *     useAsyncAction(fetchUserAction, { id: "123" }, { deferred: true });
 *
 *   return (
 *     <div>
 *       <button disabled={loading} onClick={() => fetch()}>
 *         Load Data
 *       </button>
 *       {entity && <p>{entity.name}</p>}
 *     </div>
 *   );
 * };
 */
export const useAsyncAction = (AsyncAction, queryVariables, params = { deferred: false, network: true }) => {
    const dispatch = useDispatch();
    const fetchPromise = useRef(false)
    const items = useSelector((state) => state["items"]);
    if (!items) {
        throw new Error(
            "Invalid store state: 'items' attribute is missing. Ensure the store state contains 'items' before using useAsyncAction."
        );
    }
    const { deferred, network } = params;
    const [id] = useState(queryVariables?.id)
    const result = items[id];
    // console.log("useAsyncAction", id, result)
    
    const fetchData = useCallback(async (fetchParams, callback=(entity)=>null) => {
        if (fetchPromise.current) {
            await fetchPromise.current
        }

        const mergedParams = fetchParams
            ? { ...state.lastParams, ...fetchParams }
            : state.lastParams;       

        // 1) First setState call: check if we're already loading, otherwise set loading = true.
        setState(prev => {
            if (prev.loading) {
                // Already loading, so bail out. We'll reflect this in `canFetch`.
                return prev; // No changes to state
            }           
            
            // Return the new state with loading = true.
            return {
                ...prev,
                loading: true,
                error: null,
                dispatchResult: null,     // Clear any prior results
            };
        });

        // console.log("useAsyncAction fetch start while mergedParams", mergedParams)

        // 2) Now do the async part (the actual fetch/dispatch).
        //    mergedParams was set inside the setState callback above.
        try {
            fetchPromise.current = dispatch(AsyncAction(mergedParams));
            const actionResult = await fetchPromise.current;
            fetchPromise.current = false
            // 3) If the dispatch succeeds, update state again to clear loading and set the result.
            setState(prev => ({
                ...prev,
                lastParams: mergedParams,
                loading: false,
                error: null,
                dispatchResult: actionResult,
            }));

            // console.log("useAsyncAction fetch end while actionResult", actionResult)
            // 4) Return the actual result of the dispatch, so the caller can await it or use it.
            return actionResult;
        } catch (err) {
            fetchPromise.current = false
            // console.log("useAsyncAction fetch failed err", err)
            // 5) On error, update state accordingly and rethrow so the caller knows.
            setState(prev => ({
                ...prev,
                lastParams: mergedParams,
                loading: false,
                error: err,
                dispatchResult: null,
            }));
            // throw err;
        }        
        // console.log("useAsyncAction fetch end while state", state)
        // console.warn("trying to call fetch while still loading")
    }, [AsyncAction]);

    const [state, setState] = useState({
        loading: !deferred,
        error: null,
        dispatchResult: null,
        fetch: fetchData,
        lastParams: queryVariables,
    })

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
