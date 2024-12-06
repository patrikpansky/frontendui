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

export const GQLQueryAfterFetch = (jsonResult) => (dispatch) => {
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

/**
 * from GQL query string creates dispatchable async action (see react-redux)
 * @param {string} query 
 * @param {object} params can contain header (special token if needed)
 * @returns 
 * 
 * @function
 */
export const CreateAsyncActionFromQuery = (query, params={}, afterFetch=GQLQueryAfterFetch) => {
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
                dispatch(afterFetch(jsonResult));
                return jsonResult
            } catch (error) {
                console.error("CreateAsyncActionFromQuery: Error in async action", error);
                throw error;
            }
        };
    }
}

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