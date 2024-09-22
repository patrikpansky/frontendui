// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { FinancecategoryMediumCard } from './FinancecategoryMediumCard';

const FinancecategoryMediumCardRelayFragment = graphql`fragment FinancecategoryMediumCardRelayFragment on FinancecategoryGQLModel {
    id
    name
    nameen
    lastchange
    created
}`

export const FinancecategoryMediumCardRelay = ({ financecategory, children }) => {
    const financecategory_ = useFragment(FinancecategoryMediumCardRelayFragment, financecategory);
    return (
        <FinancecategoryMediumCard financecategory = { financecategory_ }>
            {children}
        </FinancecategoryMediumCard>
    )
}

