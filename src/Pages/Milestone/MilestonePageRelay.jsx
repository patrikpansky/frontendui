import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { MilestoneLargeCard } from "../../Components/Milestone/MilestoneLargeCard";

const MilestonePageRelayQuery = graphql`
    query MilestonePageRelayQuery($id: UUID!) { 
        result: milestoneById(id: $id) { 
            id
            name
            startdate
            enddate
            lastchange
            created
            valid
            ...MilestoneMediumCardRelayFragment
        }
    }
`

export const MilestonePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(MilestonePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const milestone = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <MilestoneLargeCard milestone={ milestone }>
                {/* other data */}
            </MilestoneLargeCard>
        </Suspense>
    );    
}