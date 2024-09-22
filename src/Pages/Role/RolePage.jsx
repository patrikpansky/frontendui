import { useParams } from "react-router-dom"

import { RoleLazy as Lazy } from "../../Components/Role/RoleLazy";
import { RoleLargeCard as LargeCard } from "../../Components/Role/RoleLargeCard";
import { RoleCardCapsule as CardCapsule } from "../../Components/Role/RoleCardCapsule";

import { 
    RolePageQueryAction as QueryAction,
    RolePageQueryActionValidator as QueryActionValidator
} from "./RolePageQueryAction";


export const RolePageContentBase = ({ role, children}) => {
    return (
        <LargeCard role={ role }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const RolePageContent = ({ role }) => {

        return (
            <RolePageContentBase role={ role }>
                {/* other data */}
            </RolePageContentBase>        
        );    
}

const RoleLazyPageContent = Lazy(RolePageContent)(QueryAction, QueryActionValidator)

export const RolePage = () => {
    const params = useParams()
    return (<RoleLazyPageContent {...params} />)

}
