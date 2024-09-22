import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { SurveyLargeCard } from "../../Components/Survey/SurveyLargeCard";

const SurveyPageRelayQuery = graphql`
    query SurveyPageRelayQuery($id: UUID!) { 
        result: surveyById(id: $id) { 
            id
            name
            lastchange
            created
            ...SurveyMediumCardRelayFragment
        }
    }
`

export const SurveyPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(SurveyPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const survey = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <SurveyLargeCard survey={ survey }>
                {/* other data */}
            </SurveyLargeCard>
        </Suspense>
    );    
}