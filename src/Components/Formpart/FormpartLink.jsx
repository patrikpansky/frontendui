import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/auto/formpart/view/";
export const setLinkBase = (value) => linkBase = value;
export const FormpartLink = ({ formpart, children}) => {
    // console.log("FormpartLargeCard", formpart)
    return (
        <ProxyLink to={linkBase + formpart?.id}>{ formpart?.fullname || formpart?.name || formpart?.id}</ProxyLink>
    )
}

