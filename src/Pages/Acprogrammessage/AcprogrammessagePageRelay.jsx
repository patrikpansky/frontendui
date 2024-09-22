import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AcprogrammessageLargeCard } from "../../Components/Acprogrammessage/AcprogrammessageLargeCard";

const AcprogrammessagePageRelayQuery = graphql`
    query AcprogrammessagePageRelayQuery($id: UUID!) { 
        result: acprogrammessageById(id: $id) { 
            id
            created
            lastchange
            name
            description
            date
            ...AcprogrammessageMediumCardRelayFragment
        }
    }
`

export const AcprogrammessagePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AcprogrammessagePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const acprogrammessage = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AcprogrammessageLargeCard acprogrammessage={ acprogrammessage }>
                {/* other data */}
            </AcprogrammessageLargeCard>
        </Suspense>
    );    
}