import { FormsectionCardCapsule } from './FormsectionCardCapsule';
import { FormsectionCardBody } from './FormsectionCardBody';

export const FormsectionMediumCardFragment = `
fragment FormsectionMediumCardFragment on FormsectionGQLModel {
        id
        name
        lastchange
        created
        nameEn
        order
    }`

export const FormsectionMediumCardConstant = ({ formsection, children, label="" }) => {
    return (
        <FormsectionCardCapsule formsection={ formsection } label={label} >
            <FormsectionCardBody formsection={ formsection }>
                {children}
            </FormsectionCardBody>
        </FormsectionCardCapsule>        
    )
}
export let FormsectionMediumCard = FormsectionMediumCardConstant
export const setMediumCard = (newMediumCard) => FormsectionMediumCard = newMediumCard