import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/presence/view/";
export const setLinkBase = (value) => linkBase = value;
export const PresenceLink = ({ presence, children}) => {
    // console.log("PresenceLargeCard", presence)
    return (
        <ProxyLink to={linkBase + presence?.id}>{ presence?.fullname || presence?.name || presence?.id}</ProxyLink>
    )
}

