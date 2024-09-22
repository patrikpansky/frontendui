import { RbacobjectCardCapsule } from './RbacobjectCardCapsule';
import { RbacobjectCardBody } from './RbacobjectCardBody';

export const RbacobjectMediumCardFragment = `
fragment RbacobjectMediumCardFragment on RbacobjectGQLModel {
        id
    }`

export const RbacobjectMediumCardConstant = ({ rbacobject, children, label="" }) => {
    return (
        <RbacobjectCardCapsule rbacobject={ rbacobject } label={label} >
            <RbacobjectCardBody rbacobject={ rbacobject }>
                {children}
            </RbacobjectCardBody>
        </RbacobjectCardCapsule>        
    )
}
export let RbacobjectMediumCard = RbacobjectMediumCardConstant
export const setMediumCard = (newMediumCard) => RbacobjectMediumCard = newMediumCard