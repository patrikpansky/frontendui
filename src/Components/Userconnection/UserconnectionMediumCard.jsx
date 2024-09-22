import { UserconnectionCardCapsule } from './UserconnectionCardCapsule';
import { UserconnectionCardBody } from './UserconnectionCardBody';

export const UserconnectionMediumCardFragment = `
fragment UserconnectionMediumCardFragment on UserconnectionGQLModel {
    }`

export const UserconnectionMediumCardConstant = ({ userconnection, children, label="" }) => {
    return (
        <UserconnectionCardCapsule userconnection={ userconnection } label={label} >
            <UserconnectionCardBody userconnection={ userconnection }>
                {children}
            </UserconnectionCardBody>
        </UserconnectionCardCapsule>        
    )
}
export let UserconnectionMediumCard = UserconnectionMediumCardConstant
export const setMediumCard = (newMediumCard) => UserconnectionMediumCard = newMediumCard