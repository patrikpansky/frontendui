import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/formitemtype/view/";
export const setLinkBase = (value) => linkBase = value;
export const FormitemtypeLink = ({ formitemtype, children}) => {
    // console.log("FormitemtypeLargeCard", formitemtype)
    return (
        <ProxyLink to={linkBase + formitemtype?.id}>{ formitemtype?.fullname || formitemtype?.name || formitemtype?.id}</ProxyLink>
    )
}

