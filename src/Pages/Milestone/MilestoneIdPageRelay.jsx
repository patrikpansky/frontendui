import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { MilestoneLargeCard } from "../../Components/Milestone/MilestoneLargeCard";

const MilestoneIdPageRelayQuery = graphql`
    query MilestonePageRelayQuery($id: UUID!) { 
        result: milestoneById(id: $id) { 
            id 
            ...MilestoneMediumCardRelayFragment
        }
    }
`

export const MilestoneIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(MilestoneIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const milestone = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <MilestoneLargeCard milestone={ milestone }>
                {/* other data */}
            </MilestoneLargeCard>
        </Suspense>
    );    
}