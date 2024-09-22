import { useParams } from "react-router-dom"

import { RoletypelistLazy as Lazy } from "../../Components/Roletypelist/RoletypelistLazy";
import { RoletypelistLargeCard as LargeCard } from "../../Components/Roletypelist/RoletypelistLargeCard";
import { RoletypelistCardCapsule as CardCapsule } from "../../Components/Roletypelist/RoletypelistCardCapsule";
import { RoletypelistEditCard as EditCard } from "../../Components/Roletypelist/RoletypelistEditCard";

import { 
    RoletypelistPageQueryAction as QueryAction,
    RoletypelistPageQueryActionValidator as QueryActionValidator
} from "./RoletypelistPageQueryAction";

import { RoletypesTable as RoletypesTable5 } from '../../Components/Roletype/RoletypesTable';

export const RoletypelistEditPageContentBase = ({ roletypelist, children}) => {
    return (
        <LargeCard roletypelist={ roletypelist }>
            {/* other data */}
            <EditCard roletypelist={ roletypelist }/>
        </LargeCard>        
    );    
}

const RoletypelistLazyEditPageContent = Lazy(RoletypelistEditPageContentBase)(QueryAction, QueryActionValidator)

export const RoletypelistEditPage = () => {
    const params = useParams()
    return (<RoletypelistLazyEditPageContent {...params} />)

}
