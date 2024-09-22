// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { PublicationtypeMediumCard } from './PublicationtypeMediumCard';

const PublicationtypeMediumCardRelayFragment = graphql`fragment PublicationtypeMediumCardRelayFragment on PublicationtypeGQLModel {
    id
    name
    created
    lastchange
}`

export const PublicationtypeMediumCardRelay = ({ publicationtype, children }) => {
    const publicationtype_ = useFragment(PublicationtypeMediumCardRelayFragment, publicationtype);
    return (
        <PublicationtypeMediumCard publicationtype = { publicationtype_ }>
            {children}
        </PublicationtypeMediumCard>
    )
}

