import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

export const ProgramLink = ({program}) => <ProxyLink to={"/programs/subjects/view/" + program?.id} >{program?.name}</ProxyLink>