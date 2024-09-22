import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AcprogramstudentstateLargeCard } from "../../Components/Acprogramstudentstate/AcprogramstudentstateLargeCard";

const AcprogramstudentstatePageRelayQuery = graphql`
    query AcprogramstudentstatePageRelayQuery($id: UUID!) { 
        result: acprogramstudentstateById(id: $id) { 
            id
            name
            nameen
            created
            lastchange
            ...AcprogramstudentstateMediumCardRelayFragment
        }
    }
`

export const AcprogramstudentstatePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AcprogramstudentstatePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const acprogramstudentstate = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AcprogramstudentstateLargeCard acprogramstudentstate={ acprogramstudentstate }>
                {/* other data */}
            </AcprogramstudentstateLargeCard>
        </Suspense>
    );    
}