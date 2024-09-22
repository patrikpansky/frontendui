import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/formitemcategory/view/";
export const setLinkBase = (value) => linkBase = value;
export const FormitemcategoryLink = ({ formitemcategory, children}) => {
    // console.log("FormitemcategoryLargeCard", formitemcategory)
    return (
        <ProxyLink to={linkBase + formitemcategory?.id}>{ formitemcategory?.fullname || formitemcategory?.name || formitemcategory?.id}</ProxyLink>
    )
}

