import { StatemachineCardCapsule } from './StatemachineCardCapsule';
import { StatemachineCardBody } from './StatemachineCardBody';

export const StatemachineMediumCardFragment = `
fragment StatemachineMediumCardFragment on StatemachineGQLModel {
        id
        created
        lastchange
        name
        nameen
    }`

export const StatemachineMediumCardConstant = ({ statemachine, children, label="" }) => {
    return (
        <StatemachineCardCapsule statemachine={ statemachine } label={label} >
            <StatemachineCardBody statemachine={ statemachine }>
                {children}
            </StatemachineCardBody>
        </StatemachineCardCapsule>        
    )
}
export let StatemachineMediumCard = StatemachineMediumCardConstant
export const setMediumCard = (newMediumCard) => StatemachineMediumCard = newMediumCard