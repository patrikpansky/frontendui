import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

export const RequestLink = ({request}) => <ProxyLink to={"/forms/request/view/" + request?.id} >{request?.name}</ProxyLink>