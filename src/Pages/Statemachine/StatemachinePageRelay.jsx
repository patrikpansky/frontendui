import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { StatemachineLargeCard } from "../../Components/Statemachine/StatemachineLargeCard";

const StatemachinePageRelayQuery = graphql`
    query StatemachinePageRelayQuery($id: UUID!) { 
        result: statemachineById(id: $id) { 
            id
            created
            lastchange
            name
            nameen
            ...StatemachineMediumCardRelayFragment
        }
    }
`

export const StatemachinePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(StatemachinePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const statemachine = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <StatemachineLargeCard statemachine={ statemachine }>
                {/* other data */}
            </StatemachineLargeCard>
        </Suspense>
    );    
}