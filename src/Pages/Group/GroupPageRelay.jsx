import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { GroupLargeCard } from "../../Components/Group/GroupLargeCard";

const GroupPageRelayQuery = graphql`
    query GroupPageRelayQuery($id: UUID!) { 
        result: groupById(id: $id) { 
            id
            created
            lastchange
            name
            nameen
            email
            abbreviation
            valid
            typeid
            ...GroupMediumCardRelayFragment
        }
    }
`

export const GroupPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(GroupPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const group = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <GroupLargeCard group={ group }>
                {/* other data */}
            </GroupLargeCard>
        </Suspense>
    );    
}