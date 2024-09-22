import { PresenceCardCapsule } from './PresenceCardCapsule';
import { PresenceCardBody } from './PresenceCardBody';

export const PresenceMediumCardFragment = `
fragment PresenceMediumCardFragment on PresenceGQLModel {
        id
        lastchange
        created
    }`

export const PresenceMediumCardConstant = ({ presence, children, label="" }) => {
    return (
        <PresenceCardCapsule presence={ presence } label={label} >
            <PresenceCardBody presence={ presence }>
                {children}
            </PresenceCardBody>
        </PresenceCardCapsule>        
    )
}
export let PresenceMediumCard = PresenceMediumCardConstant
export const setMediumCard = (newMediumCard) => PresenceMediumCard = newMediumCard