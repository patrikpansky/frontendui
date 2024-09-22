import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { StatetransitionLargeCard } from "../../Components/Statetransition/StatetransitionLargeCard";

const StatetransitionIdPageRelayQuery = graphql`
    query StatetransitionPageRelayQuery($id: UUID!) { 
        result: statetransitionById(id: $id) { 
            id 
            ...StatetransitionMediumCardRelayFragment
        }
    }
`

export const StatetransitionIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(StatetransitionIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const statetransition = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <StatetransitionLargeCard statetransition={ statetransition }>
                {/* other data */}
            </StatetransitionLargeCard>
        </Suspense>
    );    
}