import { authorizedFetch2 } from "./authorizedFetch"
import { ItemActions } from "../Store/keyedreducers"

const CreatePayload = (querystring, query_variables) => {
    return {query: querystring, variables: query_variables}
}

const ResponseFromQuery = (query, params={}) => (query_variables) => {
    // console.log("ResponseFromQuery", item)
    // console.log("ResponseFromQuery", Query)
    const body = JSON.stringify(CreatePayload(query, query_variables))
    // console.log("ResponseFromQuery", body)
    const result = authorizedFetch2('', {body, ...params})
    // .then(
    //     json => {
    //         console.log("ResponseFromQuery got", json)
    //         return json
    //     }
    // )
    return result
}

export const CreateFetchQuery = ResponseFromQuery

export const CreateAsyncActionFromQuery = (query, params={}) => {
    // console.log("CreateAsyncActionFromQuery.query", query)
    if (typeof query !== "string") {
        throw new Error("CreateAsyncActionFromQuery query param have be string!")
    }
    const unparametrizedFetch = ResponseFromQuery(query, params)
    return (query_variables) => {
        // console.log("CreateAsyncActionFromQuery.variables", query_variables)
        // console.log("CreateAsyncActionFromQuery parametrization function parameters", (typeof query_variables))
        // type checking of query_variables, are they "dict" / "json object?"
        return async (dispatch /*, getState*/) => {
            const jsonResult = await unparametrizedFetch(query_variables)
            const data = jsonResult?.data
            if (data) {
                const result = data?.result
                if (result) {
                    if (Array.isArray(result)) {
                        result.forEach(item => {
                            dispatch(ItemActions.item_update(item))
                        });
                    } else {
                        dispatch(ItemActions.item_update(result))
                    }
                }
            }
            return jsonResult
        }
    }
}

