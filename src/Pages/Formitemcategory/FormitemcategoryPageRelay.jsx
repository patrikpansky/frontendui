import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { FormitemcategoryLargeCard } from "../../Components/Formitemcategory/FormitemcategoryLargeCard";

const FormitemcategoryPageRelayQuery = graphql`
    query FormitemcategoryPageRelayQuery($id: UUID!) { 
        result: formitemcategoryById(id: $id) { 
            id
            name
            lastchange
            created
            nameen
            ...FormitemcategoryMediumCardRelayFragment
        }
    }
`

export const FormitemcategoryPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(FormitemcategoryPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const formitemcategory = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <FormitemcategoryLargeCard formitemcategory={ formitemcategory }>
                {/* other data */}
            </FormitemcategoryLargeCard>
        </Suspense>
    );    
}