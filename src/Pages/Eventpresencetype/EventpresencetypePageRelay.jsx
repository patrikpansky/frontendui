import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { EventpresencetypeLargeCard } from "../../Components/Eventpresencetype/EventpresencetypeLargeCard";

const EventpresencetypePageRelayQuery = graphql`
    query EventpresencetypePageRelayQuery($id: UUID!) { 
        result: eventpresencetypeById(id: $id) { 
            id
            name
            nameen
            lastchange
            created
            ...EventpresencetypeMediumCardRelayFragment
        }
    }
`

export const EventpresencetypePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(EventpresencetypePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const eventpresencetype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <EventpresencetypeLargeCard eventpresencetype={ eventpresencetype }>
                {/* other data */}
            </EventpresencetypeLargeCard>
        </Suspense>
    );    
}