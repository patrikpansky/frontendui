import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/rbacobject/view/";
export const setLinkBase = (value) => linkBase = value;
export const RbacobjectLink = ({ rbacobject, children}) => {
    // console.log("RbacobjectLargeCard", rbacobject)
    return (
        <ProxyLink to={linkBase + rbacobject?.id}>{ rbacobject?.fullname || rbacobject?.name || rbacobject?.id}</ProxyLink>
    )
}

