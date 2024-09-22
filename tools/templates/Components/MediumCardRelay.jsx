// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { {{Name name}}MediumCard } from './{{Name name}}MediumCard';

const {{Name name}}MediumCardRelayFragment = graphql`fragment {{Name name}}MediumCardRelayFragment on {{Name name}}GQLModel {
{{#each returnType.fields }}
{{#if isScalar}}
    {{name name}}
{{/if}}
{{/each}}
}`

export const {{Name name}}MediumCardRelay = ({ {{name name}}, children }) => {
    const {{name name}}_ = useFragment({{Name name}}MediumCardRelayFragment, {{name name}});
    return (
        <{{Name name}}MediumCard {{name name}} = { {{name name}}_ }>
            {children}
        </{{Name name}}MediumCard>
    )
}

