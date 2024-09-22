import { useParams } from "react-router-dom"

import { RoleLazy as Lazy } from "../../Components/Role/RoleLazy";
import { RoleLargeCard as LargeCard } from "../../Components/Role/RoleLargeCard";
import { RoleCardCapsule as CardCapsule } from "../../Components/Role/RoleCardCapsule";
import { RoleEditCard as EditCard } from "../../Components/Role/RoleEditCard";

import { 
    RolePageQueryAction as QueryAction,
    RolePageQueryActionValidator as QueryActionValidator
} from "./RolePageQueryAction";


export const RoleEditPageContentBase = ({ role, children}) => {
    return (
        <LargeCard role={ role }>
            {/* other data */}
            <EditCard role={ role }/>
        </LargeCard>        
    );    
}

const RoleLazyEditPageContent = Lazy(RoleEditPageContentBase)(QueryAction, QueryActionValidator)

export const RoleEditPage = () => {
    const params = useParams()
    return (<RoleLazyEditPageContent {...params} />)

}
