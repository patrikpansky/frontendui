import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/form/view/";
export const setLinkBase = (value) => linkBase = value;
export const FormLink = ({ form, children}) => {
    // console.log("FormLargeCard", form)
    return (
        <ProxyLink to={linkBase + form?.id}>{ form?.fullname || form?.name || form?.id}</ProxyLink>
    )
}

