import { FormtypeCardCapsule } from './FormtypeCardCapsule';
import { FormtypeCardBody } from './FormtypeCardBody';

export const FormtypeMediumCardFragment = `
fragment FormtypeMediumCardFragment on FormtypeGQLModel {
        id
        name
        lastchange
        created
        nameEn
    }`

export const FormtypeMediumCardConstant = ({ formtype, children, label="" }) => {
    return (
        <FormtypeCardCapsule formtype={ formtype } label={label} >
            <FormtypeCardBody formtype={ formtype }>
                {children}
            </FormtypeCardBody>
        </FormtypeCardCapsule>        
    )
}
export let FormtypeMediumCard = FormtypeMediumCardConstant
export const setMediumCard = (newMediumCard) => FormtypeMediumCard = newMediumCard