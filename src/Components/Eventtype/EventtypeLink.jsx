import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/eventtype/view/";
export const setLinkBase = (value) => linkBase = value;
export const EventtypeLink = ({ eventtype, children}) => {
    // console.log("EventtypeLargeCard", eventtype)
    return (
        <ProxyLink to={linkBase + eventtype?.id}>{ eventtype?.fullname || eventtype?.name || eventtype?.id}</ProxyLink>
    )
}

