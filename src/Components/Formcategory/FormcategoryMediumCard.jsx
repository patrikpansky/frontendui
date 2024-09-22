import { FormcategoryCardCapsule } from './FormcategoryCardCapsule';
import { FormcategoryCardBody } from './FormcategoryCardBody';

export const FormcategoryMediumCardFragment = `
fragment FormcategoryMediumCardFragment on FormcategoryGQLModel {
        id
        name
        lastchange
        created
        nameen
    }`

export const FormcategoryMediumCardConstant = ({ formcategory, children, label="" }) => {
    return (
        <FormcategoryCardCapsule formcategory={ formcategory } label={label} >
            <FormcategoryCardBody formcategory={ formcategory }>
                {children}
            </FormcategoryCardBody>
        </FormcategoryCardCapsule>        
    )
}
export let FormcategoryMediumCard = FormcategoryMediumCardConstant
export const setMediumCard = (newMediumCard) => FormcategoryMediumCard = newMediumCard