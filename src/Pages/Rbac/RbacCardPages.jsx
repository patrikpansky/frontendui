import { useParams } from "react-router-dom"

import { RbacobjectLargeCard as LargeCard } from "../../Components/Rbacobject/RbacobjectLargeCard";
import { RbacobjectCardCapsule as CardCapsule } from "../../Components/Rbacobject/RbacobjectCardCapsule";
import { 
    RbacobjectLazy as Lazy,
} from "../../Components/Rbacobject/RbacobjectLazy";

import { 
    RbacPageQueryAction as QueryAction,
    RbacPageQueryActionValidator as QueryActionValidator
} from "./RbacPageQueryAction";

// import { RolesCards as RolessCards1 } from '../../Components/Role/RolesCards';
import { RbacobjectRolesCardOfCards as RolesCards1 } from '../../Components/Rbacobject/RolesCardOfCards';

export const RbacRolesPageContent = ({ rbac }) => {
    return (
        <LargeCard rbac={ rbac }>
            {/* other data */}
            { rbac?.roles?
                <RolesCards1 rbac={ rbac }/>
                :null 
            }
        </LargeCard>        
    );    
}

const RbacRolesLazyPageContent = Lazy(RbacRolesPageContent)(QueryAction, QueryActionValidator)
export const RbacRolesCardPage = () => {
    const params = useParams()
    return (<RbacRolesLazyPageContent {...params} />)
}

