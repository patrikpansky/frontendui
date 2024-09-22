import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { PlanLargeCard } from "../../Components/Plan/PlanLargeCard";

const PlanIdPageRelayQuery = graphql`
    query PlanPageRelayQuery($id: UUID!) { 
        result: planById(id: $id) { 
            id 
            ...PlanMediumCardRelayFragment
        }
    }
`

export const PlanIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(PlanIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const plan = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <PlanLargeCard plan={ plan }>
                {/* other data */}
            </PlanLargeCard>
        </Suspense>
    );    
}