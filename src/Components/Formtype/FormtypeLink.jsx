import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/formtype/view/";
export const setLinkBase = (value) => linkBase = value;
export const FormtypeLink = ({ formtype, children}) => {
    // console.log("FormtypeLargeCard", formtype)
    return (
        <ProxyLink to={linkBase + formtype?.id}>{ formtype?.fullname || formtype?.name || formtype?.id}</ProxyLink>
    )
}

