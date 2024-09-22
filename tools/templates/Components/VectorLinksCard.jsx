import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { {{Name name}}CardCapsule } from './{{Name name}}CardCapsule';
import { {{Name name}}CardBody } from './{{Name name}}CardBody';

export const {{Name name}}VectorLinksCard = ({ {{name name}}, children, label="" }) => {
    return (
        <{{Name name}}CardCapsule {{name name}}={ {{name name}} } label={label} >
{{#each targetType.fields}}                    
{{#if isVector}}
            <ProxyLink to={"/auto/{{name ../name}}/{{name name}}/" + {{name ../name}}.id } >{{name name}}</ProxyLink><br />
{{/if}}
{{/each}}
        </{{Name name}}CardCapsule>        
    )
}

