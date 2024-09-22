import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AcsubjectLargeCard } from "../../Components/Acsubject/AcsubjectLargeCard";

const AcsubjectPageRelayQuery = graphql`
    query AcsubjectPageRelayQuery($id: UUID!) { 
        result: acsubjectById(id: $id) { 
            id
            name
            nameen
            created
            lastchange
            ...AcsubjectMediumCardRelayFragment
        }
    }
`

export const AcsubjectPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AcsubjectPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const acsubject = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AcsubjectLargeCard acsubject={ acsubject }>
                {/* other data */}
            </AcsubjectLargeCard>
        </Suspense>
    );    
}