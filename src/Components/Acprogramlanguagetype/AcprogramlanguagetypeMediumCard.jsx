import { AcprogramlanguagetypeCardCapsule } from './AcprogramlanguagetypeCardCapsule';
import { AcprogramlanguagetypeCardBody } from './AcprogramlanguagetypeCardBody';

export const AcprogramlanguagetypeMediumCardFragment = `
fragment AcprogramlanguagetypeMediumCardFragment on AcprogramlanguagetypeGQLModel {
        id
        name
        nameen
        created
        lastchange
    }`

export const AcprogramlanguagetypeMediumCardConstant = ({ acprogramlanguagetype, children, label="" }) => {
    return (
        <AcprogramlanguagetypeCardCapsule acprogramlanguagetype={ acprogramlanguagetype } label={label} >
            <AcprogramlanguagetypeCardBody acprogramlanguagetype={ acprogramlanguagetype }>
                {children}
            </AcprogramlanguagetypeCardBody>
        </AcprogramlanguagetypeCardCapsule>        
    )
}
export let AcprogramlanguagetypeMediumCard = AcprogramlanguagetypeMediumCardConstant
export const setMediumCard = (newMediumCard) => AcprogramlanguagetypeMediumCard = newMediumCard