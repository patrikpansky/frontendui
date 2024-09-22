import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AcclassificationlevelLargeCard } from "../../Components/Acclassificationlevel/AcclassificationlevelLargeCard";

const AcclassificationlevelPageRelayQuery = graphql`
    query AcclassificationlevelPageRelayQuery($id: UUID!) { 
        result: acclassificationlevelById(id: $id) { 
            id
            name
            nameen
            created
            lastchange
            ...AcclassificationlevelMediumCardRelayFragment
        }
    }
`

export const AcclassificationlevelPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AcclassificationlevelPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const acclassificationlevel = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AcclassificationlevelLargeCard acclassificationlevel={ acclassificationlevel }>
                {/* other data */}
            </AcclassificationlevelLargeCard>
        </Suspense>
    );    
}