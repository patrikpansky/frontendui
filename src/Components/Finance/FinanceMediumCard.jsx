import { FinanceCardCapsule } from './FinanceCardCapsule';
import { FinanceCardBody } from './FinanceCardBody';

export const FinanceMediumCardFragment = `
fragment FinanceMediumCardFragment on FinanceGQLModel {
        id
        name
        amount
        lastchange
        created
        valid
    }`

export const FinanceMediumCardConstant = ({ finance, children, label="" }) => {
    return (
        <FinanceCardCapsule finance={ finance } label={label} >
            <FinanceCardBody finance={ finance }>
                {children}
            </FinanceCardBody>
        </FinanceCardCapsule>        
    )
}
export let FinanceMediumCard = FinanceMediumCardConstant
export const setMediumCard = (newMediumCard) => FinanceMediumCard = newMediumCard