import { GroupconnectionCardCapsule } from './GroupconnectionCardCapsule';
import { GroupconnectionCardBody } from './GroupconnectionCardBody';

export const GroupconnectionMediumCardFragment = `
fragment GroupconnectionMediumCardFragment on GroupconnectionGQLModel {
    }`

export const GroupconnectionMediumCardConstant = ({ groupconnection, children, label="" }) => {
    return (
        <GroupconnectionCardCapsule groupconnection={ groupconnection } label={label} >
            <GroupconnectionCardBody groupconnection={ groupconnection }>
                {children}
            </GroupconnectionCardBody>
        </GroupconnectionCardCapsule>        
    )
}
export let GroupconnectionMediumCard = GroupconnectionMediumCardConstant
export const setMediumCard = (newMediumCard) => GroupconnectionMediumCard = newMediumCard