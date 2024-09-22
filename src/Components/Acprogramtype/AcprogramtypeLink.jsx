import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/acprogramtype/view/";
export const setLinkBase = (value) => linkBase = value;
export const AcprogramtypeLink = ({ acprogramtype, children}) => {
    // console.log("AcprogramtypeLargeCard", acprogramtype)
    return (
        <ProxyLink to={linkBase + acprogramtype?.id}>{ acprogramtype?.fullname || acprogramtype?.name || acprogramtype?.id}</ProxyLink>
    )
}

