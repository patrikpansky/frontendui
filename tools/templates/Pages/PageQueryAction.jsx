import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let {{Name name}}Query = `
    query {{Name name}}PageQuery($id: UUID!) { 
        result: {{./name}}(id: $id) { 
            __typename
    {{#each targetType.fields }}
        {{#if isScalar}}
            {{./name}}
        {{/if}}
    {{/each}}
         ...{{Name name}}ScalarsFragment
         ...{{Name name}}VectorsFragment    
        }
    }
`
const {{Name name}}ScalarsFragment = `
    fragment {{Name name}}ScalarsFragment on {{targetType.originalName}} { 
        id
{{#each targetType.fields }}
    {{#if isObject}} 
        {{./name}} { 
            __typename
        {{#each targetType.fields }}
            {{#if isScalar}}
            {{./name}}
            {{/if}}
        {{/each}}
        }
    {{/if}}
{{/each}}    
    }
`

const {{Name name}}VectorsFragment = `
    fragment {{Name name}}VectorsFragment on {{targetType.originalName}} { 
        id
{{#each targetType.fields }}
    {{#if isVector}} 
        {{./name}} { 
            __typename
        {{#each targetType.fields }}
            {{#if isScalar}}
            {{./name}}
            {{/if}}
        {{/each}}
        }
    {{/if}}
{{/each}}    
    }
`

{{Name name}}Query = {{Name name}}Query + {{Name name}}ScalarsFragment + {{Name name}}VectorsFragment

export const {{Name name}}PageQueryAction = CreateAsyncActionFromQuery({{Name name}}Query)
export const {{Name name}}PageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst '{{name name}}'", success: "Načtení '{{name name}}' se povedlo"})