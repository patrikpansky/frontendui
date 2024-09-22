import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AcprogramLargeCard } from "../../Components/Acprogram/AcprogramLargeCard";

const AcprogramIdPageRelayQuery = graphql`
    query AcprogramPageRelayQuery($id: UUID!) { 
        result: acprogramById(id: $id) { 
            id 
            ...AcprogramMediumCardRelayFragment
        }
    }
`

export const AcprogramIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AcprogramIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const acprogram = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AcprogramLargeCard acprogram={ acprogram }>
                {/* other data */}
            </AcprogramLargeCard>
        </Suspense>
    );    
}