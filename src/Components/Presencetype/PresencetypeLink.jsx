import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/presencetype/view/";
export const setLinkBase = (value) => linkBase = value;
export const PresencetypeLink = ({ presencetype, children}) => {
    // console.log("PresencetypeLargeCard", presencetype)
    return (
        <ProxyLink to={linkBase + presencetype?.id}>{ presencetype?.fullname || presencetype?.name || presencetype?.id}</ProxyLink>
    )
}

