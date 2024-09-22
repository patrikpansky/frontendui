import { GroupconnectionedgeCardCapsule } from './GroupconnectionedgeCardCapsule';
import { GroupconnectionedgeCardBody } from './GroupconnectionedgeCardBody';

export const GroupconnectionedgeMediumCardFragment = `
fragment GroupconnectionedgeMediumCardFragment on GroupconnectionedgeGQLModel {
        cursor
    }`

export const GroupconnectionedgeMediumCardConstant = ({ groupconnectionedge, children, label="" }) => {
    return (
        <GroupconnectionedgeCardCapsule groupconnectionedge={ groupconnectionedge } label={label} >
            <GroupconnectionedgeCardBody groupconnectionedge={ groupconnectionedge }>
                {children}
            </GroupconnectionedgeCardBody>
        </GroupconnectionedgeCardCapsule>        
    )
}
export let GroupconnectionedgeMediumCard = GroupconnectionedgeMediumCardConstant
export const setMediumCard = (newMediumCard) => GroupconnectionedgeMediumCard = newMediumCard