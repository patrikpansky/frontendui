import { StatetransitionCardCapsule } from './StatetransitionCardCapsule';
import { StatetransitionCardBody } from './StatetransitionCardBody';

export const StatetransitionMediumCardFragment = `
fragment StatetransitionMediumCardFragment on StatetransitionGQLModel {
        id
        created
        lastchange
        name
        nameEn
    }`

export const StatetransitionMediumCardConstant = ({ statetransition, children, label="" }) => {
    return (
        <StatetransitionCardCapsule statetransition={ statetransition } label={label} >
            <StatetransitionCardBody statetransition={ statetransition }>
                {children}
            </StatetransitionCardBody>
        </StatetransitionCardCapsule>        
    )
}
export let StatetransitionMediumCard = StatetransitionMediumCardConstant
export const setMediumCard = (newMediumCard) => StatetransitionMediumCard = newMediumCard