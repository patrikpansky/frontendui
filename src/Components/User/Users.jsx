import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { UserMediumCard } from "./UserMediumCard"
import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src";
import { InfiniteScroll } from "../InfiniteScroll";

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

const UsersVisualiser = ({items=[]}) => 
    <Row>
        {items.map(
            user => <Col key={user.id}>
                <UserMediumCard user={user} />
            </Col>
        )}
    </Row>

const UserPageAsyncAction = WrapAsyncActionWithFunction(CreateAsyncActionFromQuery(allusersquery), (jsonresult => jsonresult?.data?.result))

export const UsersInfinityComponent = ({skip=0, limit=10, UserPageAsyncAction=UserPageAsyncAction, ...props}) => {
    return (
        <InfiniteScroll actionParams={{...props, skip, limit}} asyncAction={UserPageAsyncAction} Visualiser={UsersVisualiser} />
    )
}