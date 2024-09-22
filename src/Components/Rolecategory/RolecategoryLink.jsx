import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/rolecategory/view/";
export const setLinkBase = (value) => linkBase = value;
export const RolecategoryLink = ({ rolecategory, children}) => {
    // console.log("RolecategoryLargeCard", rolecategory)
    return (
        <ProxyLink to={linkBase + rolecategory?.id}>{ rolecategory?.fullname || rolecategory?.name || rolecategory?.id}</ProxyLink>
    )
}

