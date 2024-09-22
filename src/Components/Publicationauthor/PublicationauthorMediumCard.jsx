import { PublicationauthorCardCapsule } from './PublicationauthorCardCapsule';
import { PublicationauthorCardBody } from './PublicationauthorCardBody';

export const PublicationauthorMediumCardFragment = `
fragment PublicationauthorMediumCardFragment on PublicationauthorGQLModel {
        id
        name
        lastchange
        order
        share
        valid
    }`

export const PublicationauthorMediumCardConstant = ({ publicationauthor, children, label="" }) => {
    return (
        <PublicationauthorCardCapsule publicationauthor={ publicationauthor } label={label} >
            <PublicationauthorCardBody publicationauthor={ publicationauthor }>
                {children}
            </PublicationauthorCardBody>
        </PublicationauthorCardCapsule>        
    )
}
export let PublicationauthorMediumCard = PublicationauthorMediumCardConstant
export const setMediumCard = (newMediumCard) => PublicationauthorMediumCard = newMediumCard