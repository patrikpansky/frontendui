import { FacilityCardCapsule } from './FacilityCardCapsule';
import { FacilityCardBody } from './FacilityCardBody';

export const FacilityMediumCardFragment = `
fragment FacilityMediumCardFragment on FacilityGQLModel {
        id
        name
        nameEn
        lastchange
        created
        label
        address
        valid
        capacity
        geometry
        geolocation
    }`

export const FacilityMediumCardConstant = ({ facility, children, label="" }) => {
    return (
        <FacilityCardCapsule facility={ facility } label={label} >
            <FacilityCardBody facility={ facility }>
                {children}
            </FacilityCardBody>
        </FacilityCardCapsule>        
    )
}
export let FacilityMediumCard = FacilityMediumCardConstant
export const setMediumCard = (newMediumCard) => FacilityMediumCard = newMediumCard