import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/externalidtype/view/";
export const setLinkBase = (value) => linkBase = value;
export const ExternalidtypeLink = ({ externalidtype, children}) => {
    // console.log("ExternalidtypeLargeCard", externalidtype)
    return (
        <ProxyLink to={linkBase + externalidtype?.id}>{ externalidtype?.fullname || externalidtype?.name || externalidtype?.id}</ProxyLink>
    )
}

