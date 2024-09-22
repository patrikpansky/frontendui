import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { GrouptypeLargeCard } from "../../Components/Grouptype/GrouptypeLargeCard";

const GrouptypePageRelayQuery = graphql`
    query GrouptypePageRelayQuery($id: UUID!) { 
        result: grouptypeById(id: $id) { 
            id
            created
            lastchange
            name
            nameen
            ...GrouptypeMediumCardRelayFragment
        }
    }
`

export const GrouptypePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(GrouptypePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const grouptype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <GrouptypeLargeCard grouptype={ grouptype }>
                {/* other data */}
            </GrouptypeLargeCard>
        </Suspense>
    );    
}