import { PublicationCardCapsule } from './PublicationCardCapsule';
import { PublicationCardBody } from './PublicationCardBody';

export const PublicationMediumCardFragment = `
fragment PublicationMediumCardFragment on PublicationGQLModel {
        id
        name
        created
        lastchange
        publisheddate
        place
        reference
        valid
    }`

export const PublicationMediumCardConstant = ({ publication, children, label="" }) => {
    return (
        <PublicationCardCapsule publication={ publication } label={label} >
            <PublicationCardBody publication={ publication }>
                {children}
            </PublicationCardBody>
        </PublicationCardCapsule>        
    )
}
export let PublicationMediumCard = PublicationMediumCardConstant
export const setMediumCard = (newMediumCard) => PublicationMediumCard = newMediumCard