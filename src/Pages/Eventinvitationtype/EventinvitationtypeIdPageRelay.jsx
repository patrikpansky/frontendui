import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { EventinvitationtypeLargeCard } from "../../Components/Eventinvitationtype/EventinvitationtypeLargeCard";

const EventinvitationtypeIdPageRelayQuery = graphql`
    query EventinvitationtypePageRelayQuery($id: UUID!) { 
        result: eventinvitationtypeById(id: $id) { 
            id 
            ...EventinvitationtypeMediumCardRelayFragment
        }
    }
`

export const EventinvitationtypeIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(EventinvitationtypeIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const eventinvitationtype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <EventinvitationtypeLargeCard eventinvitationtype={ eventinvitationtype }>
                {/* other data */}
            </EventinvitationtypeLargeCard>
        </Suspense>
    );    
}