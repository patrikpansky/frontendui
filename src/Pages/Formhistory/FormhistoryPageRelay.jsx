import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { FormhistoryLargeCard } from "../../Components/Formhistory/FormhistoryLargeCard";

const FormhistoryPageRelayQuery = graphql`
    query FormhistoryPageRelayQuery($id: UUID!) { 
        result: formhistoryById(id: $id) { 
            id
            name
            lastchange
            created
            nameen
            ...FormhistoryMediumCardRelayFragment
        }
    }
`

export const FormhistoryPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(FormhistoryPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const formhistory = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <FormhistoryLargeCard formhistory={ formhistory }>
                {/* other data */}
            </FormhistoryLargeCard>
        </Suspense>
    );    
}