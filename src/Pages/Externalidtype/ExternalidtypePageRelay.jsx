import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { ExternalidtypeLargeCard } from "../../Components/Externalidtype/ExternalidtypeLargeCard";

const ExternalidtypePageRelayQuery = graphql`
    query ExternalidtypePageRelayQuery($id: UUID!) { 
        result: externalidtypeById(id: $id) { 
            id
            name
            nameen
            lastchange
            created
            ...ExternalidtypeMediumCardRelayFragment
        }
    }
`

export const ExternalidtypePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(ExternalidtypePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const externalidtype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <ExternalidtypeLargeCard externalidtype={ externalidtype }>
                {/* other data */}
            </ExternalidtypeLargeCard>
        </Suspense>
    );    
}