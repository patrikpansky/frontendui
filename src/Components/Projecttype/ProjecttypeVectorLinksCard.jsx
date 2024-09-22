import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { ProjecttypeCardCapsule } from './ProjecttypeCardCapsule';
import { ProjecttypeCardBody } from './ProjecttypeCardBody';

export const ProjecttypeVectorLinksCard = ({ projecttype, children, label="" }) => {
    return (
        <ProjecttypeCardCapsule projecttype={ projecttype } label={label} >
            <ProxyLink to={"/all/projecttype/projects/" + projecttype.id } >projects</ProxyLink><br />
        </ProjecttypeCardCapsule>        
    )
}

