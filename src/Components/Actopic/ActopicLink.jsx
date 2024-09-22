import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/actopic/view/";
export const setLinkBase = (value) => linkBase = value;
export const ActopicLink = ({ actopic, children}) => {
    // console.log("ActopicLargeCard", actopic)
    return (
        <ProxyLink to={linkBase + actopic?.id}>{ actopic?.fullname || actopic?.name || actopic?.id}</ProxyLink>
    )
}

