import { {{Name name}}MediumCard } from './{{Name name}}MediumCard';
import { {{Name name}}LargeCardLayout } from './{{Name name}}LargeCardLayout';
import { {{Name name}}VectorLinksCard } from './{{Name name}}VectorLinksCard';

/**/
//  {{Name name}}: {{returnType.name}}
/**/

{{#each returnType.fields }}
{{#if isObject }}
//  {{Name name}}: {{Name targetType.name}}
// import { {{Name targetType.name}} } from '../{{Name targetType.name}}/{{Name targetType.name}}MediumCard';
// {{name name}} {{name ../name}}

{{/if}}
{{/each}}   

{{#each returnType.fields }}
{{#if isObject }}
import { {{Name targetType.name}}MediumCard as MediumCard{{@index}} } from '../{{Name targetType.name}}/{{Name targetType.name}}MediumCard';
// <MediumCard{{@index}} {{name targetType.name}}={ {{name ../name}}?.{{name name}} }/>
{{/if}}
{{/each}}   

/**
 * {{description}}
 */
export const {{Name name}}LargeCard = ({ {{name name}}, children}) => {
    // console.log("{{Name name}}LargeCard", {{name name}})
    return (
        <{{Name name}}LargeCardLayout {{name name}}={ {{name name}} } grandchildren={children}>
            <{{Name name}}MediumCard {{name name}}={ {{name name}} }/>
            <{{Name name}}VectorLinksCard  {{name name}}={ {{name name}} } />
    {{#each returnType.fields }}
        {{#if isObject }}
            { 
                {{name ../name}}?.{{name name}}?<MediumCard{{@index}} {{name targetType.name}}={ {{name ../name}}?.{{name name}} } label={"{{Name name}}"} />:null
            }
        {{/if}}
    {{/each}}
        </{{Name name}}LargeCardLayout>
    )
}

