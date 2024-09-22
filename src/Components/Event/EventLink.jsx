import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/event/view/";
export const setLinkBase = (value) => linkBase = value;
export const EventLink = ({ event, children}) => {
    // console.log("EventLargeCard", event)
    return (
        <ProxyLink to={linkBase + event?.id}>{ event?.fullname || event?.name || event?.id}</ProxyLink>
    )
}

