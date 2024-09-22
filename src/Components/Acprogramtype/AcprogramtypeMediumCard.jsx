import { AcprogramtypeCardCapsule } from './AcprogramtypeCardCapsule';
import { AcprogramtypeCardBody } from './AcprogramtypeCardBody';

export const AcprogramtypeMediumCardFragment = `
fragment AcprogramtypeMediumCardFragment on AcprogramtypeGQLModel {
        id
        name
        nameEn
        created
        lastchange
    }`

export const AcprogramtypeMediumCardConstant = ({ acprogramtype, children, label="" }) => {
    return (
        <AcprogramtypeCardCapsule acprogramtype={ acprogramtype } label={label} >
            <AcprogramtypeCardBody acprogramtype={ acprogramtype }>
                {children}
            </AcprogramtypeCardBody>
        </AcprogramtypeCardCapsule>        
    )
}
export let AcprogramtypeMediumCard = AcprogramtypeMediumCardConstant
export const setMediumCard = (newMediumCard) => AcprogramtypeMediumCard = newMediumCard