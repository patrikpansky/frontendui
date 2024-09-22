import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { FormitemLargeCard } from "../../Components/Formitem/FormitemLargeCard";

const FormitemPageRelayQuery = graphql`
    query FormitemPageRelayQuery($id: UUID!) { 
        result: formitemById(id: $id) { 
            id
            name
            lastchange
            created
            nameen
            order
            value
            ...FormitemMediumCardRelayFragment
        }
    }
`

export const FormitemPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(FormitemPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const formitem = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <FormitemLargeCard formitem={ formitem }>
                {/* other data */}
            </FormitemLargeCard>
        </Suspense>
    );    
}