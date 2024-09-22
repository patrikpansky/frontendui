import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { EventLargeCard } from "../../Components/Event/EventLargeCard";

const EventIdPageRelayQuery = graphql`
    query EventPageRelayQuery($id: UUID!) { 
        result: eventById(id: $id) { 
            id 
            ...EventMediumCardRelayFragment
        }
    }
`

export const EventIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(EventIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const event = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <EventLargeCard event={ event }>
                {/* other data */}
            </EventLargeCard>
        </Suspense>
    );    
}