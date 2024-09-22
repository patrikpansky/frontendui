import { ProjectCardCapsule } from './ProjectCardCapsule';
import { ProjectCardBody } from './ProjectCardBody';

export const ProjectMediumCardFragment = `
fragment ProjectMediumCardFragment on ProjectGQLModel {
        id
        name
        startdate
        enddate
        created
        lastchange
        valid
    }`

export const ProjectMediumCardConstant = ({ project, children, label="" }) => {
    return (
        <ProjectCardCapsule project={ project } label={label} >
            <ProjectCardBody project={ project }>
                {children}
            </ProjectCardBody>
        </ProjectCardCapsule>        
    )
}
export let ProjectMediumCard = ProjectMediumCardConstant
export const setMediumCard = (newMediumCard) => ProjectMediumCard = newMediumCard