import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/formitem/view/";
export const setLinkBase = (value) => linkBase = value;
export const FormitemLink = ({ formitem, children}) => {
    // console.log("FormitemLargeCard", formitem)
    return (
        <ProxyLink to={linkBase + formitem?.id}>{ formitem?.fullname || formitem?.name || formitem?.id}</ProxyLink>
    )
}

