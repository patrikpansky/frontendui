import { FormitemCardCapsule } from './FormitemCardCapsule';
import { FormitemCardBody } from './FormitemCardBody';

export const FormitemMediumCardFragment = `
fragment FormitemMediumCardFragment on FormitemGQLModel {
        id
        name
        lastchange
        created
        nameen
        order
        value
    }`

export const FormitemMediumCardConstant = ({ formitem, children, label="" }) => {
    return (
        <FormitemCardCapsule formitem={ formitem } label={label} >
            <FormitemCardBody formitem={ formitem }>
                {children}
            </FormitemCardBody>
        </FormitemCardCapsule>        
    )
}
export let FormitemMediumCard = FormitemMediumCardConstant
export const setMediumCard = (newMediumCard) => FormitemMediumCard = newMediumCard