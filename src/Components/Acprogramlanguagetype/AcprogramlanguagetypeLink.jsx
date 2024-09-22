import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/acprogramlanguagetype/view/";
export const setLinkBase = (value) => linkBase = value;
export const AcprogramlanguagetypeLink = ({ acprogramlanguagetype, children}) => {
    // console.log("AcprogramlanguagetypeLargeCard", acprogramlanguagetype)
    return (
        <ProxyLink to={linkBase + acprogramlanguagetype?.id}>{ acprogramlanguagetype?.fullname || acprogramlanguagetype?.name || acprogramlanguagetype?.id}</ProxyLink>
    )
}

