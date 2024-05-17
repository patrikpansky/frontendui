import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

export const FormLink = ({form, children}) => <ProxyLink to={"/forms/form/view/" + form?.id} >{children || form?.name}</ProxyLink>