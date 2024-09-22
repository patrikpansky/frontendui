import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/grouptype/view/";
export const setLinkBase = (value) => linkBase = value;
export const GrouptypeLink = ({ grouptype, children}) => {
    // console.log("GrouptypeLargeCard", grouptype)
    return (
        <ProxyLink to={linkBase + grouptype?.id}>{ grouptype?.fullname || grouptype?.name || grouptype?.id}</ProxyLink>
    )
}

