// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { ExternalidtypeMediumCard } from './ExternalidtypeMediumCard';

const ExternalidtypeMediumCardRelayFragment = graphql`fragment ExternalidtypeMediumCardRelayFragment on ExternalidtypeGQLModel {
    id
    name
    nameen
    lastchange
    created
}`

export const ExternalidtypeMediumCardRelay = ({ externalidtype, children }) => {
    const externalidtype_ = useFragment(ExternalidtypeMediumCardRelayFragment, externalidtype);
    return (
        <ExternalidtypeMediumCard externalidtype = { externalidtype_ }>
            {children}
        </ExternalidtypeMediumCard>
    )
}

