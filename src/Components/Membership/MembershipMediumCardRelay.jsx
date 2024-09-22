// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { MembershipMediumCard } from './MembershipMediumCard';

const MembershipMediumCardRelayFragment = graphql`fragment MembershipMediumCardRelayFragment on MembershipGQLModel {
    id
    created
    lastchange
    valid
    startdate
    enddate
}`

export const MembershipMediumCardRelay = ({ membership, children }) => {
    const membership_ = useFragment(MembershipMediumCardRelayFragment, membership);
    return (
        <MembershipMediumCard membership = { membership_ }>
            {children}
        </MembershipMediumCard>
    )
}

