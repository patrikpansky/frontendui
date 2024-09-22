import { useParams } from "react-router-dom"

import { RoletypeLazy as Lazy } from "../../Components/Roletype/RoletypeLazy";
import { RoletypeLargeCard as LargeCard } from "../../Components/Roletype/RoletypeLargeCard";
import { RoletypeCardCapsule as CardCapsule } from "../../Components/Roletype/RoletypeCardCapsule";
import { RoletypeEditCard as EditCard } from "../../Components/Roletype/RoletypeEditCard";

import { 
    RoletypePageQueryAction as QueryAction,
    RoletypePageQueryActionValidator as QueryActionValidator
} from "./RoletypePageQueryAction";


export const RoletypeEditPageContentBase = ({ roletype, children}) => {
    return (
        <LargeCard roletype={ roletype }>
            {/* other data */}
            <EditCard roletype={ roletype }/>
        </LargeCard>        
    );    
}

const RoletypeLazyEditPageContent = Lazy(RoletypeEditPageContentBase)(QueryAction, QueryActionValidator)

export const RoletypeEditPage = () => {
    const params = useParams()
    return (<RoletypeLazyEditPageContent {...params} />)

}
