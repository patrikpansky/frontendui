import { authorizedFetch2 } from "./authorizedFetch"
import { ItemActions } from "../Store/keyedreducers"

/**
 * Serialize GQL query and variables into single object
 * @param {string} querystring 
 * @param {object} query_variables 
 * @returns 
 */
const CreatePayload = (querystring, query_variables) => {
    return {query: querystring, variables: query_variables}
}

/**
 * from QGL query string create a function which take variables and starts the fetch
 * @param {string} query 
 * @param {object} params can contain header (special token if needed)
 * @returns 
 * 
 * @function
 */
const ResponseFromQuery = (query, params={}) => (query_variables) => {
    if (!query || typeof query !== 'string') {
        throw new Error('Invalid query: must be a non-empty string.');
    }

    // Default fetch parameters
    const defaultParams = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify(CreatePayload(query, query_variables))
    // console.log("ResponseFromQuery", body)
    const result = authorizedFetch2('', {body, ...defaultParams, ...params})
    // .then(
    //     json => {
    //         console.log("ResponseFromQuery got", json)
    //         return json
    //     }
    // )
    return result
}

/**
 * from QGL query string create a function which take variables and starts the fetch
 * @param {string} query 
 * @param {object} params can contain header (special token if needed)
 * @returns 
 * 
 * @function
 */
export const CreateFetchQuery = ResponseFromQuery

export const GQLQueryAfterFetch = (jsonResult) => (dispatch, /*getState */) => {
    const data = jsonResult?.data;

    if (!data) {
        console.warn("GQLQueryAfterFetch: No data found in jsonResult");
        return jsonResult;
    }

    let result = data?.result;

    // Check if `data` has exactly one key and use it as the result
    if (!result && Object.keys(data).length === 1) {
        const singleKey = Object.keys(data)[0];
        result = data[singleKey];
    }

    if (result) {
        if (Array.isArray(result)) {
            result.forEach((item) => {
                dispatch(ItemActions.item_update(item));
            });
        } else {
            dispatch(ItemActions.item_update(result));
        }
    } else {
        console.warn("GQLQueryAfterFetch: No valid result found in data");
    }

    return jsonResult;
};

/**
 * Chains multiple middleware-like functions into a single function.
 *
 * Each middleware receives `jsonResult`, `dispatch`, `getState`, and `next` as arguments.
 * The result of one middleware is passed as input to the next.
 *
 * @param  {...Function} middlewares - Middleware functions to chain.
 * @returns {Function} A single middleware-like function.
 *
 * @example
 * // Example Middleware Functions
 * const middleware1 = (jsonResult) => (dispatch, getState) => (next) => {
 *     console.log("Middleware 1:", jsonResult);
 *     console.log("State:", getState());
 *     jsonResult.modifiedBy1 = true;
 *     dispatch({ type: "MIDDLEWARE_1_EXECUTED" });
 *     return next(jsonResult);
 * };
 *
 * const middleware2 = (jsonResult) => (dispatch, getState) => (next) => {
 *     console.log("Middleware 2:", jsonResult);
 *     console.log("State:", getState());
 *     jsonResult.modifiedBy2 = true;
 *     dispatch({ type: "MIDDLEWARE_2_EXECUTED" });
 *     return next(jsonResult);
 * };
 *
 * // Chain the middleware functions
 * const chainedMiddleware = chainMiddlewares(middleware1, middleware2);
 *
 * // Simulated dispatch, getState, and next functions
 * const dispatch = (action) => console.log("Dispatched:", action);
 * const getState = () => ({ some: "state" });
 * const next = (result) => {
 *     console.log("Final Result:", result);
 *     return result;
 * };
 *
 * // Invoke the chained middleware
 * const jsonResult = { data: { result: "example data" } };
 * chainedMiddleware(jsonResult)(dispatch, getState)(next);
 *
 * @example
 * // Output:
 * // Middleware 1: { data: { result: "example data" } }
 * // State: { some: "state" }
 * // Dispatched: { type: "MIDDLEWARE_1_EXECUTED" }
 * // Middleware 2: { data: { result: "example data" }, modifiedBy1: true }
 * // State: { some: "state" }
 * // Dispatched: { type: "MIDDLEWARE_2_EXECUTED" }
 * // Final Result: { data: { result: "example data" }, modifiedBy1: true, modifiedBy2: true }
 */
