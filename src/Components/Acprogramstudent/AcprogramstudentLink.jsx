import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/acprogramstudent/view/";
export const setLinkBase = (value) => linkBase = value;
export const AcprogramstudentLink = ({ acprogramstudent, children}) => {
    // console.log("AcprogramstudentLargeCard", acprogramstudent)
    return (
        <ProxyLink to={linkBase + acprogramstudent?.id}>{ acprogramstudent?.fullname || acprogramstudent?.name || acprogramstudent?.id}</ProxyLink>
    )
}

