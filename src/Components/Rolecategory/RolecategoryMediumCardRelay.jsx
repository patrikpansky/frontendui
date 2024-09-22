// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { RolecategoryMediumCard } from './RolecategoryMediumCard';

const RolecategoryMediumCardRelayFragment = graphql`fragment RolecategoryMediumCardRelayFragment on RolecategoryGQLModel {
    id
    created
    lastchange
    name
    nameen
}`

export const RolecategoryMediumCardRelay = ({ rolecategory, children }) => {
    const rolecategory_ = useFragment(RolecategoryMediumCardRelayFragment, rolecategory);
    return (
        <RolecategoryMediumCard rolecategory = { rolecategory_ }>
            {children}
        </RolecategoryMediumCard>
    )
}

