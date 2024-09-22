// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { UserMediumCard } from './UserMediumCard';

const UserMediumCardRelayFragment = graphql`fragment UserMediumCardRelayFragment on UserGQLModel {
    id
    created
    lastchange
    name
    firstname
    surname
    fullname
    email
    valid
    isthisme
    gdpr
}`

export const UserMediumCardRelay = ({ user, children }) => {
    const user_ = useFragment(UserMediumCardRelayFragment, user);
    return (
        <UserMediumCard user = { user_ }>
            {children}
        </UserMediumCard>
    )
}

