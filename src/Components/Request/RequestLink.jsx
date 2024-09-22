import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/request/view/";
export const setLinkBase = (value) => linkBase = value;
export const RequestLink = ({ request, children}) => {
    // console.log("RequestLargeCard", request)
    return (
        <ProxyLink to={linkBase + request?.id}>{ request?.fullname || request?.name || request?.id}</ProxyLink>
    )
}

