import { UserCardCapsule } from './UserCardCapsule';
import { UserCardBody } from './UserCardBody';

export const UserMediumCardFragment = `
fragment UserMediumCardFragment on UserGQLModel {
        id
        created
        lastchange
        name
        firstname
        surname
        fullname
        email
        valid
        isThisMe
        gdpr
    }`

export const UserMediumCardConstant = ({ user, children, label="" }) => {
    return (
        <UserCardCapsule user={ user } label={label} >
            <UserCardBody user={ user }>
                {children}
            </UserCardBody>
        </UserCardCapsule>        
    )
}
export let UserMediumCard = UserMediumCardConstant
export const setMediumCard = (newMediumCard) => UserMediumCard = newMediumCard