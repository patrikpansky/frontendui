import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { StateLargeCard } from "../../Components/State/StateLargeCard";

const StatePageRelayQuery = graphql`
    query StatePageRelayQuery($id: UUID!) { 
        result: stateById(id: $id) { 
            id
            created
            lastchange
            name
            nameen
            order
            ...StateMediumCardRelayFragment
        }
    }
`

export const StatePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(StatePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const state = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <StateLargeCard state={ state }>
                {/* other data */}
            </StateLargeCard>
        </Suspense>
    );    
}