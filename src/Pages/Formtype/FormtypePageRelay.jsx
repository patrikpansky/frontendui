import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { FormtypeLargeCard } from "../../Components/Formtype/FormtypeLargeCard";

const FormtypePageRelayQuery = graphql`
    query FormtypePageRelayQuery($id: UUID!) { 
        result: formtypeById(id: $id) { 
            id
            name
            lastchange
            created
            nameen
            ...FormtypeMediumCardRelayFragment
        }
    }
`

export const FormtypePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(FormtypePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const formtype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <FormtypeLargeCard formtype={ formtype }>
                {/* other data */}
            </FormtypeLargeCard>
        </Suspense>
    );    
}