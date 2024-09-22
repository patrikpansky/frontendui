import { FormitemcategoryCardCapsule } from './FormitemcategoryCardCapsule';
import { FormitemcategoryCardBody } from './FormitemcategoryCardBody';

export const FormitemcategoryMediumCardFragment = `
fragment FormitemcategoryMediumCardFragment on FormitemcategoryGQLModel {
        id
        name
        lastchange
        created
        nameEn
    }`

export const FormitemcategoryMediumCardConstant = ({ formitemcategory, children, label="" }) => {
    return (
        <FormitemcategoryCardCapsule formitemcategory={ formitemcategory } label={label} >
            <FormitemcategoryCardBody formitemcategory={ formitemcategory }>
                {children}
            </FormitemcategoryCardBody>
        </FormitemcategoryCardCapsule>        
    )
}
export let FormitemcategoryMediumCard = FormitemcategoryMediumCardConstant
export const setMediumCard = (newMediumCard) => FormitemcategoryMediumCard = newMediumCard