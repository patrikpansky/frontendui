import { RolecategoryCardCapsule } from './RolecategoryCardCapsule';
import { RolecategoryCardBody } from './RolecategoryCardBody';

export const RolecategoryMediumCardFragment = `
fragment RolecategoryMediumCardFragment on RolecategoryGQLModel {
        id
        created
        lastchange
        name
        nameen
    }`

export const RolecategoryMediumCardConstant = ({ rolecategory, children, label="" }) => {
    return (
        <RolecategoryCardCapsule rolecategory={ rolecategory } label={label} >
            <RolecategoryCardBody rolecategory={ rolecategory }>
                {children}
            </RolecategoryCardBody>
        </RolecategoryCardCapsule>        
    )
}
export let RolecategoryMediumCard = RolecategoryMediumCardConstant
export const setMediumCard = (newMediumCard) => RolecategoryMediumCard = newMediumCard