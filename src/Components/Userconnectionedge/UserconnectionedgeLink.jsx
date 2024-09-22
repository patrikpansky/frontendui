import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/userconnectionedge/view/";
export const setLinkBase = (value) => linkBase = value;
export const UserconnectionedgeLink = ({ userconnectionedge, children}) => {
    // console.log("UserconnectionedgeLargeCard", userconnectionedge)
    return (
        <ProxyLink to={linkBase + userconnectionedge?.id}>{ userconnectionedge?.fullname || userconnectionedge?.name || userconnectionedge?.id}</ProxyLink>
    )
}

