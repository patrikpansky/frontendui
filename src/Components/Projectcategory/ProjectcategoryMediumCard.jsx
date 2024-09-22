import { ProjectcategoryCardCapsule } from './ProjectcategoryCardCapsule';
import { ProjectcategoryCardBody } from './ProjectcategoryCardBody';

export const ProjectcategoryMediumCardFragment = `
fragment ProjectcategoryMediumCardFragment on ProjectcategoryGQLModel {
        id
        name
        nameen
        lastchange
        created
    }`

export const ProjectcategoryMediumCardConstant = ({ projectcategory, children, label="" }) => {
    return (
        <ProjectcategoryCardCapsule projectcategory={ projectcategory } label={label} >
            <ProjectcategoryCardBody projectcategory={ projectcategory }>
                {children}
            </ProjectcategoryCardBody>
        </ProjectcategoryCardCapsule>        
    )
}
export let ProjectcategoryMediumCard = ProjectcategoryMediumCardConstant
export const setMediumCard = (newMediumCard) => ProjectcategoryMediumCard = newMediumCard