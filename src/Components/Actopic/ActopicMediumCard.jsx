import { ActopicCardCapsule } from './ActopicCardCapsule';
import { ActopicCardBody } from './ActopicCardBody';

export const ActopicMediumCardFragment = `
fragment ActopicMediumCardFragment on ActopicGQLModel {
        id
        name
        nameen
        created
        lastchange
        order
    }`

export const ActopicMediumCardConstant = ({ actopic, children, label="" }) => {
    return (
        <ActopicCardCapsule actopic={ actopic } label={label} >
            <ActopicCardBody actopic={ actopic }>
                {children}
            </ActopicCardBody>
        </ActopicCardCapsule>        
    )
}
export let ActopicMediumCard = ActopicMediumCardConstant
export const setMediumCard = (newMediumCard) => ActopicMediumCard = newMediumCard