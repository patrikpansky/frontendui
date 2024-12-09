import { createSlice } from '@reduxjs/toolkit';
import { CreateItem, DeleteItem } from './keyedreducers';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useDispatch, useSelector } from 'react-redux';

/**
* Kompletni rez budocim store.
* Obsluhuje skupiny
*/
const MsgSlice = createSlice({
   name: 'msgs',
   initialState: {},
   reducers: {
       msg_add: CreateItem,
       msg_delete: DeleteItem
   }
})

export const MsgReducer = MsgSlice.reducer
export const MsgActions = MsgSlice.actions

// export const Msg_ = ({msg}) => {
//     const dispatch = useDispatch()
//     const onClose = () => {
//         dispatch(MsgActions.msg_delete(msg))
//     }
//     const buttonStyle = msg?.variant ? ("outline-" + msg.variant) : "outline-success"
//     return (
//         <Alert variant={msg.variant} onClose={onClose}>
//             <div className="row">
//                 <div className="col">
//                     {msg?.title}
//                 </div>   
//                 <div className="col d-flex justify-content-end">
//                     <Button onClick={onClose} variant={buttonStyle}>
//                         Close
//                     </Button>
//                 </div>
//             </div>
//         </Alert>
//     )
// }

const Msg = ({msg}) => {
    const dispatch = useDispatch()
    const onClose = () => {
        dispatch(MsgActions.msg_delete(msg))
    }
    const buttonStyle = msg?.variant ? ("outline-" + msg.variant) : "outline-success"
    return (
        <Toast bg={msg.variant} onClose={onClose}>
            <Toast.Header>
                {/* <div className="col d-flex justify-content-end">
                    <Button onClick={onClose} variant={buttonStyle}>
                        Close
                    </Button>
                </div> */}
            </Toast.Header>
            <Toast.Body>
                {msg?.title}
            </Toast.Body>
        </Toast>
    )
}

// export const Msgs_ = () => {
//     const msgs = useSelector(state => state.msgs)
//     return (
//         <>
//             {Object.values(msgs).map(
//                 msg => <Msg key={msg.id} msg={msg} />
//             )}
//         </>
//     )
// }

export const Msgs = () => {
    const msgs = useSelector(state => state.msgs)
    return (
        <ToastContainer position='bottom-end'>
            {Object.values(msgs).map(
                msg => <Msg key={msg.id} msg={msg} />
            )}
        </ToastContainer>
    )
}

const uuid = () => crypto.randomUUID()

export const MsgFlashAction = ({title, delay = 5000, variant = "success", detail=[]}) => (dispatch/*, getState */) => {
    const msgWithId = {id: uuid(), variant: variant, title: title, detail: detail}

    setTimeout(
        () => dispatch(MsgActions.msg_delete(msgWithId)), delay
    )
    return dispatch(MsgActions.msg_add(msgWithId))
}

export const MsgAddAction = ({title, variant = "danger", detail=[]}) => (dispatch/*, getState */) => {
    const msgWithId = {id: uuid(), variant: variant, title: title, detail: detail}

    return dispatch(MsgActions.msg_add(msgWithId))
}

/**
 * Creates asynchronous query resolution and rejection handlers for validating GraphQL responses.
 *
 * @param {Object} reactions - Predefined messages for success and error scenarios.
 * @param {string} reactions.success - The title for a success message.
 * @param {string} reactions.error - The title for an error message.
 * 
 * @returns {Function} A higher-order function that takes a `dispatch` function and returns:
 *                     - `onResolve`: Handler for resolving GraphQL responses.
 *                     - `onReject`: Handler for handling rejected promises.
 * 
 * @example
 * const reactions = {
 *   success: "Query succeeded!",
 *   error: "Query failed!",
 * };
 *
 * const [onResolve, onReject] = CreateAsyncQueryValidator(reactions)(dispatch);
 * 
 * fetchGraphQL()
 *   .then(onResolve)
 *   .catch(onReject);
 */
export const CreateAsyncQueryValidator = (reactions) => (dispatch) => {
    const onResolve = (json) => {
        // console.log("CreateAsyncQueryValidator", json)
        const errors = json?.errors;

        // Check if `errors` key exists in the response
        // if (errors) {
        //     dispatch(MsgAddAction({ title: reactions.error, variant: "danger", detail: errors }));
        //     return json;
        // }

        const data = json?.data;

        // // If no data is present, treat it as an error
        // if (!data) {
        //     // console.log("CreateAsyncQueryValidator no data", json)
        //     dispatch(MsgAddAction({ title: reactions.error, variant: "danger", detail: "No data in response" }));
        //     return json;
        // }

        // Detect `result` or consider a single key as `result`
        let result = data?.result;
        if (!result && Object.keys(data).length === 1) {
            const singleKey = Object.keys(data)[0];
            result = data[singleKey];
        }

        // Check for `__typename` errors
        // Skip the `if` block if `result` is an array
        if (!Array.isArray(result)) {
            const typename = result?.__typename;

            const isError = (!typename || typename.includes("Error"));
    
            if (isError) {
                dispatch(MsgAddAction({
                    title: reactions.error,
                    variant: "danger",
                    detail: "Error indicated in typename"
                }));
                return json;
            }
        }
        

        // // Handle specific `msg` values
        // const msg = result?.msg;
        // if (msg) {
        //     if (msg !== "ok") {
        //         dispatch(MsgAddAction({ title: reactions.error, variant: "danger", detail: msg }));
        //         return json;
        //     }
        // }

        // Handle successful result
        dispatch(MsgFlashAction({ title: reactions.success, variant: "success" }));
        return json;
    };

    const onReject = (error) => {
        console.log("CreateAsyncQueryValidator.onReject", error);
        dispatch(MsgAddAction({ title: reactions.error, variant: "danger", detail: ['' + error] }));
        return error;
    };

    return [onResolve, onReject];
};

