import { useParams } from "react-router-dom"

import { {{Name targetType.name}}Lazy as Lazy } from "../../Components/{{Name targetType.name}}/{{Name targetType.name}}Lazy";
import { {{Name targetType.name}}LargeCard as LargeCard } from "../../Components/{{Name targetType.name}}/{{Name targetType.name}}LargeCard";
import { {{Name targetType.name}}CardCapsule as CardCapsule } from "../../Components/{{Name targetType.name}}/{{Name targetType.name}}CardCapsule";
import { {{Name targetType.name}}EditCard as EditCard } from "../../Components/{{Name targetType.name}}/{{Name targetType.name}}EditCard";

import { 
    {{Name name}}PageQueryAction as QueryAction,
    {{Name name}}PageQueryActionValidator as QueryActionValidator
} from "./{{Name name}}PageQueryAction";

{{#each targetType.fields }}
{{#if isVector }}
import { {{Name targetType.name}}sTable as {{Name name}}Table{{@index}} } from '../../Components/{{Name targetType.name}}/{{Name targetType.name}}sTable';
{{/if}}
{{/each}}   

export const {{Name name}}EditPageContentBase = ({ {{name name}}, children}) => {
    return (
        <LargeCard {{name name}}={ {{name name}} }>
            {/* other data */}
            <EditCard {{name name}}={ {{name name}} }/>
        </LargeCard>        
    );    
}

const {{Name name}}LazyEditPageContent = Lazy({{Name name}}EditPageContentBase)(QueryAction, QueryActionValidator)

export const {{Name name}}EditPage = () => {
    const params = useParams()
    return (<{{Name name}}LazyEditPageContent {...params} />)

}
