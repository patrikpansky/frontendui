import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { GroupcategoryLargeCard } from "../../Components/Groupcategory/GroupcategoryLargeCard";

const GroupcategoryPageRelayQuery = graphql`
    query GroupcategoryPageRelayQuery($id: UUID!) { 
        result: groupcategoryById(id: $id) { 
            id
            created
            lastchange
            name
            nameen
            ...GroupcategoryMediumCardRelayFragment
        }
    }
`

export const GroupcategoryPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(GroupcategoryPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const groupcategory = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <GroupcategoryLargeCard groupcategory={ groupcategory }>
                {/* other data */}
            </GroupcategoryLargeCard>
        </Suspense>
    );    
}