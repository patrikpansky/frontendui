import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { PublicationLargeCard } from "../../Components/Publication/PublicationLargeCard";

const PublicationPageRelayQuery = graphql`
    query PublicationPageRelayQuery($id: UUID!) { 
        result: publicationById(id: $id) { 
            id
            name
            created
            lastchange
            publisheddate
            place
            reference
            valid
            ...PublicationMediumCardRelayFragment
        }
    }
`

export const PublicationPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(PublicationPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const publication = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <PublicationLargeCard publication={ publication }>
                {/* other data */}
            </PublicationLargeCard>
        </Suspense>
    );    
}