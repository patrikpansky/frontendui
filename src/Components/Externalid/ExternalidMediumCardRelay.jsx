// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { ExternalidMediumCard } from './ExternalidMediumCard';

const ExternalidMediumCardRelayFragment = graphql`fragment ExternalidMediumCardRelayFragment on ExternalidGQLModel {
    id
    lastchange
    created
    innerid
    outerid
    typename
    link
}`

export const ExternalidMediumCardRelay = ({ externalid, children }) => {
    const externalid_ = useFragment(ExternalidMediumCardRelayFragment, externalid);
    return (
        <ExternalidMediumCard externalid = { externalid_ }>
            {children}
        </ExternalidMediumCard>
    )
}

