// import {graphql} from 'graphql'
import { InvitationtypeMediumCardRelay } from './UserMediumCardRelay';
import { InvitationtypeLargeCardLayout } from './InvitationtypeLargeCardLayout';

export const InvitationtypeLargeCardRelay = ({ invitationtype, children}) => {
    return (
        <InvitationtypeLargeCardLayout invitationtype={ invitationtype } grandchildren={children}>
            <InvitationtypeMediumCardRelay invitationtype={ invitationtype } />
        </InvitationtypeLargeCardLayout>
    )
}

