import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AcprogramformtypeLargeCard } from "../../Components/Acprogramformtype/AcprogramformtypeLargeCard";

const AcprogramformtypePageRelayQuery = graphql`
    query AcprogramformtypePageRelayQuery($id: UUID!) { 
        result: acprogramformtypeById(id: $id) { 
            id
            name
            nameen
            created
            lastchange
            ...AcprogramformtypeMediumCardRelayFragment
        }
    }
`

export const AcprogramformtypePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AcprogramformtypePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const acprogramformtype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AcprogramformtypeLargeCard acprogramformtype={ acprogramformtype }>
                {/* other data */}
            </AcprogramformtypeLargeCard>
        </Suspense>
    );    
}