import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { FormLargeCard } from "../../Components/Form/FormLargeCard";

const FormIdPageRelayQuery = graphql`
    query FormPageRelayQuery($id: UUID!) { 
        result: formById(id: $id) { 
            id 
            ...FormMediumCardRelayFragment
        }
    }
`

export const FormIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(FormIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const form = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <FormLargeCard form={ form }>
                {/* other data */}
            </FormLargeCard>
        </Suspense>
    );    
}