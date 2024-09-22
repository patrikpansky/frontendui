import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { RoletypeLargeCard } from "../../Components/Roletype/RoletypeLargeCard";

const RoletypePageRelayQuery = graphql`
    query RoletypePageRelayQuery($id: UUID!) { 
        result: roletypeById(id: $id) { 
            id
            created
            lastchange
            name
            nameen
            ...RoletypeMediumCardRelayFragment
        }
    }
`

export const RoletypePageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(RoletypePageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const roletype = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <RoletypeLargeCard roletype={ roletype }>
                {/* other data */}
            </RoletypeLargeCard>
        </Suspense>
    );    
}