import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/groupconnectionedge/view/";
export const setLinkBase = (value) => linkBase = value;
export const GroupconnectionedgeLink = ({ groupconnectionedge, children}) => {
    // console.log("GroupconnectionedgeLargeCard", groupconnectionedge)
    return (
        <ProxyLink to={linkBase + groupconnectionedge?.id}>{ groupconnectionedge?.fullname || groupconnectionedge?.name || groupconnectionedge?.id}</ProxyLink>
    )
}

