import { ExternalidCardCapsule } from './ExternalidCardCapsule';
import { ExternalidCardBody } from './ExternalidCardBody';

export const ExternalidMediumCardFragment = `
fragment ExternalidMediumCardFragment on ExternalidGQLModel {
        id
        lastchange
        created
        innerId
        outerId
        typeName
        link
    }`

export const ExternalidMediumCardConstant = ({ externalid, children, label="" }) => {
    return (
        <ExternalidCardCapsule externalid={ externalid } label={label} >
            <ExternalidCardBody externalid={ externalid }>
                {children}
            </ExternalidCardBody>
        </ExternalidCardCapsule>        
    )
}
export let ExternalidMediumCard = ExternalidMediumCardConstant
export const setMediumCard = (newMediumCard) => ExternalidMediumCard = newMediumCard