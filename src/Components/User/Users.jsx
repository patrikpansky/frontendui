import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { UserMediumCard } from "./UserMediumCard"
import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src";
import { InfiniteScroll } from "../InfiniteScroll";

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