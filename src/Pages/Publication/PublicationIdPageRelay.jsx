import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { PublicationLargeCard } from "../../Components/Publication/PublicationLargeCard";

const PublicationIdPageRelayQuery = graphql`
    query PublicationPageRelayQuery($id: UUID!) { 
        result: publicationById(id: $id) { 
            id 
            ...PublicationMediumCardRelayFragment
        }
    }
`

export const PublicationIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(PublicationIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const publication = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <PublicationLargeCard publication={ publication }>
                {/* other data */}
            </PublicationLargeCard>
        </Suspense>
    );    
}