import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AcprogramstudentLargeCard } from "../../Components/Acprogramstudent/AcprogramstudentLargeCard";

const AcprogramstudentIdPageRelayQuery = graphql`
    query AcprogramstudentPageRelayQuery($id: UUID!) { 
        result: acprogramstudentById(id: $id) { 
            id 
            ...AcprogramstudentMediumCardRelayFragment
        }
    }
`

export const AcprogramstudentIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AcprogramstudentIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const acprogramstudent = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AcprogramstudentLargeCard acprogramstudent={ acprogramstudent }>
                {/* other data */}
            </AcprogramstudentLargeCard>
        </Suspense>
    );    
}