import { useParams } from "react-router-dom"

import { {{Name targetType.name}}Lazy as Lazy } from "../../Components/{{Name targetType.name}}/{{Name targetType.name}}Lazy";
import { {{Name targetType.name}}LargeCard as LargeCard } from "../../Components/{{Name targetType.name}}/{{Name targetType.name}}LargeCard";
import { {{Name targetType.name}}CardCapsule as CardCapsule } from "../../Components/{{Name targetType.name}}/{{Name targetType.name}}CardCapsule";

import { 
    {{Name name}}PageQueryAction as QueryAction,
    {{Name name}}PageQueryActionValidator as QueryActionValidator
} from "./{{Name name}}PageQueryAction";

{{#each targetType.fields }}
{{#if isVector }}
import { {{Name targetType.name}}sTable as {{Name name}}Table{{@index}} } from '../../Components/{{Name targetType.name}}/{{Name targetType.name}}sTable';
{{/if}}
{{/each}}   

export const {{Name name}}PageContentBase = ({ {{name name}}, children}) => {
    return (
        <LargeCard {{name name}}={ {{name name}} }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const {{Name name}}PageContent = ({ {{name name}} }) => {

        return (
            <{{Name name}}PageContentBase {{name name}}={ {{name name}} }>
                {/* other data */}
{{#each targetType.fields }}
{{#if isVector }}
                { {{name ../name}}?.{{./name}}?
                    <CardCapsule {{name ../name}}={ {{name ../name}} } label={ "{{./name}}" }>
                        <{{Name name}}Table{{@index}} {{name targetType.name}}s={ {{name ../name}}?.{{./name}} || []}/>
                    </CardCapsule>:null
                }
{{/if}}
{{/each}}                   
            </{{Name name}}PageContentBase>        
        );    
}

const {{Name name}}LazyPageContent = Lazy({{Name name}}PageContent)(QueryAction, QueryActionValidator)

export const {{Name name}}Page = () => {
    const params = useParams()
    return (<{{Name name}}LazyPageContent {...params} />)

}
