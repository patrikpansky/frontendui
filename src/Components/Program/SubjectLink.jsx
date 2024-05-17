import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

export const SubjectLink = ({subject}) => <ProxyLink to={"/programs/semesters/view/" + subject?.id} >{subject?.name}</ProxyLink>