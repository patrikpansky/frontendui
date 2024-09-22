import { ExternalidcategoryCardCapsule } from './ExternalidcategoryCardCapsule';
import { ExternalidcategoryCardBody } from './ExternalidcategoryCardBody';

export const ExternalidcategoryMediumCardFragment = `
fragment ExternalidcategoryMediumCardFragment on ExternalidcategoryGQLModel {
        id
        name
        nameen
        lastchange
        created
    }`

export const ExternalidcategoryMediumCardConstant = ({ externalidcategory, children, label="" }) => {
    return (
        <ExternalidcategoryCardCapsule externalidcategory={ externalidcategory } label={label} >
            <ExternalidcategoryCardBody externalidcategory={ externalidcategory }>
                {children}
            </ExternalidcategoryCardBody>
        </ExternalidcategoryCardCapsule>        
    )
}
export let ExternalidcategoryMediumCard = ExternalidcategoryMediumCardConstant
export const setMediumCard = (newMediumCard) => ExternalidcategoryMediumCard = newMediumCard