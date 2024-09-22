import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { RequestLargeCard } from "../../Components/Request/RequestLargeCard";

const RequestIdPageRelayQuery = graphql`
    query RequestPageRelayQuery($id: UUID!) { 
        result: requestById(id: $id) { 
            id 
            ...RequestMediumCardRelayFragment
        }
    }
`

export const RequestIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(RequestIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const request = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <RequestLargeCard request={ request }>
                {/* other data */}
            </RequestLargeCard>
        </Suspense>
    );    
}