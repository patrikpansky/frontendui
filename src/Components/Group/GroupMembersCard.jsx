/* eslint-disable react/prop-types */
import { CardCapsule, CreateAsyncActionFromQueryWithMiddlewares, GQLExtendSubVectorMDLWR } from '@hrbolek/uoisfrontend-shared/src'
import { UserLink } from '../User/UserLink'
import { GroupLink } from './GroupLink'
import { InfiniteScroll } from "@hrbolek/uoisfrontend-shared/src";
import { UserMediumCardDeffered } from '../User';
import { Col, Row } from 'react-bootstrap';

const ReadGroupMembershipsQuery = `
query ReadGroupMembershipsQueryById($id: UUID!, $skip: Int, $limit: Int, $where: MembershipInputWhereFilter) {
  result: groupById(id: $id) {
    ...Group
  }
}

fragment Group on GroupGQLModel {
	__typename
  id
  memberships(where: $where, skip: $skip, limit: $limit) {
    id
    lastchange
    startdate
    enddate
    valid
    user { id fullname }
  }
}
`

const ReadGroupMembershipsAsyncAction = CreateAsyncActionFromQueryWithMiddlewares(
    ReadGroupMembershipsQuery, {},
    GQLExtendSubVectorMDLWR("memberships"),
    (jsonResult) => (/* dispatch , getState */) => (next) => {
        // console.log("ReadGroupMembershipsAsyncAction", jsonResult)
        const memberships = jsonResult?.data?.result?.memberships || [];
        return next(memberships)
    }
)

const UserShort = ({user}) => {
    if (user) {
        return (
            <Col>
                {/* <UserLink user={user} menu={false}/> <br/> */}
                <UserMediumCardDeffered user={user} />
            </Col>
        )
    } else {
        return null
    }

}

export const GroupMembersCard = ({group, valid=true}) => {
    const membership = group?.memberships || []
    const filtered = (valid===null)?membership:membership.filter(m => m?.valid === valid)
    const mapped = filtered.map(m => m?.user)
    return (
        <CardCapsule title={<>Členové <GroupLink group={group} /></>}>
            <Row>
            {mapped.map(
                u => <UserShort key={u?.id} user={u} />
            )}
            <br />
            {}
            </Row>
        </CardCapsule>

    )
}

const Memberships = ({memberships=[]}) => {
    const users = memberships.map( m => m?.user)
    return (
        <>
            {users.map(
                user => <UserShort key={user.id} user={user} />
            )}
        </>
    )
}

export const GroupMembershipsInfinityComponent = ({group, skip=0, limit=10, MembershipPageAsyncAction=ReadGroupMembershipsAsyncAction, ...props}) => {
    return (
        <InfiniteScroll actionParams={{id: group.id, ...props, skip, limit}} asyncAction={MembershipPageAsyncAction} Visualiser={Memberships} />
    )
}