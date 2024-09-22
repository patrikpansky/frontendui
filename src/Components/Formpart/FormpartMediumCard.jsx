import { FormpartCardCapsule } from './FormpartCardCapsule';
import { FormpartCardBody } from './FormpartCardBody';

export const FormpartMediumCardFragment = `
fragment FormpartMediumCardFragment on FormpartGQLModel {
        id
        name
        lastchange
        created
        nameen
        order
    }`

export const FormpartMediumCardConstant = ({ formpart, children, label="" }) => {
    return (
        <FormpartCardCapsule formpart={ formpart } label={label} >
            <FormpartCardBody formpart={ formpart }>
                {children}
            </FormpartCardBody>
        </FormpartCardCapsule>        
    )
}
export let FormpartMediumCard = FormpartMediumCardConstant
export const setMediumCard = (newMediumCard) => FormpartMediumCard = newMediumCard