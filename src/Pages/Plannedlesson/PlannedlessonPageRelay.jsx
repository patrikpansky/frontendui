import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { PlannedlessonLargeCard } from "../../Components/Plannedlesson/PlannedlessonLargeCard";

const PlannedlessonPageRelayQuery = graphql`
    query PlannedlessonPageRelayQuery($id: UUID!) { 
        result: plannedlessonById(id: $id) { 
            id
            name
            lastchange
            created
            order
            length
            ...PlannedlessonMediumCardRelayFragment
        }
    }
`

export const PlannedlessonPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(PlannedlessonPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const plannedlesson = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <PlannedlessonLargeCard plannedlesson={ plannedlesson }>
                {/* other data */}
            </PlannedlessonLargeCard>
        </Suspense>
    );    
}