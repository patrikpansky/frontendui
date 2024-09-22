import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/role/view/";
export const setLinkBase = (value) => linkBase = value;
export const RoleLink = ({ role, children}) => {
    // console.log("RoleLargeCard", role)
    return (
        <ProxyLink to={linkBase + role?.id}>{ role?.fullname || role?.name || role?.id}</ProxyLink>
    )
}

