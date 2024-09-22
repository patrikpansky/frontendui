import { FormCardCapsule } from './FormCardCapsule';
import { FormCardBody } from './FormCardBody';

export const FormMediumCardFragment = `
fragment FormMediumCardFragment on FormGQLModel {
        id
        name
        lastchange
        created
        nameen
        valid
        status
    }`

export const FormMediumCardConstant = ({ form, children, label="" }) => {
    return (
        <FormCardCapsule form={ form } label={label} >
            <FormCardBody form={ form }>
                {children}
            </FormCardBody>
        </FormCardCapsule>        
    )
}
export let FormMediumCard = FormMediumCardConstant
export const setMediumCard = (newMediumCard) => FormMediumCard = newMediumCard