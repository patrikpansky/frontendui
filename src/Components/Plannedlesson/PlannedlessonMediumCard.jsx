import { PlannedlessonCardCapsule } from './PlannedlessonCardCapsule';
import { PlannedlessonCardBody } from './PlannedlessonCardBody';

export const PlannedlessonMediumCardFragment = `
fragment PlannedlessonMediumCardFragment on PlannedlessonGQLModel {
        id
        name
        lastchange
        created
        order
        length
    }`

export const PlannedlessonMediumCardConstant = ({ plannedlesson, children, label="" }) => {
    return (
        <PlannedlessonCardCapsule plannedlesson={ plannedlesson } label={label} >
            <PlannedlessonCardBody plannedlesson={ plannedlesson }>
                {children}
            </PlannedlessonCardBody>
        </PlannedlessonCardCapsule>        
    )
}
export let PlannedlessonMediumCard = PlannedlessonMediumCardConstant
export const setMediumCard = (newMediumCard) => PlannedlessonMediumCard = newMediumCard