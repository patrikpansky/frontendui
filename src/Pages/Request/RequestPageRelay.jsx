import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { RequestLargeCard } from "../../Components/Request/RequestLargeCard";

const RequestPageRelayQuery = graphql`
    query RequestPageRelayQuery($id: UUID!) { 
        result: requestById(id: $id) { 
            id
            name
            lastchange
            created
            nameen
            gdpr
            ...RequestMediumCardRelayFragment
        }
    }
`

export const RequestPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(RequestPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const request = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <RequestLargeCard request={ request }>
                {/* other data */}
            </RequestLargeCard>
        </Suspense>
    );    
}