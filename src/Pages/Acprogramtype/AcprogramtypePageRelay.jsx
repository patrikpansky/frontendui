import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AcprogramtypeLargeCard } from "../../Components/Acprogramtype/AcprogramtypeLargeCard";

const AcprogramtypePageRelayQuery = graphql`
    query AcprogramtypePageRelayQuery($id: UUID!) { 
        result: acprogramtypeById(id: $id) { 
            id
            name
            nameen
            created
            lastchange
            ...AcprogramtypeMediumCardRelayFragment
        }
    }
`

export const AcprogramtypePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AcprogramtypePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const acprogramtype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AcprogramtypeLargeCard acprogramtype={ acprogramtype }>
                {/* other data */}
            </AcprogramtypeLargeCard>
        </Suspense>
    );    
}