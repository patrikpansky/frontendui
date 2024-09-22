import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AclessontypeLargeCard } from "../../Components/Aclessontype/AclessontypeLargeCard";

const AclessontypeIdPageRelayQuery = graphql`
    query AclessontypePageRelayQuery($id: UUID!) { 
        result: aclessontypeById(id: $id) { 
            id 
            ...AclessontypeMediumCardRelayFragment
        }
    }
`

export const AclessontypeIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AclessontypeIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const aclessontype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AclessontypeLargeCard aclessontype={ aclessontype }>
                {/* other data */}
            </AclessontypeLargeCard>
        </Suspense>
    );    
}