import { RbacobjectMediumCard } from './RbacobjectMediumCard';
import { RbacobjectLargeCardLayout } from './RbacobjectLargeCardLayout';
import { RbacobjectVectorLinksCard } from './RbacobjectVectorLinksCard';

/**/
//  Rbacobject: RBACObject
/**/



/**
 * 
 */
export const RbacobjectLargeCard = ({ rbacobject, children}) => {
    // console.log("RbacobjectLargeCard", rbacobject)
    return (
        <RbacobjectLargeCardLayout rbacobject={ rbacobject } grandchildren={children}>
            <RbacobjectMediumCard rbacobject={ rbacobject }/>
            <RbacobjectVectorLinksCard  rbacobject={ rbacobject } />
        </RbacobjectLargeCardLayout>
    )
}

