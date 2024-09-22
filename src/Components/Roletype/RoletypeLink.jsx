import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/roletype/view/";
export const setLinkBase = (value) => linkBase = value;
export const RoletypeLink = ({ roletype, children}) => {
    // console.log("RoletypeLargeCard", roletype)
    return (
        <ProxyLink to={linkBase + roletype?.id}>{ roletype?.fullname || roletype?.name || roletype?.id}</ProxyLink>
    )
}

