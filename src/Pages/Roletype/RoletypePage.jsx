import { useParams } from "react-router-dom"

import { RoletypeLazy as Lazy } from "../../Components/Roletype/RoletypeLazy";
import { RoletypeLargeCard as LargeCard } from "../../Components/Roletype/RoletypeLargeCard";
import { RoletypeCardCapsule as CardCapsule } from "../../Components/Roletype/RoletypeCardCapsule";

import { 
    RoletypePageQueryAction as QueryAction,
    RoletypePageQueryActionValidator as QueryActionValidator
} from "./RoletypePageQueryAction";


export const RoletypePageContentBase = ({ roletype, children}) => {
    return (
        <LargeCard roletype={ roletype }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const RoletypePageContent = ({ roletype }) => {

        return (
            <RoletypePageContentBase roletype={ roletype }>
                {/* other data */}
            </RoletypePageContentBase>        
        );    
}

const RoletypeLazyPageContent = Lazy(RoletypePageContent)(QueryAction, QueryActionValidator)

export const RoletypePage = () => {
    const params = useParams()
    return (<RoletypeLazyPageContent {...params} />)

}
