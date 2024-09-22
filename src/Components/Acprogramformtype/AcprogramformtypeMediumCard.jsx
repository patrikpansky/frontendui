import { AcprogramformtypeCardCapsule } from './AcprogramformtypeCardCapsule';
import { AcprogramformtypeCardBody } from './AcprogramformtypeCardBody';

export const AcprogramformtypeMediumCardFragment = `
fragment AcprogramformtypeMediumCardFragment on AcprogramformtypeGQLModel {
        id
        name
        nameEn
        created
        lastchange
    }`

export const AcprogramformtypeMediumCardConstant = ({ acprogramformtype, children, label="" }) => {
    return (
        <AcprogramformtypeCardCapsule acprogramformtype={ acprogramformtype } label={label} >
            <AcprogramformtypeCardBody acprogramformtype={ acprogramformtype }>
                {children}
            </AcprogramformtypeCardBody>
        </AcprogramformtypeCardCapsule>        
    )
}
export let AcprogramformtypeMediumCard = AcprogramformtypeMediumCardConstant
export const setMediumCard = (newMediumCard) => AcprogramformtypeMediumCard = newMediumCard