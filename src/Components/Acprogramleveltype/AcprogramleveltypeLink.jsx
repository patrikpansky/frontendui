import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/acprogramleveltype/view/";
export const setLinkBase = (value) => linkBase = value;
export const AcprogramleveltypeLink = ({ acprogramleveltype, children}) => {
    // console.log("AcprogramleveltypeLargeCard", acprogramleveltype)
    return (
        <ProxyLink to={linkBase + acprogramleveltype?.id}>{ acprogramleveltype?.fullname || acprogramleveltype?.name || acprogramleveltype?.id}</ProxyLink>
    )
}

