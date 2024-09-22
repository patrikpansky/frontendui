import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { FinancecategoryLargeCard } from "../../Components/Financecategory/FinancecategoryLargeCard";

const FinancecategoryIdPageRelayQuery = graphql`
    query FinancecategoryPageRelayQuery($id: UUID!) { 
        result: financecategoryById(id: $id) { 
            id 
            ...FinancecategoryMediumCardRelayFragment
        }
    }
`

export const FinancecategoryIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(FinancecategoryIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const financecategory = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <FinancecategoryLargeCard financecategory={ financecategory }>
                {/* other data */}
            </FinancecategoryLargeCard>
        </Suspense>
    );    
}