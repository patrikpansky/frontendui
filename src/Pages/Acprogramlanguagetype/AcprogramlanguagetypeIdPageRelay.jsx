import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AcprogramlanguagetypeLargeCard } from "../../Components/Acprogramlanguagetype/AcprogramlanguagetypeLargeCard";

const AcprogramlanguagetypeIdPageRelayQuery = graphql`
    query AcprogramlanguagetypePageRelayQuery($id: UUID!) { 
        result: acprogramlanguagetypeById(id: $id) { 
            id 
            ...AcprogramlanguagetypeMediumCardRelayFragment
        }
    }
`

export const AcprogramlanguagetypeIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AcprogramlanguagetypeIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const acprogramlanguagetype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AcprogramlanguagetypeLargeCard acprogramlanguagetype={ acprogramlanguagetype }>
                {/* other data */}
            </AcprogramlanguagetypeLargeCard>
        </Suspense>
    );    
}