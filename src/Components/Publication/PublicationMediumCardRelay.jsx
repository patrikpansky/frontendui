// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { PublicationMediumCard } from './PublicationMediumCard';

const PublicationMediumCardRelayFragment = graphql`fragment PublicationMediumCardRelayFragment on PublicationGQLModel {
    id
    name
    created
    lastchange
    publisheddate
    place
    reference
    valid
}`

export const PublicationMediumCardRelay = ({ publication, children }) => {
    const publication_ = useFragment(PublicationMediumCardRelayFragment, publication);
    return (
        <PublicationMediumCard publication = { publication_ }>
            {children}
        </PublicationMediumCard>
    )
}

