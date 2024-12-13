import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { InfiniteScroll } from "@hrbolek/uoisfrontend-shared"
import { UserLink, UserMediumCard } from "../../User"
import { GroupCardCapsule } from "../GroupCardCapsule"



const GroupQuery =
`
query groupById($id: UUID!, $limit: Int, $skip: Int, $where: MembershipInputWhereFilter) {
  groupById(id: $id) {
    __typename
    id
    memberships(limit: $limit, skip: $skip, where: $where) {
      __typename
      id
      user {
        __typename
        id
        fullname
        email
      }
      valid
    }
  }
}
`

const GroupQueryAsyncAction = createAsyncGraphQLAction(
    GroupQuery,
    processVectorAttributeFromGraphQLResult("memberships"),

)

const MembershipVisualiser = ({membership}) => {
    if (membership?.user) {
        return (
            <Col>
                <UserLink user={membership?.user} />
            </Col>
        )
    } 
    return null
}

export const GroupUsersInfinite = ({group}) => {
    return (
        <GroupCardCapsule group={group} >
            <Row>
                <InfiniteScroll asyncAction={GroupQueryAsyncAction} Visualiser={MembershipVisualiser} actionParams={group}/>
            </Row>
            <div>
                {JSON.stringify(group, null, 4)}
            </div>
        </GroupCardCapsule>
    )
}

// export const GroupUsersInfinite = 