/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"


/**
 * A custom React hook to retrieve a fresh item from the Redux store and optionally fetch updated data using an asynchronous action.
 * 
 * @param {Object} queryVariables - An object containing the `id` of the item to fetch and other query variables.
 * @param {string} queryVariables.id - The unique identifier of the item to retrieve.
 * @param {Function} AsyncAction - An asynchronous Redux action that fetches updated data. It should return a Promise resolving to the data in JSON format.
 * 
 * @returns {[Object, Promise, Object]} A tuple containing:
 * - The current item from the Redux store (or `undefined` if it doesn't exist).
 * - A Promise representing the asynchronous fetch operation.
 * - The current state of the fetch operation, including:
 *   - `resultPromise`: The current Promise being processed.
 *   - `errors`: Any errors returned by the asynchronous action.
 *   - `data`: The fetched data from the action.
 *   - `json`: The full response object from the asynchronous action.
 *   - `loading`: A boolean indicating if the fetch operation is in progress.
 *   - `done`: A boolean indicating if the fetch operation has completed.
 * 
 * @throws {Error} If the Redux store's state does not contain an `items` attribute.
 * 
 * @example
 * // Usage with a Redux asynchronous action
 * const AsyncAction = (variables) => async (dispatch) => {
 *     const response = await fetch('/api/items', { method: 'POST', body: JSON.stringify(variables) });
 *     const json = await response.json();
 *     return json;
 * };
 * 
 * const MyComponent = () => {
 *     const [item, resultPromise, state] = useFreshItem({ id: '123', filter: 'active' }, AsyncAction);
 * 
 *     useEffect(() => {
 *         resultPromise.then(() => {
 *             console.log("Fetch complete:", state);
 *         });
 *     }, [resultPromise]);
 * 
 *     return (
 *         <div>
 *             {state.loading && <p>Loading...</p>}
 *             {state.errors && <p>Error: {state.errors}</p>}
 *             {item && <p>Item: {item.name}</p>}
 *         </div>
 *     );
 * };
 */
export const useFreshItem = ({id, ...queryVariables}, AsyncAction) => {
    //const id = oldItemWithId.id
    // console.log("useFreshItem", id)
    
    const dispatch = useDispatch()
    const items = useSelector(state => state["items"])
    if (!items) {
        throw Error("bad use of store and useFreshItem hook, checks that store state has items attribute")
    }
    const result = items[id]

    const [_state, _setState] = useState({
        resultPromise: new Promise(()=>{}),
        errors: null,
        data: null,
        json: null,
        loading: false,
        done: false
    })

    useEffect(
        () => {
            let resultPromise = null
            const fetcher = async () => {
                const dispatchResult = await dispatch(AsyncAction({id, ...queryVariables}), null)
                const {data, errors} = dispatchResult
                const newState = {
                    resultPromise: resultPromise,
                    errors, data, json: dispatchResult, loading: false, done: true}
                _setState(newState)
                return dispatchResult
            }
            resultPromise = fetcher()
            const newState = {
                resultPromise: resultPromise,
                errors: null,
                data: null,
                json: null,
                loading: true,
                done: false
            }
            _setState(newState)
        }
        ,[id, AsyncAction, dispatch] // this is ok, if ...queryVariables change, useEffect will not happen which is we wanted
    )
    //console.log("useFresh", _state)
    return [result, _state.resultPromise, _state]
}