/**
 * Creates a validator function to handle GraphQL query promises, validating responses and dispatching appropriate Redux actions.
 *
 * @param {Object} reactions - An object containing predefined messages for success and error scenarios.
 * @param {string} reactions.success - The title for a success message.
 * @param {string} reactions.error - The title for an error message.
 *
 * @returns {Function} A higher-order function that takes a `dispatch` function and returns a validator function.
 *                     The validator function accepts a promise (`future`) and attaches `then` and `catch` handlers to:
 *                     - Dispatch success or error messages based on the promise's resolved or rejected value.
 *
 * @example
 * const reactions = {
 *   success: "Query succeeded!",
 *   error: "Query failed!",
 * };
 *
 * const validator = CreateAsyncQueryValidator(reactions)(dispatch);
 *
 * const future = fetchGraphQL();
 * validator(future)
 *   .then((json) => {
 *       console.log("Validation passed, response:", json);
 *   })
 *   .catch((error) => {
 *       console.error("Validation failed, error:", error);
 *   });
 */
export const CreateAsyncQueryValidator2 = (reactions) => (dispatch) => {
    const [onResolve, onReject] = CreateAsyncQueryValidator(reactions)(dispatch)
    return (future) => {
        return future
            .then(onResolve)
            .catch(onReject);
    };
};


/**
 * Handles a GraphQL response, checking for errors or successful results, and triggering appropriate reactions.
 * 
 * @param {Object} reactions - An object containing callback functions for various response states.
 * @param {Function} [reactions.ok] - Callback triggered for a successful result.
 * @param {Function} [reactions.fail] - Callback triggered for a general failure or missing data.
 * @param {Function} [reactions.error] - Callback triggered for GraphQL-specific errors (e.g., `errors` key in the response).
 * @param {Function} [reactions.<message>] - Custom callbacks for specific messages found in `data.result.msg`.
 * 
 * @returns {Function} A higher-order function that takes a GraphQL response object (`json`),
 *                     inspects its structure for errors or results, and triggers the appropriate reaction.
 * 
 * @example
 * const reactions = {
 *   ok: (json) => console.log("Success:", json),
 *   fail: (json) => console.error("Failure:", json),
 *   error: (json) => console.error("GraphQL Error:", json),
 *   customMessage: (json) => console.warn("Custom error handling:", json),
 * };
 * 
 * const response = {
 *   data: {
 *     result: {
 *       __typename: "Error",
 *       msg: "customMessage",
 *     },
 *   },
 * };
 * 
 * CheckGQLError(reactions)(response);
 */

export const CheckGQLError = (reactions) => (json) => {
    console.log("CheckGQLError call");

    const errors = json?.errors;
    const data = json?.data;

    // 1. Check if GraphQL response has errors
    if (errors) {
        const errorReaction = reactions?.errors || reactions?.error || reactions?.fail;
        if (errorReaction) {
            errorReaction(json);
        } else {
            console.error("No error reaction defined for GraphQL errors", errors);
        }
        return json;
    }

    // 2. Determine the `result` key
    let result = data?.result;

    // If `result` is not explicitly present, and `data` has exactly one key, consider it as the `result`
    if (!result && data && Object.keys(data).length === 1) {
        const singleKey = Object.keys(data)[0];
        result = data[singleKey];
    }

    // 3. Check if the `result` or equivalent key indicates an error
    const typename = result?.__typename;
    const msg = result?.msg;

    if (!typename || typename.includes("Error")) {
        const typenameReaction = reactions?.error || reactions?.fail;
        if (typenameReaction) {
            typenameReaction(json);
        } else {
            console.warn(`No reaction for __typename indicating error: ${typename}`, json);
        }
        return json;
    }

    // 4. Handle `msg` describing success or error
    if (msg) {
        const msgReaction = reactions[msg] || reactions["fail"];
        if (msgReaction) {
            msgReaction(json);
        } else {
            console.warn(`No reaction found for message: ${msg}`, json);
        }
        return json;
    }

    // 5. Handle successful result
    if (result) {
        const successReaction = reactions["ok"];
        if (successReaction) {
            successReaction(json);
        } else {
            console.error("No 'ok' reaction defined for successful result", result);
        }
    } else {
        // If no valid result, fallback to error reaction
        const fallbackReaction = reactions?.errors || reactions?.error || reactions?.fail;
        if (fallbackReaction) {
            fallbackReaction(
                `Data not found. ${JSON.stringify(json)}. Server did not find the item in the database. The item does not exist.`
            );
        } else {
            console.warn("No fallback reaction defined for missing data", json);
        }
    }

    return json;
};


// fetch().then(
//     CheckMutationMsg({ok: () => MsgFlashAction(), fail: "Chyba"})()
// )