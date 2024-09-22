import { MilestoneCardCapsule } from './MilestoneCardCapsule';
import { MilestoneCardBody } from './MilestoneCardBody';

export const MilestoneMediumCardFragment = `
fragment MilestoneMediumCardFragment on MilestoneGQLModel {
        id
        name
        startdate
        enddate
        lastchange
        created
        valid
    }`

export const MilestoneMediumCardConstant = ({ milestone, children, label="" }) => {
    return (
        <MilestoneCardCapsule milestone={ milestone } label={label} >
            <MilestoneCardBody milestone={ milestone }>
                {children}
            </MilestoneCardBody>
        </MilestoneCardCapsule>        
    )
}
export let MilestoneMediumCard = MilestoneMediumCardConstant
export const setMediumCard = (newMediumCard) => MilestoneMediumCard = newMediumCard