export const chainMiddlewares = (...middlewares) => {
    return (jsonResult) => (dispatch, getState) => (next) => {
        const invokeNext = (index, currentJsonResult) => {
            if (index >= middlewares.length) {
                return next(currentJsonResult);
            }
            const currentMiddleware = middlewares[index];
            return currentMiddleware(currentJsonResult)(dispatch, getState)((newJsonResult) =>
                invokeNext(index + 1, newJsonResult)
            );
        };
        return invokeNext(0, jsonResult);
    };
};


export const GQLUpdateItemAfterFetchMDLWR = (jsonResult) => (dispatch, /*getState */) => (next) => {
    const data = jsonResult?.data;

    if (!data) {
        console.warn("GQLQueryAfterFetch: No data found in jsonResult");
        return jsonResult;
    }

    let result = data?.result;

    // Check if `data` has exactly one key and use it as the result
    if (!result && Object.keys(data).length === 1) {
        const singleKey = Object.keys(data)[0];
        result = data[singleKey];
    }

    if (result) {
        if (Array.isArray(result)) {
            result.forEach((item) => {
                dispatch(ItemActions.item_update(item));
            });
        } else {
            dispatch(ItemActions.item_update(result));
        }
    } else {
        console.warn("GQLQueryAfterFetch: No valid result found in data");
    }

    return next(jsonResult);
};

export const GQLMutationAfterFetch = (jsonResult) => (dispatch) => {
    const data = jsonResult?.data
    if (data) {
        const result = data?.result
        if (result) {
            const updatedItem = result?.result
            if (updatedItem) {
                dispatch(ItemActions.item_update(updatedItem))
            }
        }
    }
    return jsonResult
}

export const GQLQueryLazyVectorAfterFetch = (vectorname) => (jsonResult) => (dispatch) => {
    // console.log("GQLQueryLazyVectorAfterFetch", JSON.stringify(jsonResult), vectorname)
    const data = jsonResult?.data
    if (data) {
        const result = data?.result
        if (result) {
            // console.log("GQLQueryLazyVectorAfterFetch", JSON.stringify(result))
            dispatch(ItemActions.item_updateAttributeVector({item: result, vectorname}))
        }
    }
    return jsonResult
}

export const UpdateItemsFromVectorAttribute = (vectorname) => (jsonResult) => (dispatch) => {
    // console.log("GQLQueryLazyVectorAfterFetch", JSON.stringify(jsonResult), vectorname)
    const data = jsonResult?.data
    if (data) {
        const result = data?.result
        if (result) {
            // console.log("GQLQueryLazyVectorAfterFetch", JSON.stringify(result))
            dispatch(ItemActions.item_updateAttributeVector({item: result, vectorname}))
        }
    }
    return jsonResult
}

/**
 * Middleware-like function to process `currentJsonResult` by extracting data,
 * identifying a vector attribute, and dispatching the `UpdateSubVector` action.
 *
 * @param {Object} jsonResult - The JSON result to process.
 * @returns {Function} Middleware function for processing and dispatching actions.
 *
 * @example
 * const processVectorMiddleware = ProcessVectorMiddleware("events");
 *
 * const jsonResult = {
 *   data: {
 *     result: {
 *       id: 1,
 *       name: "Item 1",
 *       events: [
 *         { id: 101, name: "Event 1" },
 *         { id: 102, name: "Event 2" }
 *       ]
 *     }
 *   }
 * };
 *
 * processVectorMiddleware(jsonResult)(dispatch, getState)(next);
 */
