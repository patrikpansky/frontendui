import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/acprogramformtype/view/";
export const setLinkBase = (value) => linkBase = value;
export const AcprogramformtypeLink = ({ acprogramformtype, children}) => {
    // console.log("AcprogramformtypeLargeCard", acprogramformtype)
    return (
        <ProxyLink to={linkBase + acprogramformtype?.id}>{ acprogramformtype?.fullname || acprogramformtype?.name || acprogramformtype?.id}</ProxyLink>
    )
}

