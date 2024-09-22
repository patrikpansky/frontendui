import { AclessontypeCardCapsule } from './AclessontypeCardCapsule';
import { AclessontypeCardBody } from './AclessontypeCardBody';

export const AclessontypeMediumCardFragment = `
fragment AclessontypeMediumCardFragment on AclessontypeGQLModel {
        id
        name
        nameEn
        created
        lastchange
    }`

export const AclessontypeMediumCardConstant = ({ aclessontype, children, label="" }) => {
    return (
        <AclessontypeCardCapsule aclessontype={ aclessontype } label={label} >
            <AclessontypeCardBody aclessontype={ aclessontype }>
                {children}
            </AclessontypeCardBody>
        </AclessontypeCardCapsule>        
    )
}
export let AclessontypeMediumCard = AclessontypeMediumCardConstant
export const setMediumCard = (newMediumCard) => AclessontypeMediumCard = newMediumCard