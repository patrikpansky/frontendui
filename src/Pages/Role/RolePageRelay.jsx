import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { RoleLargeCard } from "../../Components/Role/RoleLargeCard";

const RolePageRelayQuery = graphql`
    query RolePageRelayQuery($id: UUID!) { 
        result: roleById(id: $id) { 
            id
            created
            lastchange
            valid
            startdate
            enddate
            ...RoleMediumCardRelayFragment
        }
    }
`

export const RolePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(RolePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const role = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <RoleLargeCard role={ role }>
                {/* other data */}
            </RoleLargeCard>
        </Suspense>
    );    
}