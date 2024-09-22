import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AcclassificationLargeCard } from "../../Components/Acclassification/AcclassificationLargeCard";

const AcclassificationPageRelayQuery = graphql`
    query AcclassificationPageRelayQuery($id: UUID!) { 
        result: acclassificationById(id: $id) { 
            id
            created
            lastchange
            date
            order
            ...AcclassificationMediumCardRelayFragment
        }
    }
`

export const AcclassificationPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AcclassificationPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const acclassification = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AcclassificationLargeCard acclassification={ acclassification }>
                {/* other data */}
            </AcclassificationLargeCard>
        </Suspense>
    );    
}