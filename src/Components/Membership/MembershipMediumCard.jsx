import { MembershipCardCapsule } from './MembershipCardCapsule';
import { MembershipCardBody } from './MembershipCardBody';

export const MembershipMediumCardFragment = `
fragment MembershipMediumCardFragment on MembershipGQLModel {
        id
        created
        lastchange
        valid
        startdate
        enddate
    }`

export const MembershipMediumCardConstant = ({ membership, children, label="" }) => {
    return (
        <MembershipCardCapsule membership={ membership } label={label} >
            <MembershipCardBody membership={ membership }>
                {children}
            </MembershipCardBody>
        </MembershipCardCapsule>        
    )
}
export let MembershipMediumCard = MembershipMediumCardConstant
export const setMediumCard = (newMediumCard) => MembershipMediumCard = newMediumCard