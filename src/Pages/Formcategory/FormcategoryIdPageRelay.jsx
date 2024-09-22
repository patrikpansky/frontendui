import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { FormcategoryLargeCard } from "../../Components/Formcategory/FormcategoryLargeCard";

const FormcategoryIdPageRelayQuery = graphql`
    query FormcategoryPageRelayQuery($id: UUID!) { 
        result: formcategoryById(id: $id) { 
            id 
            ...FormcategoryMediumCardRelayFragment
        }
    }
`

export const FormcategoryIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(FormcategoryIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const formcategory = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <FormcategoryLargeCard formcategory={ formcategory }>
                {/* other data */}
            </FormcategoryLargeCard>
        </Suspense>
    );    
}