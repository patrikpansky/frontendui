import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AcprogramlanguagetypeLargeCard } from "../../Components/Acprogramlanguagetype/AcprogramlanguagetypeLargeCard";

const AcprogramlanguagetypePageRelayQuery = graphql`
    query AcprogramlanguagetypePageRelayQuery($id: UUID!) { 
        result: acprogramlanguagetypeById(id: $id) { 
            id
            name
            nameen
            created
            lastchange
            ...AcprogramlanguagetypeMediumCardRelayFragment
        }
    }
`

export const AcprogramlanguagetypePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AcprogramlanguagetypePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const acprogramlanguagetype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AcprogramlanguagetypeLargeCard acprogramlanguagetype={ acprogramlanguagetype }>
                {/* other data */}
            </AcprogramlanguagetypeLargeCard>
        </Suspense>
    );    
}