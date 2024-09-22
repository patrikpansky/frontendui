import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { EventtypeLargeCard } from "../../Components/Eventtype/EventtypeLargeCard";

const EventtypePageRelayQuery = graphql`
    query EventtypePageRelayQuery($id: UUID!) { 
        result: eventtypeById(id: $id) { 
            id
            name
            nameen
            lastchange
            created
            ...EventtypeMediumCardRelayFragment
        }
    }
`

export const EventtypePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(EventtypePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const eventtype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <EventtypeLargeCard eventtype={ eventtype }>
                {/* other data */}
            </EventtypeLargeCard>
        </Suspense>
    );    
}