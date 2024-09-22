import { AcprogramleveltypeCardCapsule } from './AcprogramleveltypeCardCapsule';
import { AcprogramleveltypeCardBody } from './AcprogramleveltypeCardBody';

export const AcprogramleveltypeMediumCardFragment = `
fragment AcprogramleveltypeMediumCardFragment on AcprogramleveltypeGQLModel {
        id
        name
        nameEn
        created
        lastchange
    }`

export const AcprogramleveltypeMediumCardConstant = ({ acprogramleveltype, children, label="" }) => {
    return (
        <AcprogramleveltypeCardCapsule acprogramleveltype={ acprogramleveltype } label={label} >
            <AcprogramleveltypeCardBody acprogramleveltype={ acprogramleveltype }>
                {children}
            </AcprogramleveltypeCardBody>
        </AcprogramleveltypeCardCapsule>        
    )
}
export let AcprogramleveltypeMediumCard = AcprogramleveltypeMediumCardConstant
export const setMediumCard = (newMediumCard) => AcprogramleveltypeMediumCard = newMediumCard