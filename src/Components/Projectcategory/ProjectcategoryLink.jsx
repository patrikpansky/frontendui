import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/projectcategory/view/";
export const setLinkBase = (value) => linkBase = value;
export const ProjectcategoryLink = ({ projectcategory, children}) => {
    // console.log("ProjectcategoryLargeCard", projectcategory)
    return (
        <ProxyLink to={linkBase + projectcategory?.id}>{ projectcategory?.fullname || projectcategory?.name || projectcategory?.id}</ProxyLink>
    )
}

