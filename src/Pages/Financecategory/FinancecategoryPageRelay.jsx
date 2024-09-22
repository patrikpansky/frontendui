import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { FinancecategoryLargeCard } from "../../Components/Financecategory/FinancecategoryLargeCard";

const FinancecategoryPageRelayQuery = graphql`
    query FinancecategoryPageRelayQuery($id: UUID!) { 
        result: financecategoryById(id: $id) { 
            id
            name
            nameen
            lastchange
            created
            ...FinancecategoryMediumCardRelayFragment
        }
    }
`

export const FinancecategoryPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(FinancecategoryPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const financecategory = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <FinancecategoryLargeCard financecategory={ financecategory }>
                {/* other data */}
            </FinancecategoryLargeCard>
        </Suspense>
    );    
}