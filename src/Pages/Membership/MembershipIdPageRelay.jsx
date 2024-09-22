import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { MembershipLargeCard } from "../../Components/Membership/MembershipLargeCard";

const MembershipIdPageRelayQuery = graphql`
    query MembershipPageRelayQuery($id: UUID!) { 
        result: membershipById(id: $id) { 
            id 
            ...MembershipMediumCardRelayFragment
        }
    }
`

export const MembershipIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(MembershipIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const membership = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <MembershipLargeCard membership={ membership }>
                {/* other data */}
            </MembershipLargeCard>
        </Suspense>
    );    
}