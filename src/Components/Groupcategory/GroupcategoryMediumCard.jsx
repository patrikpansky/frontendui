import { GroupcategoryCardCapsule } from './GroupcategoryCardCapsule';
import { GroupcategoryCardBody } from './GroupcategoryCardBody';

export const GroupcategoryMediumCardFragment = `
fragment GroupcategoryMediumCardFragment on GroupcategoryGQLModel {
        id
        created
        lastchange
        name
        nameen
    }`

export const GroupcategoryMediumCardConstant = ({ groupcategory, children, label="" }) => {
    return (
        <GroupcategoryCardCapsule groupcategory={ groupcategory } label={label} >
            <GroupcategoryCardBody groupcategory={ groupcategory }>
                {children}
            </GroupcategoryCardBody>
        </GroupcategoryCardCapsule>        
    )
}
export let GroupcategoryMediumCard = GroupcategoryMediumCardConstant
export const setMediumCard = (newMediumCard) => GroupcategoryMediumCard = newMediumCard