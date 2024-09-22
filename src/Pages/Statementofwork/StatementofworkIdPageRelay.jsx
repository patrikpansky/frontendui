import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { StatementofworkLargeCard } from "../../Components/Statementofwork/StatementofworkLargeCard";

const StatementofworkIdPageRelayQuery = graphql`
    query StatementofworkPageRelayQuery($id: UUID!) { 
        result: statementofworkById(id: $id) { 
            id 
            ...StatementofworkMediumCardRelayFragment
        }
    }
`

export const StatementofworkIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(StatementofworkIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const statementofwork = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <StatementofworkLargeCard statementofwork={ statementofwork }>
                {/* other data */}
            </StatementofworkLargeCard>
        </Suspense>
    );    
}