import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { CreateAsyncActionFromQueryWithMiddlewares, ExtractResultMDLWR, GQLUpdateItemAfterFetchMDLWR } from "@hrbolek/uoisfrontend-shared/src";
import { InfiniteScroll } from "@hrbolek/uoisfrontend-shared/src";
import { GroupMediumCard } from "./GroupMediumCard";

const allgroupsquery = `
query GroupPage($skip: Int, $limit: Int, $where: GroupInputWhereFilter={valid: {_eq: true}}) {
  result: groupPage(skip: $skip, limit: $limit, where: $where) {
    ...Group
  }
}

fragment Group on GroupGQLModel {
	__typename
  id
  lastchange
  name
  nameEn
  
  created
  createdby { id email }
  changedby { id email }
  
  email
  valid
  grouptype { id name }
  subgroups { id name }
  mastergroup { id name }
}
`

const GroupVisualiser = ({items=[]}) => 
    <Row>
        {items.map(
            group => <Col key={group.id}>
                <GroupMediumCard group={group} />
            </Col>
        )}
    </Row>

/**
 * Asynchronous Redux action to fetch groups data using a GraphQL query and process the result with middleware.
 *
 * Combines a GraphQL query with a series of middleware functions to update items in the state and extract the result.
 *
 * @constant
 * @type {Function}
 * @param {Object} variables - Variables to pass to the GraphQL query.
 * @returns {Function} A dispatchable async action.
 *
 * @example
 * // Example usage in a Redux environment:
 * dispatch(GroupsPageAsyncAction({ limit: 10, skip: 0 }))
 *   .then((result) => {
 *       console.log("Extracted result:", result);
 *   })
 *   .catch((error) => {
 *       console.error("Error fetching groups:", error);
 *   });
 *
 * @example
 * // Simulated GraphQL query structure:
 * const allgroupsquery = `
 *   query AllGroups($limit: Int, $skip: Int) {
 *     groups(limit: $limit, skip: $skip) {
 *       id
 *       name
 *     }
 *   }
 * `;
 *
 * @see CreateAsyncActionFromQueryWithMiddlewares
 * @see GQLUpdateItemAfterFetchMDLWR
 * @see ExtractResultMDLWR
 */
const GroupsPageAsyncAction = CreateAsyncActionFromQueryWithMiddlewares(allgroupsquery, 
    GQLUpdateItemAfterFetchMDLWR,
    ExtractResultMDLWR)

export const GroupInfinityComponent = ({skip=0, limit=10, GroupPageAsyncAction=GroupsPageAsyncAction, ...props}) => {
    return (
        <InfiniteScroll actionParams={{...props, skip, limit}} asyncAction={GroupPageAsyncAction} Visualiser={GroupVisualiser} />
    )
}