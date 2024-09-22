import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/userconnection/view/";
export const setLinkBase = (value) => linkBase = value;
export const UserconnectionLink = ({ userconnection, children}) => {
    // console.log("UserconnectionLargeCard", userconnection)
    return (
        <ProxyLink to={linkBase + userconnection?.id}>{ userconnection?.fullname || userconnection?.name || userconnection?.id}</ProxyLink>
    )
}

