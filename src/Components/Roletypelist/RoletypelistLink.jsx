import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/roletypelist/view/";
export const setLinkBase = (value) => linkBase = value;
export const RoletypelistLink = ({ roletypelist, children}) => {
    // console.log("RoletypelistLargeCard", roletypelist)
    return (
        <ProxyLink to={linkBase + roletypelist?.id}>{ roletypelist?.fullname || roletypelist?.name || roletypelist?.id}</ProxyLink>
    )
}

