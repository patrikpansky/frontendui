import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { GrouptypeLargeCard } from "../../Components/Grouptype/GrouptypeLargeCard";

const GrouptypeIdPageRelayQuery = graphql`
    query GrouptypePageRelayQuery($id: UUID!) { 
        result: grouptypeById(id: $id) { 
            id 
            ...GrouptypeMediumCardRelayFragment
        }
    }
`

export const GrouptypeIdPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(GrouptypeIdPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const grouptype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <GrouptypeLargeCard grouptype={ grouptype }>
                {/* other data */}
            </GrouptypeLargeCard>
        </Suspense>
    );    
}