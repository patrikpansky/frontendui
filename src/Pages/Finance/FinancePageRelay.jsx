import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { FinanceLargeCard } from "../../Components/Finance/FinanceLargeCard";

const FinancePageRelayQuery = graphql`
    query FinancePageRelayQuery($id: UUID!) { 
        result: financeById(id: $id) { 
            id
            name
            amount
            lastchange
            created
            valid
            ...FinanceMediumCardRelayFragment
        }
    }
`

export const FinancePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(FinancePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const finance = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <FinanceLargeCard finance={ finance }>
                {/* other data */}
            </FinanceLargeCard>
        </Suspense>
    );    
}