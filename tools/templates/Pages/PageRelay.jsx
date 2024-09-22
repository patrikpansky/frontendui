import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from "react-router-dom"

import { {{Name name}}LargeCard } from "../../Components/{{Name name}}/{{Name name}}LargeCard";

const {{Name name}}PageRelayQuery = graphql`
    query {{Name name}}PageRelayQuery($id: UUID!) { 
        result: {{name name}}ById(id: $id) { 
    {{#each returnType.fields }}
        {{#if isScalar}}
            {{name name}}
        {{/if}}
    {{/each}}
            ...{{Name name}}MediumCardRelayFragment
        }
    }
`

export const {{Name name}}PageRelay = () => {
    const { id } = useParams() || "837f62bd-ee81-4493-954d-51e8ef7ef025";
    const data = useLazyLoadQuery({{Name name}}PageRelayQuery, {id}, {fetchPolicy: 'store-and-network'});
    const {{name name}} = data.result
    return (
        <Suspense fallback={'Loading...'}>
            <{{Name name}}LargeCard {{name name}}={ {{name name}} }>
                {/* other data */}
            </{{Name name}}LargeCard>
        </Suspense>
    );    
}