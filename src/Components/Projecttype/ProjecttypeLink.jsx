import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/projecttype/view/";
export const setLinkBase = (value) => linkBase = value;
export const ProjecttypeLink = ({ projecttype, children}) => {
    // console.log("ProjecttypeLargeCard", projecttype)
    return (
        <ProxyLink to={linkBase + projecttype?.id}>{ projecttype?.fullname || projecttype?.name || projecttype?.id}</ProxyLink>
    )
}

