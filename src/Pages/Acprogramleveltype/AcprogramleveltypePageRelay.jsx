import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AcprogramleveltypeLargeCard } from "../../Components/Acprogramleveltype/AcprogramleveltypeLargeCard";

const AcprogramleveltypePageRelayQuery = graphql`
    query AcprogramleveltypePageRelayQuery($id: UUID!) { 
        result: acprogramleveltypeById(id: $id) { 
            id
            name
            nameen
            created
            lastchange
            ...AcprogramleveltypeMediumCardRelayFragment
        }
    }
`

export const AcprogramleveltypePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AcprogramleveltypePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const acprogramleveltype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AcprogramleveltypeLargeCard acprogramleveltype={ acprogramleveltype }>
                {/* other data */}
            </AcprogramleveltypeLargeCard>
        </Suspense>
    );    
}