import { ProjecttypeCardCapsule } from './ProjecttypeCardCapsule';
import { ProjecttypeCardBody } from './ProjecttypeCardBody';

export const ProjecttypeMediumCardFragment = `
fragment ProjecttypeMediumCardFragment on ProjecttypeGQLModel {
        id
        name
        nameen
        created
        lastchange
        valid
    }`

export const ProjecttypeMediumCardConstant = ({ projecttype, children, label="" }) => {
    return (
        <ProjecttypeCardCapsule projecttype={ projecttype } label={label} >
            <ProjecttypeCardBody projecttype={ projecttype }>
                {children}
            </ProjecttypeCardBody>
        </ProjecttypeCardCapsule>        
    )
}
export let ProjecttypeMediumCard = ProjecttypeMediumCardConstant
export const setMediumCard = (newMediumCard) => ProjecttypeMediumCard = newMediumCard