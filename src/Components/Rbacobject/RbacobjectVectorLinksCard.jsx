import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { RbacobjectCardCapsule } from './RbacobjectCardCapsule';
import { RbacobjectCardBody } from './RbacobjectCardBody';

export const RbacobjectVectorLinksCard = ({ rbacobject, children, label="" }) => {
    return (
        <RbacobjectCardCapsule rbacobject={ rbacobject } label={label} >
            <ProxyLink to={"/all/rbacobject/roles/" + rbacobject.id } >roles</ProxyLink><br />
        </RbacobjectCardCapsule>        
    )
}