export const GQLExtendSubVectorMDLWR = (vectorname) => (jsonResult) => (dispatch, /* getState */) => (next) => {
    const data = jsonResult?.data;

    if (!data) {
        console.warn("ProcessVectorMiddleware: No data found in jsonResult");
        return next(jsonResult);
    }

    let result = data?.result;

    // Extract the single key's value if result is not directly present
    if (!result && Object.keys(data).length === 1) {
        const singleKey = Object.keys(data)[0];
        result = data[singleKey];
    }

    if (!result || !Array.isArray(result[vectorname])) {
        console.warn(`ProcessVectorMiddleware: No valid vector '${vectorname}' found in the result`);
        return next(jsonResult);
    }

    // Dispatch UpdateSubVector synchronously
    dispatch(ItemActions.item_updateAttributeVector({item: result, vectorname}))

    // console.log(`ProcessVectorMiddleware: Dispatched UpdateSubVector for vector '${vectorname}'`);
    return next(jsonResult); // Pass to the next middleware
};


/**
 * Middleware to extract the `result` data or the value from one key in the `data` object.
 * Designed to be the last middleware in the chain.
 *
 * @param {Object} jsonResult - The GraphQL query result.
 * @returns {Function} Middleware function to extract and return the result.
 *
 * @example
 * const extractMiddleware = ExtractResultMiddleware();
 *
 * const jsonResult = {
 *   data: {
 *     user: {
 *       id: "12345",
 *       name: "John Doe"
 *     }
 *   }
 * };
 *
 * extractMiddleware(jsonResult)(dispatch, getState)((result) => {
 *   console.log("Extracted result:", result); // Logs: { id: "12345", name: "John Doe" }
 * });
 */
export const ExtractResultMDLWR = (jsonResult) => (dispatch, getState) => (next) => {
    const data = jsonResult?.data;

    if (!data) {
        console.warn("ExtractResultMiddleware: No data found in jsonResult.");
        return next(null);
    }

    let result = data?.result;

    // If `result` is not directly present, check for a single key in `data`
    if (!result && Object.keys(data).length === 1) {
        const singleKey = Object.keys(data)[0];
        result = data[singleKey];
    }

    if (!result) {
        console.warn("ExtractResultMiddleware: No valid result found in data.");
    }

    // Pass the extracted result to the next function
    return next(result);
};


/**
 * from GQL query string creates dispatchable async action (see react-redux)
 * @param {string} query 
 * @param {object} params can contain header (special token if needed)
 * @returns 
 * 
 * @function
 */
export const CreateAsyncActionFromQuery = (query, params={}, next=GQLQueryAfterFetch) => {
    // console.log("CreateAsyncActionFromQuery.query", query)
    if (typeof query !== "string") {
        throw new Error("CreateAsyncActionFromQuery query param have be string!")
    }
    const unparametrizedFetch = ResponseFromQuery(query, params)
    return (query_variables) => {
        // console.log("CreateAsyncActionFromQuery.variables", query_variables)
        // console.log("CreateAsyncActionFromQuery parametrization function parameters", (typeof query_variables))
        // type checking of query_variables, are they "dict" / "json object?"
        
        if (typeof query_variables !== "object" || query_variables === null) {
            throw new Error("CreateAsyncActionFromQuery: query_variables must be a valid JSON object.");
        }

        return async (dispatch /*, getState*/) => {
            try {
                const jsonResult = await unparametrizedFetch(query_variables);
                // console.log("jsonResult", query, "->", jsonResult)
                dispatch(next(jsonResult));
                return jsonResult
            } catch (error) {
                console.error("CreateAsyncActionFromQuery: Error in async action", error);
                throw error;
            }
        };
    }
}

/**
 * Creates a dispatchable async action from a GraphQL query.
 * Supports chaining multiple middleware-like functions for post-fetch processing.
 *
 * @param {string} query - The GraphQL query string.
 * @param {object} params - Additional parameters for the query, such as headers.
 * @param {Function} firstmiddleware - The first middleware function to process the result.
 * @param {...Function} middlewares - Additional middleware functions to process the result.
 * @returns {Function} A dispatchable async action.
 *
 * @function
 * @example
 * const exampleQuery = `
 *   query ExampleQuery($id: ID!) {
 *     user(id: $id) {
 *       id
 *       name
 *     }
 *   }
 * `;
 *
 * const fetchAction = CreateAsyncActionFromQueryMDLWR(
 *   exampleQuery,
 *   { headers: { Authorization: "Bearer token" } },
 *   logMiddleware,
 *   processMiddleware
 * );
 *
 * dispatch(fetchAction({ id: "12345" }));
 */
