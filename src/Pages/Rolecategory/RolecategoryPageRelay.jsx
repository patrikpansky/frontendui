import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { RolecategoryLargeCard } from "../../Components/Rolecategory/RolecategoryLargeCard";

const RolecategoryPageRelayQuery = graphql`
    query RolecategoryPageRelayQuery($id: UUID!) { 
        result: rolecategoryById(id: $id) { 
            id
            created
            lastchange
            name
            nameen
            ...RolecategoryMediumCardRelayFragment
        }
    }
`

export const RolecategoryPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(RolecategoryPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const rolecategory = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <RolecategoryLargeCard rolecategory={ rolecategory }>
                {/* other data */}
            </RolecategoryLargeCard>
        </Suspense>
    );    
}