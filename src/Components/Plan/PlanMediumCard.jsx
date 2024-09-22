import { PlanCardCapsule } from './PlanCardCapsule';
import { PlanCardBody } from './PlanCardBody';

export const PlanMediumCardFragment = `
fragment PlanMediumCardFragment on PlanGQLModel {
        id
        name
        lastchange
        created
    }`

export const PlanMediumCardConstant = ({ plan, children, label="" }) => {
    return (
        <PlanCardCapsule plan={ plan } label={label} >
            <PlanCardBody plan={ plan }>
                {children}
            </PlanCardBody>
        </PlanCardCapsule>        
    )
}
export let PlanMediumCard = PlanMediumCardConstant
export const setMediumCard = (newMediumCard) => PlanMediumCard = newMediumCard