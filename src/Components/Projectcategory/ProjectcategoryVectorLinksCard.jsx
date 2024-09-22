import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { ProjectcategoryCardCapsule } from './ProjectcategoryCardCapsule';
import { ProjectcategoryCardBody } from './ProjectcategoryCardBody';

export const ProjectcategoryVectorLinksCard = ({ projectcategory, children, label="" }) => {
    return (
        <ProjectcategoryCardCapsule projectcategory={ projectcategory } label={label} >
        </ProjectcategoryCardCapsule>        
    )
}

