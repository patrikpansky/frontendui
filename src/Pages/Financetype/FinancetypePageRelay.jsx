import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { FinancetypeLargeCard } from "../../Components/Financetype/FinancetypeLargeCard";

const FinancetypePageRelayQuery = graphql`
    query FinancetypePageRelayQuery($id: UUID!) { 
        result: financetypeById(id: $id) { 
            id
            name
            nameen
            lastchange
            created
            valid
            ...FinancetypeMediumCardRelayFragment
        }
    }
`

export const FinancetypePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(FinancetypePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const financetype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <FinancetypeLargeCard financetype={ financetype }>
                {/* other data */}
            </FinancetypeLargeCard>
        </Suspense>
    );    
}