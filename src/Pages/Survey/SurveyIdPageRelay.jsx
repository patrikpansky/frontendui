import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { SurveyLargeCard } from "../../Components/Survey/SurveyLargeCard";

const SurveyIdPageRelayQuery = graphql`
    query SurveyPageRelayQuery($id: UUID!) { 
        result: surveyById(id: $id) { 
            id 
            ...SurveyMediumCardRelayFragment
        }
    }
`

export const SurveyIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(SurveyIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const survey = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <SurveyLargeCard survey={ survey }>
                {/* other data */}
            </SurveyLargeCard>
        </Suspense>
    );    
}