import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/formcategory/view/";
export const setLinkBase = (value) => linkBase = value;
export const FormcategoryLink = ({ formcategory, children}) => {
    // console.log("FormcategoryLargeCard", formcategory)
    return (
        <ProxyLink to={linkBase + formcategory?.id}>{ formcategory?.fullname || formcategory?.name || formcategory?.id}</ProxyLink>
    )
}

