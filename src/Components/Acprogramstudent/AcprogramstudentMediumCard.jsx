import { AcprogramstudentCardCapsule } from './AcprogramstudentCardCapsule';
import { AcprogramstudentCardBody } from './AcprogramstudentCardBody';

export const AcprogramstudentMediumCardFragment = `
fragment AcprogramstudentMediumCardFragment on AcprogramstudentGQLModel {
        id
        created
        lastchange
        semester
    }`

export const AcprogramstudentMediumCardConstant = ({ acprogramstudent, children, label="" }) => {
    return (
        <AcprogramstudentCardCapsule acprogramstudent={ acprogramstudent } label={label} >
            <AcprogramstudentCardBody acprogramstudent={ acprogramstudent }>
                {children}
            </AcprogramstudentCardBody>
        </AcprogramstudentCardCapsule>        
    )
}
export let AcprogramstudentMediumCard = AcprogramstudentMediumCardConstant
export const setMediumCard = (newMediumCard) => AcprogramstudentMediumCard = newMediumCard