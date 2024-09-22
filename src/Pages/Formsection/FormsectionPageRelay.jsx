import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { FormsectionLargeCard } from "../../Components/Formsection/FormsectionLargeCard";

const FormsectionPageRelayQuery = graphql`
    query FormsectionPageRelayQuery($id: UUID!) { 
        result: formsectionById(id: $id) { 
            id
            name
            lastchange
            created
            nameen
            order
            ...FormsectionMediumCardRelayFragment
        }
    }
`

export const FormsectionPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(FormsectionPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const formsection = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <FormsectionLargeCard formsection={ formsection }>
                {/* other data */}
            </FormsectionLargeCard>
        </Suspense>
    );    
}