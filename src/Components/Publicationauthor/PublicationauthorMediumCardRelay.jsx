// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { PublicationauthorMediumCard } from './PublicationauthorMediumCard';

const PublicationauthorMediumCardRelayFragment = graphql`fragment PublicationauthorMediumCardRelayFragment on PublicationauthorGQLModel {
    id
    name
    lastchange
    order
    share
    valid
}`

export const PublicationauthorMediumCardRelay = ({ publicationauthor, children }) => {
    const publicationauthor_ = useFragment(PublicationauthorMediumCardRelayFragment, publicationauthor);
    return (
        <PublicationauthorMediumCard publicationauthor = { publicationauthor_ }>
            {children}
        </PublicationauthorMediumCard>
    )
}

