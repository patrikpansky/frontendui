import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { StatementofworkLargeCard } from "../../Components/Statementofwork/StatementofworkLargeCard";

const StatementofworkPageRelayQuery = graphql`
    query StatementofworkPageRelayQuery($id: UUID!) { 
        result: statementofworkById(id: $id) { 
            id
            lastchange
            startdate
            enddate
            created
            valid
            ...StatementofworkMediumCardRelayFragment
        }
    }
`

export const StatementofworkPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(StatementofworkPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const statementofwork = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <StatementofworkLargeCard statementofwork={ statementofwork }>
                {/* other data */}
            </StatementofworkLargeCard>
        </Suspense>
    );    
}