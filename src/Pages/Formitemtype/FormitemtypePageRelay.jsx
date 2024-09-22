import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { FormitemtypeLargeCard } from "../../Components/Formitemtype/FormitemtypeLargeCard";

const FormitemtypePageRelayQuery = graphql`
    query FormitemtypePageRelayQuery($id: UUID!) { 
        result: formitemtypeById(id: $id) { 
            id
            name
            lastchange
            created
            nameen
            ...FormitemtypeMediumCardRelayFragment
        }
    }
`

export const FormitemtypePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(FormitemtypePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const formitemtype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <FormitemtypeLargeCard formitemtype={ formitemtype }>
                {/* other data */}
            </FormitemtypeLargeCard>
        </Suspense>
    );    
}