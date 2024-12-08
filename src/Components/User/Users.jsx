import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { UserMediumCard } from "./UserMediumCard"
import { CreateAsyncActionFromQuery, CreateAsyncActionFromQueryWithMiddlewares, CreateFetchQuery, ExtractResultMDLWR, GQLUpdateItemAfterFetchMDLWR } from "@hrbolek/uoisfrontend-shared/src";
import { InfiniteScroll } from "../InfiniteScroll";

// /**
//  * Wraps the result of CreateAsyncActionFromQuery and adds an additional function call.
//  *
//  * @param {Function} asyncActionCreator - The async action creator returned by CreateAsyncActionFromQuery.
//  * @param {Function} additionalFunction - A function to call after the dispatch of asyncActionCreator.
//  * @returns {Function} A new async action creator with the additional function call.
//  */
// export const WrapAsyncActionWithFunction = (asyncActionCreator, additionalFunction) => {
//     if (typeof asyncActionCreator !== "function") {
//         throw new Error("WrapAsyncActionWithFunction: asyncActionCreator must be a function.");
//     }

//     if (typeof additionalFunction !== "function") {
//         throw new Error("WrapAsyncActionWithFunction: additionalFunction must be a function.");
//     }

//     return (query_variables) => async (dispatch, getState) => {
//         let result = await asyncActionCreator(query_variables)(dispatch, getState);
//         result = additionalFunction(result, dispatch, getState);
//         return result;
//     };
// };

const allusersquery = `
query UserPage($skip: Int, $limit: Int, $where: UserInputWhereFilter) {
  result: userPage(skip: $skip, limit: $limit, where: $where, orderby: "surname") {
    ...User
  }
}
fragment User on UserGQLModel {
  __typename
  id
  lastchange
  name
  surname
  fullname
  email
  created
  createdby {
    id
    email
  }
  changedby {
    id
    name
  }
}`


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
export const CreateAsyncActionFromQueryWithMiddlewares2 = (query, params = {}, firstmiddleware = GQLUpdateItemAfterFetchMDLWR, ...middlewares) => {
  if (typeof query !== "string") {
      throw new Error("CreateAsyncActionFromQueryMDLWR: 'query' must be a string.");
  }

  if (typeof firstmiddleware !== "function") {
      throw new Error("CreateAsyncActionFromQueryMDLWR: 'firstmiddleware' must be a function.");
  }

  const unparametrizedFetch = CreateFetchQuery(query, params);

  return (query_variables) => {
      if (typeof query_variables !== "object" || query_variables === null) {
          throw new Error("CreateAsyncActionFromQueryMDLWR: 'query_variables' must be a valid JSON object.");
      }

      return async (dispatch, getState) => {
          try {
              const jsonResult = await unparametrizedFetch(query_variables);
              console.log("CreateAsyncActionFromQueryWithMiddlewares", jsonResult)
              // Combine the first middleware with additional middlewares
              const extendedMiddlewares = [firstmiddleware, ...middlewares];
              const chain = extendedMiddlewares.reduceRight(
                  (next, middleware) => (result) => middleware(result)(dispatch, getState)(next),
                  (finalResult) => finalResult // Base case: pass through final result
              );

              // Start the middleware chain

              return chain(jsonResult);
          } catch (error) {
              console.error("CreateAsyncActionFromQueryMDLWR: Error during async action execution", error);
              throw error;
          }
      };
  };
};

const UsersVisualiser = ({items=[]}) => {
    console.log("UsersVisualiser", items)
    return (
        <Row>
            {items.map(
                user => <Col key={user.id}>
                    <UserMediumCard user={user} />
                </Col>
            )}
        </Row>
    )
}

// const UserPageAsyncAction = WrapAsyncActionWithFunction(CreateAsyncActionFromQuery(allusersquery), (jsonresult => jsonresult?.data?.result))
const _UserPageAsyncAction = CreateAsyncActionFromQueryWithMiddlewares2(allusersquery, GQLUpdateItemAfterFetchMDLWR, ExtractResultMDLWR)
// const UserPageAsyncAction = null
export const UsersInfinityComponent = ({skip=0, limit=10, UserPageAsyncAction=_UserPageAsyncAction, ...props}) => {
// export const UsersInfinityComponent = ({...props}) => {
    console.log("UsersInfinityComponent")
    return (
        <InfiniteScroll actionParams={{...props, skip, limit}} asyncAction={UserPageAsyncAction} Visualiser={UsersVisualiser} />
    )
    // return <>HI from UsersInfinityComponent</>
}