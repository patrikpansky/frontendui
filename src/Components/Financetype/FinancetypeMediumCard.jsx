import { FinancetypeCardCapsule } from './FinancetypeCardCapsule';
import { FinancetypeCardBody } from './FinancetypeCardBody';

export const FinancetypeMediumCardFragment = `
fragment FinancetypeMediumCardFragment on FinancetypeGQLModel {
        id
        name
        nameen
        lastchange
        created
        valid
    }`

export const FinancetypeMediumCardConstant = ({ financetype, children, label="" }) => {
    return (
        <FinancetypeCardCapsule financetype={ financetype } label={label} >
            <FinancetypeCardBody financetype={ financetype }>
                {children}
            </FinancetypeCardBody>
        </FinancetypeCardCapsule>        
    )
}
export let FinancetypeMediumCard = FinancetypeMediumCardConstant
export const setMediumCard = (newMediumCard) => FinancetypeMediumCard = newMediumCard