import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { PlannedlessonLargeCard } from "../../Components/Plannedlesson/PlannedlessonLargeCard";

const PlannedlessonIdPageRelayQuery = graphql`
    query PlannedlessonPageRelayQuery($id: UUID!) { 
        result: plannedlessonById(id: $id) { 
            id 
            ...PlannedlessonMediumCardRelayFragment
        }
    }
`

export const PlannedlessonIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(PlannedlessonIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const plannedlesson = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <PlannedlessonLargeCard plannedlesson={ plannedlesson }>
                {/* other data */}
            </PlannedlessonLargeCard>
        </Suspense>
    );    
}