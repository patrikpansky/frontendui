import { RoleCardCapsule } from './RoleCardCapsule';
import { RoleCardBody } from './RoleCardBody';

export const RoleMediumCardFragment = `
fragment RoleMediumCardFragment on RoleGQLModel {
        id
        created
        lastchange
        valid
        startdate
        enddate
    }`

export const RoleMediumCardConstant = ({ role, children, label="" }) => {
    return (
        <RoleCardCapsule role={ role } label={label} >
            <RoleCardBody role={ role }>
                {children}
            </RoleCardBody>
        </RoleCardCapsule>        
    )
}
export let RoleMediumCard = RoleMediumCardConstant
export const setMediumCard = (newMediumCard) => RoleMediumCard = newMediumCard