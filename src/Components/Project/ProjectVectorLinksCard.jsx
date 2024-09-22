import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { ProjectCardCapsule } from './ProjectCardCapsule';
import { ProjectCardBody } from './ProjectCardBody';

export const ProjectVectorLinksCard = ({ project, children, label="" }) => {
    return (
        <ProjectCardCapsule project={ project } label={label} >
            <ProxyLink to={"/auto/project/finances/" + project.id } >finances</ProxyLink><br />
            <ProxyLink to={"/auto/project/milestones/" + project.id } >milestones</ProxyLink><br />
        </ProjectCardCapsule>        
    )
}

