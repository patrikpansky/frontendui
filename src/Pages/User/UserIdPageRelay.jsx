import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { UserLargeCard } from "../../Components/User/UserLargeCard";

const UserIdPageRelayQuery = graphql`
    query UserPageRelayQuery($id: UUID!) { 
        result: userById(id: $id) { 
            id 
            ...UserMediumCardRelayFragment
        }
    }
`

export const UserIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(UserIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const user = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <UserLargeCard user={ user }>
                {/* other data */}
            </UserLargeCard>
        </Suspense>
    );    
}