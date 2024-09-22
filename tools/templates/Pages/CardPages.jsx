import { useParams } from "react-router-dom"

import { {{Name targetType.name}}LargeCard as LargeCard } from "../../Components/{{Name targetType.name}}/{{Name targetType.name}}LargeCard";
import { {{Name targetType.name}}CardCapsule as CardCapsule } from "../../Components/{{Name targetType.name}}/{{Name targetType.name}}CardCapsule";
import { 
    {{Name targetType.name}}Lazy as Lazy,
} from "../../Components/{{Name targetType.name}}/{{Name targetType.name}}Lazy";

import { 
    {{Name name}}PageQueryAction as QueryAction,
    {{Name name}}PageQueryActionValidator as QueryActionValidator
} from "./{{Name name}}PageQueryAction";

{{#each targetType.fields }}
{{#if isVector }}
// import { {{Name targetType.name}}sCards as {{Name name}}sCards{{@index}} } from '../../Components/{{Name targetType.name}}/{{Name targetType.name}}sCards';
import { {{Name ../targetType.name}}{{Name name}}CardOfCards as {{Name name}}Cards{{@index}} } from '../../Components/{{Name ../targetType.name}}/{{Name name}}CardOfCards';
{{/if}}
{{/each}}   

{{#each targetType.fields }}
{{#if isVector }}
export const {{Name ../name}}{{Name name}}PageContent = ({ {{name ../name}} }) => {
    return (
        <LargeCard {{name ../name}}={ {{name ../name}} }>
            {/* other data */}
            { {{name ../name}}?.{{./name}}?
                <{{Name name}}Cards{{@index}} {{name ../name}}={ {{name ../name}} }/>
                :null 
            }
        </LargeCard>        
    );    
}
{{/if}}
{{/each}}                   

{{#each targetType.fields }}
{{#if isVector }}
const {{Name ../name}}{{Name name}}LazyPageContent = Lazy({{Name ../name}}{{Name name}}PageContent)(QueryAction, QueryActionValidator)
export const {{Name ../name}}{{Name name}}CardPage = () => {
    const params = useParams()
    return (<{{Name ../name}}{{Name name}}LazyPageContent {...params} />)
}

{{/if}}
{{/each}}                   
