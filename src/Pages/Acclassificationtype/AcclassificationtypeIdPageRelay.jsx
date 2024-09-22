import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AcclassificationtypeLargeCard } from "../../Components/Acclassificationtype/AcclassificationtypeLargeCard";

const AcclassificationtypeIdPageRelayQuery = graphql`
    query AcclassificationtypePageRelayQuery($id: UUID!) { 
        result: acclassificationtypeById(id: $id) { 
            id 
            ...AcclassificationtypeMediumCardRelayFragment
        }
    }
`

export const AcclassificationtypeIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AcclassificationtypeIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const acclassificationtype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AcclassificationtypeLargeCard acclassificationtype={ acclassificationtype }>
                {/* other data */}
            </AcclassificationtypeLargeCard>
        </Suspense>
    );    
}