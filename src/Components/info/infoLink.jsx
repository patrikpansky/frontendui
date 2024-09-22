import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/pageinfo/view/";
export const setLinkBase = (value) => linkBase = value;
export const infoLink = ({ pageinfo, children}) => {
    // console.log("infoLargeCard", pageinfo)
    return (
        <ProxyLink to={linkBase + pageinfo?.id}>{ pageinfo?.fullname || pageinfo?.name || pageinfo?.id}</ProxyLink>
    )
}

