import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/acprogramstudentstate/view/";
export const setLinkBase = (value) => linkBase = value;
export const AcprogramstudentstateLink = ({ acprogramstudentstate, children}) => {
    // console.log("AcprogramstudentstateLargeCard", acprogramstudentstate)
    return (
        <ProxyLink to={linkBase + acprogramstudentstate?.id}>{ acprogramstudentstate?.fullname || acprogramstudentstate?.name || acprogramstudentstate?.id}</ProxyLink>
    )
}

