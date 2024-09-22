import { GroupCardCapsule } from './GroupCardCapsule';
import { GroupCardBody } from './GroupCardBody';

export const GroupMediumCardFragment = `
fragment GroupMediumCardFragment on GroupGQLModel {
        id
        created
        lastchange
        name
        nameEn
        email
        abbreviation
        valid
        typeId
    }`

export const GroupMediumCardConstant = ({ group, children, label="" }) => {
    return (
        <GroupCardCapsule group={ group } label={label} >
            <GroupCardBody group={ group }>
                {children}
            </GroupCardBody>
        </GroupCardCapsule>        
    )
}
export let GroupMediumCard = GroupMediumCardConstant
export const setMediumCard = (newMediumCard) => GroupMediumCard = newMediumCard