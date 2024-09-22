import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AcprogramstudentLargeCard } from "../../Components/Acprogramstudent/AcprogramstudentLargeCard";

const AcprogramstudentPageRelayQuery = graphql`
    query AcprogramstudentPageRelayQuery($id: UUID!) { 
        result: acprogramstudentById(id: $id) { 
            id
            created
            lastchange
            semester
            ...AcprogramstudentMediumCardRelayFragment
        }
    }
`

export const AcprogramstudentPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AcprogramstudentPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const acprogramstudent = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AcprogramstudentLargeCard acprogramstudent={ acprogramstudent }>
                {/* other data */}
            </AcprogramstudentLargeCard>
        </Suspense>
    );    
}