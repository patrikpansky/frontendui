import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/groupconnection/view/";
export const setLinkBase = (value) => linkBase = value;
export const GroupconnectionLink = ({ groupconnection, children}) => {
    // console.log("GroupconnectionLargeCard", groupconnection)
    return (
        <ProxyLink to={linkBase + groupconnection?.id}>{ groupconnection?.fullname || groupconnection?.name || groupconnection?.id}</ProxyLink>
    )
}

