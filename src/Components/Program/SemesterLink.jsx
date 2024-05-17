import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

export const SemesterLink = ({semester}) => <ProxyLink to={"/programs/semester/view/" + semester?.id} >{semester?.order}</ProxyLink>