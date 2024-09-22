import { ExternalidtypeCardCapsule } from './ExternalidtypeCardCapsule';
import { ExternalidtypeCardBody } from './ExternalidtypeCardBody';

export const ExternalidtypeMediumCardFragment = `
fragment ExternalidtypeMediumCardFragment on ExternalidtypeGQLModel {
        id
        name
        nameEn
        lastchange
        created
    }`

export const ExternalidtypeMediumCardConstant = ({ externalidtype, children, label="" }) => {
    return (
        <ExternalidtypeCardCapsule externalidtype={ externalidtype } label={label} >
            <ExternalidtypeCardBody externalidtype={ externalidtype }>
                {children}
            </ExternalidtypeCardBody>
        </ExternalidtypeCardCapsule>        
    )
}
export let ExternalidtypeMediumCard = ExternalidtypeMediumCardConstant
export const setMediumCard = (newMediumCard) => ExternalidtypeMediumCard = newMediumCard