import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/project/view/";
export const setLinkBase = (value) => linkBase = value;
export const ProjectLink = ({ project, children}) => {
    // console.log("ProjectLargeCard", project)
    return (
        <ProxyLink to={linkBase + project?.id}>{ project?.fullname || project?.name || project?.id}</ProxyLink>
    )
}

