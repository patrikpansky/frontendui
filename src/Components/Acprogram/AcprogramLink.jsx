import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/acprogram/view/";
export const setLinkBase = (value) => linkBase = value;
export const AcprogramLink = ({ acprogram, children}) => {
    // console.log("AcprogramLargeCard", acprogram)
    return (
        <ProxyLink to={linkBase + acprogram?.id}>{ acprogram?.fullname || acprogram?.name || acprogram?.id}</ProxyLink>
    )
}

