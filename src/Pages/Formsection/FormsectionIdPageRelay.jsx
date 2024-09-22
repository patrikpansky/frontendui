import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { FormsectionLargeCard } from "../../Components/Formsection/FormsectionLargeCard";

const FormsectionIdPageRelayQuery = graphql`
    query FormsectionPageRelayQuery($id: UUID!) { 
        result: formsectionById(id: $id) { 
            id 
            ...FormsectionMediumCardRelayFragment
        }
    }
`

export const FormsectionIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(FormsectionIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const formsection = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <FormsectionLargeCard formsection={ formsection }>
                {/* other data */}
            </FormsectionLargeCard>
        </Suspense>
    );    
}