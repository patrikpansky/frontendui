import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { FormpartLargeCard } from "../../Components/Formpart/FormpartLargeCard";

const FormpartPageRelayQuery = graphql`
    query FormpartPageRelayQuery($id: UUID!) { 
        result: formpartById(id: $id) { 
            id
            name
            lastchange
            created
            nameen
            order
            ...FormpartMediumCardRelayFragment
        }
    }
`

export const FormpartPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(FormpartPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const formpart = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <FormpartLargeCard formpart={ formpart }>
                {/* other data */}
            </FormpartLargeCard>
        </Suspense>
    );    
}