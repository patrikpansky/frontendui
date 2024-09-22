import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { QuestionLargeCard } from "../../Components/Question/QuestionLargeCard";

const QuestionIdPageRelayQuery = graphql`
    query QuestionPageRelayQuery($id: UUID!) { 
        result: questionById(id: $id) { 
            id 
            ...QuestionMediumCardRelayFragment
        }
    }
`

export const QuestionIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(QuestionIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const question = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <QuestionLargeCard question={ question }>
                {/* other data */}
            </QuestionLargeCard>
        </Suspense>
    );    
}