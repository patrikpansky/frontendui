import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { AnswerLargeCard } from "../../Components/Answer/AnswerLargeCard";

const AnswerPageRelayQuery = graphql`
    query AnswerPageRelayQuery($id: UUID!) { 
        result: answerById(id: $id) { 
            id
            lastchange
            created
            value
            aswered
            expired
            ...AnswerMediumCardRelayFragment
        }
    }
`

export const AnswerPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(AnswerPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const answer = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <AnswerLargeCard answer={ answer }>
                {/* other data */}
            </AnswerLargeCard>
        </Suspense>
    );    
}