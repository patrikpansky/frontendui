import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { SurveytypeLargeCard } from "../../Components/Surveytype/SurveytypeLargeCard";

const SurveytypeIdPageRelayQuery = graphql`
    query SurveytypePageRelayQuery($id: UUID!) { 
        result: surveytypeById(id: $id) { 
            id 
            ...SurveytypeMediumCardRelayFragment
        }
    }
`

export const SurveytypeIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(SurveytypeIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const surveytype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <SurveytypeLargeCard surveytype={ surveytype }>
                {/* other data */}
            </SurveytypeLargeCard>
        </Suspense>
    );    
}