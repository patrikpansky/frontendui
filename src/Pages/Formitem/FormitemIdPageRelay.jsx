import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { FormitemLargeCard } from "../../Components/Formitem/FormitemLargeCard";

const FormitemIdPageRelayQuery = graphql`
    query FormitemPageRelayQuery($id: UUID!) { 
        result: formitemById(id: $id) { 
            id 
            ...FormitemMediumCardRelayFragment
        }
    }
`

export const FormitemIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(FormitemIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const formitem = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <FormitemLargeCard formitem={ formitem }>
                {/* other data */}
            </FormitemLargeCard>
        </Suspense>
    );    
}