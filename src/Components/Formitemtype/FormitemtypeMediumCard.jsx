import { FormitemtypeCardCapsule } from './FormitemtypeCardCapsule';
import { FormitemtypeCardBody } from './FormitemtypeCardBody';

export const FormitemtypeMediumCardFragment = `
fragment FormitemtypeMediumCardFragment on FormitemtypeGQLModel {
        id
        name
        lastchange
        created
        nameen
    }`

export const FormitemtypeMediumCardConstant = ({ formitemtype, children, label="" }) => {
    return (
        <FormitemtypeCardCapsule formitemtype={ formitemtype } label={label} >
            <FormitemtypeCardBody formitemtype={ formitemtype }>
                {children}
            </FormitemtypeCardBody>
        </FormitemtypeCardCapsule>        
    )
}
export let FormitemtypeMediumCard = FormitemtypeMediumCardConstant
export const setMediumCard = (newMediumCard) => FormitemtypeMediumCard = newMediumCard