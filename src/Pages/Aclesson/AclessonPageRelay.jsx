import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AclessonLargeCard } from "../../Components/Aclesson/AclessonLargeCard";

const AclessonPageRelayQuery = graphql`
    query AclessonPageRelayQuery($id: UUID!) { 
        result: aclessonById(id: $id) { 
            id
            name
            nameen
            created
            lastchange
            count
            ...AclessonMediumCardRelayFragment
        }
    }
`

export const AclessonPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AclessonPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const aclesson = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AclessonLargeCard aclesson={ aclesson }>
                {/* other data */}
            </AclessonLargeCard>
        </Suspense>
    );    
}