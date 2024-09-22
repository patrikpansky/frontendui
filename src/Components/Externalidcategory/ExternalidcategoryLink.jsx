import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/externalidcategory/view/";
export const setLinkBase = (value) => linkBase = value;
export const ExternalidcategoryLink = ({ externalidcategory, children}) => {
    // console.log("ExternalidcategoryLargeCard", externalidcategory)
    return (
        <ProxyLink to={linkBase + externalidcategory?.id}>{ externalidcategory?.fullname || externalidcategory?.name || externalidcategory?.id}</ProxyLink>
    )
}

