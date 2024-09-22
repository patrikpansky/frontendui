import { {{Name name}}CardCapsule } from './{{Name name}}CardCapsule';
import { {{Name name}}CardBody } from './{{Name name}}CardBody';

export const {{Name name}}MediumCardFragment = `
fragment {{Name name}}MediumCardFragment on {{Name name}}GQLModel {
    {{#each returnType.fields }}
    {{#if isScalar}}
        {{name name}}
    {{/if}}
    {{/each}}
    }`

export const {{Name name}}MediumCardConstant = ({ {{name name}}, children, label="" }) => {
    return (
        <{{Name name}}CardCapsule {{name name}}={ {{name name}} } label={label} >
            <{{Name name}}CardBody {{name name}}={ {{name name}} }>
                {children}
            </{{Name name}}CardBody>
        </{{Name name}}CardCapsule>        
    )
}
export let {{Name name}}MediumCard = {{Name name}}MediumCardConstant
export const setMediumCard = (newMediumCard) => {{Name name}}MediumCard = newMediumCard