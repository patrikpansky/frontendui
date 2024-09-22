import { FinancecategoryCardCapsule } from './FinancecategoryCardCapsule';
import { FinancecategoryCardBody } from './FinancecategoryCardBody';

export const FinancecategoryMediumCardFragment = `
fragment FinancecategoryMediumCardFragment on FinancecategoryGQLModel {
        id
        name
        nameEn
        lastchange
        created
    }`

export const FinancecategoryMediumCardConstant = ({ financecategory, children, label="" }) => {
    return (
        <FinancecategoryCardCapsule financecategory={ financecategory } label={label} >
            <FinancecategoryCardBody financecategory={ financecategory }>
                {children}
            </FinancecategoryCardBody>
        </FinancecategoryCardCapsule>        
    )
}
export let FinancecategoryMediumCard = FinancecategoryMediumCardConstant
export const setMediumCard = (newMediumCard) => FinancecategoryMediumCard = newMediumCard