export const CreateAsyncActionFromQueryWithMiddlewares = (query, params = {}, firstmiddleware = GQLUpdateItemAfterFetchMDLWR, ...middlewares) => {
    if (typeof query !== "string") {
        throw new Error("CreateAsyncActionFromQueryMDLWR: 'query' must be a string.");
    }

    if (typeof firstmiddleware !== "function") {
        throw new Error("CreateAsyncActionFromQueryMDLWR: 'firstmiddleware' must be a function.");
    }

    const unparametrizedFetch = ResponseFromQuery(query, params);

    return (query_variables) => {
        if (typeof query_variables !== "object" || query_variables === null) {
            throw new Error("CreateAsyncActionFromQueryMDLWR: 'query_variables' must be a valid JSON object.");
        }

        return async (dispatch, getState) => {
            try {
                const jsonResult = await unparametrizedFetch(query_variables);

                // Combine the first middleware with additional middlewares
                const extendedMiddlewares = [firstmiddleware, ...middlewares];
                const chain = extendedMiddlewares.reduceRight(
                    (next, middleware) => (result) => middleware(result)(dispatch, getState)(next),
                    (finalResult) => finalResult // Base case: pass through final result
                );

                // Start the middleware chain
                chain(jsonResult);

                return jsonResult;
            } catch (error) {
                console.error("CreateAsyncActionFromQueryMDLWR: Error during async action execution", error);
                throw error;
            }
        };
    };
};

/**
 * from GQL query string creates dispatchable async action (see react-redux)
 * @param {string} mutation 
 * @param {object} params can contain header (special token if needed)
 * @returns 
 * 
 * @function
 */
export const CreateAsyncActionFromMutation = (mutation, params={}, afterFetch=GQLMutationAfterFetch) => {
    const afterFetch_ = afterFetch
    // console.log("CreateAsyncActionFromQuery.query", query)
    if (typeof mutation !== "string") {
        throw new Error("CreateAsyncActionFromMutation query param have be string!")
    }
    const unparametrizedPost = ResponseFromQuery(mutation, params)
    return (query_variables) => {
        // console.log("CreateAsyncActionFromQuery.variables", query_variables)
        // console.log("CreateAsyncActionFromQuery parametrization function parameters", (typeof query_variables))
        // type checking of query_variables, are they "dict" / "json object?"
        return async (dispatch /*, getState*/) => {
            const jsonResult = await unparametrizedPost(query_variables)
            return dispatch(afterFetch_(jsonResult))
            // const data = jsonResult?.data
            // if (data) {
            //     const result = data?.result
            //     if (result) {
            //         const updatedItem = result?.result
            //         if (updatedItem) {
            //             dispatch(ItemActions.item_update(updatedItem))
            //         }
            //     }
            // }
            // return jsonResult
        }
    }
}

/**
 * Wraps the result of CreateAsyncActionFromQuery and adds an additional function call.
 *
 * @param {Function} asyncActionCreator - The async action creator returned by CreateAsyncActionFromQuery.
 * @param {Function} additionalFunction - A function to call after the dispatch of asyncActionCreator.
 * @returns {Function} A new async action creator with the additional function call.
 */
export const WrapAsyncActionWithFunction = (asyncActionCreator, additionalFunction) => {
    if (typeof asyncActionCreator !== "function") {
        throw new Error("WrapAsyncActionWithFunction: asyncActionCreator must be a function.");
    }

    if (typeof additionalFunction !== "function") {
        throw new Error("WrapAsyncActionWithFunction: additionalFunction must be a function.");
    }

    return (query_variables) => async (dispatch, getState) => {
        let result = await asyncActionCreator(query_variables)(dispatch, getState);
        result = additionalFunction(result, dispatch, getState);
        return result;
    };
};