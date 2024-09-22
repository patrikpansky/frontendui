import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/externalid/view/";
export const setLinkBase = (value) => linkBase = value;
export const ExternalidLink = ({ externalid, children}) => {
    // console.log("ExternalidLargeCard", externalid)
    return (
        <ProxyLink to={linkBase + externalid?.id}>{ externalid?.fullname || externalid?.name || externalid?.id}</ProxyLink>
    )
}

