import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { RoletypelistLargeCard } from "../../Components/Roletypelist/RoletypelistLargeCard";

const RoletypelistPageRelayQuery = graphql`
    query RoletypelistPageRelayQuery($id: UUID!) { 
        result: roletypelistById(id: $id) { 
            id
            created
            lastchange
            ...RoletypelistMediumCardRelayFragment
        }
    }
`

export const RoletypelistPageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery(RoletypelistPageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const roletypelist = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <RoletypelistLargeCard roletypelist={ roletypelist }>
                {/* other data */}
            </RoletypelistLargeCard>
        </Suspense>
    );    
}