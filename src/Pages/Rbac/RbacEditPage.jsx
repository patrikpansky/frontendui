import { useParams } from "react-router-dom"

import { RbacobjectLazy as Lazy } from "../../Components/Rbacobject/RbacobjectLazy";
import { RbacobjectLargeCard as LargeCard } from "../../Components/Rbacobject/RbacobjectLargeCard";
import { RbacobjectCardCapsule as CardCapsule } from "../../Components/Rbacobject/RbacobjectCardCapsule";
import { RbacobjectEditCard as EditCard } from "../../Components/Rbacobject/RbacobjectEditCard";

import { 
    RbacPageQueryAction as QueryAction,
    RbacPageQueryActionValidator as QueryActionValidator
} from "./RbacPageQueryAction";

import { RolesTable as RolesTable1 } from '../../Components/Role/RolesTable';

export const RbacEditPageContentBase = ({ rbac, children}) => {
    return (
        <LargeCard rbac={ rbac }>
            {/* other data */}
            <EditCard rbac={ rbac }/>
        </LargeCard>        
    );    
}

const RbacLazyEditPageContent = Lazy(RbacEditPageContentBase)(QueryAction, QueryActionValidator)

export const RbacEditPage = () => {
    const params = useParams()
    return (<RbacLazyEditPageContent {...params} />)

}
