import { AcclassificationlevelCardCapsule } from './AcclassificationlevelCardCapsule';
import { AcclassificationlevelCardBody } from './AcclassificationlevelCardBody';

export const AcclassificationlevelMediumCardFragment = `
fragment AcclassificationlevelMediumCardFragment on AcclassificationlevelGQLModel {
        id
        name
        nameen
        created
        lastchange
    }`

export const AcclassificationlevelMediumCardConstant = ({ acclassificationlevel, children, label="" }) => {
    return (
        <AcclassificationlevelCardCapsule acclassificationlevel={ acclassificationlevel } label={label} >
            <AcclassificationlevelCardBody acclassificationlevel={ acclassificationlevel }>
                {children}
            </AcclassificationlevelCardBody>
        </AcclassificationlevelCardCapsule>        
    )
}
export let AcclassificationlevelMediumCard = AcclassificationlevelMediumCardConstant
export const setMediumCard = (newMediumCard) => AcclassificationlevelMediumCard = newMediumCard