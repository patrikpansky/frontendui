import { FacilitytypeCardCapsule } from './FacilitytypeCardCapsule';
import { FacilitytypeCardBody } from './FacilitytypeCardBody';

export const FacilitytypeMediumCardFragment = `
fragment FacilitytypeMediumCardFragment on FacilitytypeGQLModel {
        id
        name
        nameen
        lastchange
        created
    }`

export const FacilitytypeMediumCardConstant = ({ facilitytype, children, label="" }) => {
    return (
        <FacilitytypeCardCapsule facilitytype={ facilitytype } label={label} >
            <FacilitytypeCardBody facilitytype={ facilitytype }>
                {children}
            </FacilitytypeCardBody>
        </FacilitytypeCardCapsule>        
    )
}
export let FacilitytypeMediumCard = FacilitytypeMediumCardConstant
export const setMediumCard = (newMediumCard) => FacilitytypeMediumCard = newMediumCard