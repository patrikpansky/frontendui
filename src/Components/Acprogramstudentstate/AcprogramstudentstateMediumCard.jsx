import { AcprogramstudentstateCardCapsule } from './AcprogramstudentstateCardCapsule';
import { AcprogramstudentstateCardBody } from './AcprogramstudentstateCardBody';

export const AcprogramstudentstateMediumCardFragment = `
fragment AcprogramstudentstateMediumCardFragment on AcprogramstudentstateGQLModel {
        id
        name
        nameen
        created
        lastchange
    }`

export const AcprogramstudentstateMediumCardConstant = ({ acprogramstudentstate, children, label="" }) => {
    return (
        <AcprogramstudentstateCardCapsule acprogramstudentstate={ acprogramstudentstate } label={label} >
            <AcprogramstudentstateCardBody acprogramstudentstate={ acprogramstudentstate }>
                {children}
            </AcprogramstudentstateCardBody>
        </AcprogramstudentstateCardCapsule>        
    )
}
export let AcprogramstudentstateMediumCard = AcprogramstudentstateMediumCardConstant
export const setMediumCard = (newMediumCard) => AcprogramstudentstateMediumCard = newMediumCard