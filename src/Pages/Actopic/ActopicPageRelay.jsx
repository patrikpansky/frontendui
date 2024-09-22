import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { ActopicLargeCard } from "../../Components/Actopic/ActopicLargeCard";

const ActopicPageRelayQuery = graphql`
    query ActopicPageRelayQuery($id: UUID!) { 
        result: actopicById(id: $id) { 
            id
            name
            nameen
            created
            lastchange
            order
            ...ActopicMediumCardRelayFragment
        }
    }
`

export const ActopicPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(ActopicPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const actopic = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <ActopicLargeCard actopic={ actopic }>
                {/* other data */}
            </ActopicLargeCard>
        </Suspense>
    );    
}