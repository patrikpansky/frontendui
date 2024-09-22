import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { EventpresenceLargeCard } from "../../Components/Eventpresence/EventpresenceLargeCard";

const EventpresenceIdPageRelayQuery = graphql`
    query EventpresencePageRelayQuery($id: UUID!) { 
        result: eventpresenceById(id: $id) { 
            id 
            ...EventpresenceMediumCardRelayFragment
        }
    }
`

export const EventpresenceIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(EventpresenceIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const eventpresence = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <EventpresenceLargeCard eventpresence={ eventpresence }>
                {/* other data */}
            </EventpresenceLargeCard>
        </Suspense>
    );    
}