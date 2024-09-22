import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AuthorLargeCard } from "../../Components/Author/AuthorLargeCard";

const AuthorIdPageRelayQuery = graphql`
    query AuthorPageRelayQuery($id: UUID!) { 
        result: authorById(id: $id) { 
            id 
            ...AuthorMediumCardRelayFragment
        }
    }
`

export const AuthorIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AuthorIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const author = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AuthorLargeCard author={ author }>
                {/* other data */}
            </AuthorLargeCard>
        </Suspense>
    );    
}