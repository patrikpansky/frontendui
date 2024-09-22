import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { QuestiontypeLargeCard } from "../../Components/Questiontype/QuestiontypeLargeCard";

const QuestiontypePageRelayQuery = graphql`
    query QuestiontypePageRelayQuery($id: UUID!) { 
        result: questiontypeById(id: $id) { 
            id
            name
            lastchange
            created
            ...QuestiontypeMediumCardRelayFragment
        }
    }
`

export const QuestiontypePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(QuestiontypePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const questiontype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <QuestiontypeLargeCard questiontype={ questiontype }>
                {/* other data */}
            </QuestiontypeLargeCard>
        </Suspense>
    );    
}