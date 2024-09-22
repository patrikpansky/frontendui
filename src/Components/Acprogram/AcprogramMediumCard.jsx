import { AcprogramCardCapsule } from './AcprogramCardCapsule';
import { AcprogramCardBody } from './AcprogramCardBody';

export const AcprogramMediumCardFragment = `
fragment AcprogramMediumCardFragment on AcprogramGQLModel {
        id
        name
        nameEn
        created
        lastchange
    }`

export const AcprogramMediumCardConstant = ({ acprogram, children, label="" }) => {
    return (
        <AcprogramCardCapsule acprogram={ acprogram } label={label} >
            <AcprogramCardBody acprogram={ acprogram }>
                {children}
            </AcprogramCardBody>
        </AcprogramCardCapsule>        
    )
}
export let AcprogramMediumCard = AcprogramMediumCardConstant
export const setMediumCard = (newMediumCard) => AcprogramMediumCard = newMediumCard