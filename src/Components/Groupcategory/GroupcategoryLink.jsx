import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/groupcategory/view/";
export const setLinkBase = (value) => linkBase = value;
export const GroupcategoryLink = ({ groupcategory, children}) => {
    // console.log("GroupcategoryLargeCard", groupcategory)
    return (
        <ProxyLink to={linkBase + groupcategory?.id}>{ groupcategory?.fullname || groupcategory?.name || groupcategory?.id}</ProxyLink>
    )
}

