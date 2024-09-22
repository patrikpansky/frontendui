import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AclessonLargeCard } from "../../Components/Aclesson/AclessonLargeCard";

const AclessonIdPageRelayQuery = graphql`
    query AclessonPageRelayQuery($id: UUID!) { 
        result: aclessonById(id: $id) { 
            id 
            ...AclessonMediumCardRelayFragment
        }
    }
`

export const AclessonIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AclessonIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const aclesson = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AclessonLargeCard aclesson={ aclesson }>
                {/* other data */}
            </AclessonLargeCard>
        </Suspense>
    );    
}