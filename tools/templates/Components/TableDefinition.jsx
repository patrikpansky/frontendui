export const {{Name name}}TableDefinition = {
{{#each returnType.fields }}
    {{#if isScalar}}
    "{{name name}}": {
        "key": "{{name name}}",
        "label": "{{name name}}"
    },
    {{/if}}
{{/each}} 
}