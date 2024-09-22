import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AcsubjectLargeCard } from "../../Components/Acsubject/AcsubjectLargeCard";

const AcsubjectIdPageRelayQuery = graphql`
    query AcsubjectPageRelayQuery($id: UUID!) { 
        result: acsubjectById(id: $id) { 
            id 
            ...AcsubjectMediumCardRelayFragment
        }
    }
`

export const AcsubjectIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AcsubjectIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const acsubject = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AcsubjectLargeCard acsubject={ acsubject }>
                {/* other data */}
            </AcsubjectLargeCard>
        </Suspense>
    );    
}