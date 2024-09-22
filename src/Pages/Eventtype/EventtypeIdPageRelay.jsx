import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { EventtypeLargeCard } from "../../Components/Eventtype/EventtypeLargeCard";

const EventtypeIdPageRelayQuery = graphql`
    query EventtypePageRelayQuery($id: UUID!) { 
        result: eventtypeById(id: $id) { 
            id 
            ...EventtypeMediumCardRelayFragment
        }
    }
`

export const EventtypeIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(EventtypeIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const eventtype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <EventtypeLargeCard eventtype={ eventtype }>
                {/* other data */}
            </EventtypeLargeCard>
        </Suspense>
    );    
}