import { FacilityeventstatetypeCardCapsule } from './FacilityeventstatetypeCardCapsule';
import { FacilityeventstatetypeCardBody } from './FacilityeventstatetypeCardBody';

export const FacilityeventstatetypeMediumCardFragment = `
fragment FacilityeventstatetypeMediumCardFragment on FacilityeventstatetypeGQLModel {
        id
        name
        nameen
        lastchange
        created
    }`

export const FacilityeventstatetypeMediumCardConstant = ({ facilityeventstatetype, children, label="" }) => {
    return (
        <FacilityeventstatetypeCardCapsule facilityeventstatetype={ facilityeventstatetype } label={label} >
            <FacilityeventstatetypeCardBody facilityeventstatetype={ facilityeventstatetype }>
                {children}
            </FacilityeventstatetypeCardBody>
        </FacilityeventstatetypeCardCapsule>        
    )
}
export let FacilityeventstatetypeMediumCard = FacilityeventstatetypeMediumCardConstant
export const setMediumCard = (newMediumCard) => FacilityeventstatetypeMediumCard = newMediumCard