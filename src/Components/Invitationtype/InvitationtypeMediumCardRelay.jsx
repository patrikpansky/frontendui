// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { InvitationtypeMediumCard } from './InvitationtypeMediumCard';

const InvitationtypeMediumCardRelayFragment = graphql`fragment InvitationtypeMediumCardRelayFragment on InvitationtypeGQLModel {
    id
    name
    nameen
    lastchange
    created
}`

export const InvitationtypeMediumCardRelay = ({ invitationtype, children }) => {
    const invitationtype_ = useFragment(InvitationtypeMediumCardRelayFragment, invitationtype);
    return (
        <InvitationtypeMediumCard invitationtype = { invitationtype_ }>
            {children}
        </InvitationtypeMediumCard>
    )
}

