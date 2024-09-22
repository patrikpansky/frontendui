import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/acprogrammessage/view/";
export const setLinkBase = (value) => linkBase = value;
export const AcprogrammessageLink = ({ acprogrammessage, children}) => {
    // console.log("AcprogrammessageLargeCard", acprogrammessage)
    return (
        <ProxyLink to={linkBase + acprogrammessage?.id}>{ acprogrammessage?.fullname || acprogrammessage?.name || acprogrammessage?.id}</ProxyLink>
    )
}

