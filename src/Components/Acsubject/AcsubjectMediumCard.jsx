import { AcsubjectCardCapsule } from './AcsubjectCardCapsule';
import { AcsubjectCardBody } from './AcsubjectCardBody';

export const AcsubjectMediumCardFragment = `
fragment AcsubjectMediumCardFragment on AcsubjectGQLModel {
        id
        name
        nameEn
        created
        lastchange
    }`

export const AcsubjectMediumCardConstant = ({ acsubject, children, label="" }) => {
    return (
        <AcsubjectCardCapsule acsubject={ acsubject } label={label} >
            <AcsubjectCardBody acsubject={ acsubject }>
                {children}
            </AcsubjectCardBody>
        </AcsubjectCardCapsule>        
    )
}
export let AcsubjectMediumCard = AcsubjectMediumCardConstant
export const setMediumCard = (newMediumCard) => AcsubjectMediumCard = newMediumCard