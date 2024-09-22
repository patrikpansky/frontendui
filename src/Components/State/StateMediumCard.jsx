import { StateCardCapsule } from './StateCardCapsule';
import { StateCardBody } from './StateCardBody';

export const StateMediumCardFragment = `
fragment StateMediumCardFragment on StateGQLModel {
        id
        created
        lastchange
        name
        nameEn
        order
    }`

export const StateMediumCardConstant = ({ state, children, label="" }) => {
    return (
        <StateCardCapsule state={ state } label={label} >
            <StateCardBody state={ state }>
                {children}
            </StateCardBody>
        </StateCardCapsule>        
    )
}
export let StateMediumCard = StateMediumCardConstant
export const setMediumCard = (newMediumCard) => StateMediumCard = newMediumCard