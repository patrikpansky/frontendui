import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { RbacLargeCard } from "../../Components/Rbac/RbacLargeCard";

const RbacIdPageRelayQuery = graphql`
    query RbacPageRelayQuery($id: UUID!) { 
        result: rbacById(id: $id) { 
            id 
            ...RbacMediumCardRelayFragment
        }
    }
`

export const RbacIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(RbacIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const rbac = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <RbacLargeCard rbac={ rbac }>
                {/* other data */}
            </RbacLargeCard>
        </Suspense>
    );    
}