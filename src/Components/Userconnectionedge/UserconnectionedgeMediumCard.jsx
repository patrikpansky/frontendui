import { UserconnectionedgeCardCapsule } from './UserconnectionedgeCardCapsule';
import { UserconnectionedgeCardBody } from './UserconnectionedgeCardBody';

export const UserconnectionedgeMediumCardFragment = `
fragment UserconnectionedgeMediumCardFragment on UserconnectionedgeGQLModel {
        cursor
    }`

export const UserconnectionedgeMediumCardConstant = ({ userconnectionedge, children, label="" }) => {
    return (
        <UserconnectionedgeCardCapsule userconnectionedge={ userconnectionedge } label={label} >
            <UserconnectionedgeCardBody userconnectionedge={ userconnectionedge }>
                {children}
            </UserconnectionedgeCardBody>
        </UserconnectionedgeCardCapsule>        
    )
}
export let UserconnectionedgeMediumCard = UserconnectionedgeMediumCardConstant
export const setMediumCard = (newMediumCard) => UserconnectionedgeMediumCard = newMediumCard