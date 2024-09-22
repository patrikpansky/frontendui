import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AcprogramtypeLargeCard } from "../../Components/Acprogramtype/AcprogramtypeLargeCard";

const AcprogramtypeIdPageRelayQuery = graphql`
    query AcprogramtypePageRelayQuery($id: UUID!) { 
        result: acprogramtypeById(id: $id) { 
            id 
            ...AcprogramtypeMediumCardRelayFragment
        }
    }
`

export const AcprogramtypeIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AcprogramtypeIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const acprogramtype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AcprogramtypeLargeCard acprogramtype={ acprogramtype }>
                {/* other data */}
            </AcprogramtypeLargeCard>
        </Suspense>
    );    
}