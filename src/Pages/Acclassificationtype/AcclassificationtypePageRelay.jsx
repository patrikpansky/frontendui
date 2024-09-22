import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AcclassificationtypeLargeCard } from "../../Components/Acclassificationtype/AcclassificationtypeLargeCard";

const AcclassificationtypePageRelayQuery = graphql`
    query AcclassificationtypePageRelayQuery($id: UUID!) { 
        result: acclassificationtypeById(id: $id) { 
            id
            name
            nameen
            created
            lastchange
            ...AcclassificationtypeMediumCardRelayFragment
        }
    }
`

export const AcclassificationtypePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AcclassificationtypePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const acclassificationtype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AcclassificationtypeLargeCard acclassificationtype={ acclassificationtype }>
                {/* other data */}
            </AcclassificationtypeLargeCard>
        </Suspense>
    );    
}