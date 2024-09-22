import { useParams } from "react-router-dom"

import { RbacobjectLazy as Lazy } from "../../Components/Rbacobject/RbacobjectLazy";
import { RbacobjectLargeCard as LargeCard } from "../../Components/Rbacobject/RbacobjectLargeCard";
import { RbacobjectCardCapsule as CardCapsule } from "../../Components/Rbacobject/RbacobjectCardCapsule";

import { 
    RbacPageQueryAction as QueryAction,
    RbacPageQueryActionValidator as QueryActionValidator
} from "./RbacPageQueryAction";

import { RolesTable as RolesTable1 } from '../../Components/Role/RolesTable';

export const RbacPageContentBase = ({ rbac, children}) => {
    return (
        <LargeCard rbac={ rbac }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const RbacPageContent = ({ rbac }) => {

        return (
            <RbacPageContentBase rbac={ rbac }>
                {/* other data */}
                { rbac?.roles?
                    <CardCapsule rbac={ rbac } label={ "roles" }>
                        <RolesTable1 roles={ rbac?.roles || []}/>
                    </CardCapsule>:null
                }
            </RbacPageContentBase>        
        );    
}

const RbacLazyPageContent = Lazy(RbacPageContent)(QueryAction, QueryActionValidator)

export const RbacPage = () => {
    const params = useParams()
    return (<RbacLazyPageContent {...params} />)

}
