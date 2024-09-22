// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { ExternalidcategoryMediumCard } from './ExternalidcategoryMediumCard';

const ExternalidcategoryMediumCardRelayFragment = graphql`fragment ExternalidcategoryMediumCardRelayFragment on ExternalidcategoryGQLModel {
    id
    name
    nameen
    lastchange
    created
}`

export const ExternalidcategoryMediumCardRelay = ({ externalidcategory, children }) => {
    const externalidcategory_ = useFragment(ExternalidcategoryMediumCardRelayFragment, externalidcategory);
    return (
        <ExternalidcategoryMediumCard externalidcategory = { externalidcategory_ }>
            {children}
        </ExternalidcategoryMediumCard>
    )
}

