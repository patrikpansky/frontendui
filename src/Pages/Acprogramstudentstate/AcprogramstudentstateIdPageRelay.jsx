import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AcprogramstudentstateLargeCard } from "../../Components/Acprogramstudentstate/AcprogramstudentstateLargeCard";

const AcprogramstudentstateIdPageRelayQuery = graphql`
    query AcprogramstudentstatePageRelayQuery($id: UUID!) { 
        result: acprogramstudentstateById(id: $id) { 
            id 
            ...AcprogramstudentstateMediumCardRelayFragment
        }
    }
`

export const AcprogramstudentstateIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AcprogramstudentstateIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const acprogramstudentstate = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AcprogramstudentstateLargeCard acprogramstudentstate={ acprogramstudentstate }>
                {/* other data */}
            </AcprogramstudentstateLargeCard>
        </Suspense>
    );    
}