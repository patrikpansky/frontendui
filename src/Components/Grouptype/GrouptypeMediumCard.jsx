import { GrouptypeCardCapsule } from './GrouptypeCardCapsule';
import { GrouptypeCardBody } from './GrouptypeCardBody';

export const GrouptypeMediumCardFragment = `
fragment GrouptypeMediumCardFragment on GrouptypeGQLModel {
        id
        created
        lastchange
        name
        nameen
    }`

export const GrouptypeMediumCardConstant = ({ grouptype, children, label="" }) => {
    return (
        <GrouptypeCardCapsule grouptype={ grouptype } label={label} >
            <GrouptypeCardBody grouptype={ grouptype }>
                {children}
            </GrouptypeCardBody>
        </GrouptypeCardCapsule>        
    )
}
export let GrouptypeMediumCard = GrouptypeMediumCardConstant
export const setMediumCard = (newMediumCard) => GrouptypeMediumCard = newMediumCard