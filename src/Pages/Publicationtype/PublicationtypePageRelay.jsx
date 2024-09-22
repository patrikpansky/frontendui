import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { PublicationtypeLargeCard } from "../../Components/Publicationtype/PublicationtypeLargeCard";

const PublicationtypePageRelayQuery = graphql`
    query PublicationtypePageRelayQuery($id: UUID!) { 
        result: publicationtypeById(id: $id) { 
            id
            name
            created
            lastchange
            ...PublicationtypeMediumCardRelayFragment
        }
    }
`

export const PublicationtypePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(PublicationtypePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const publicationtype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <PublicationtypeLargeCard publicationtype={ publicationtype }>
                {/* other data */}
            </PublicationtypeLargeCard>
        </Suspense>
    );    
}