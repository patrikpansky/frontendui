import { AcprogrammessageCardCapsule } from './AcprogrammessageCardCapsule';
import { AcprogrammessageCardBody } from './AcprogrammessageCardBody';

export const AcprogrammessageMediumCardFragment = `
fragment AcprogrammessageMediumCardFragment on AcprogrammessageGQLModel {
        id
        created
        lastchange
        name
        description
        date
    }`

export const AcprogrammessageMediumCardConstant = ({ acprogrammessage, children, label="" }) => {
    return (
        <AcprogrammessageCardCapsule acprogrammessage={ acprogrammessage } label={label} >
            <AcprogrammessageCardBody acprogrammessage={ acprogrammessage }>
                {children}
            </AcprogrammessageCardBody>
        </AcprogrammessageCardCapsule>        
    )
}
export let AcprogrammessageMediumCard = AcprogrammessageMediumCardConstant
export const setMediumCard = (newMediumCard) => AcprogrammessageMediumCard = newMediumCard