import { RoletypeCardCapsule } from './RoletypeCardCapsule';
import { RoletypeCardBody } from './RoletypeCardBody';

export const RoletypeMediumCardFragment = `
fragment RoletypeMediumCardFragment on RoletypeGQLModel {
        id
        created
        lastchange
        name
        nameEn
    }`

export const RoletypeMediumCardConstant = ({ roletype, children, label="" }) => {
    return (
        <RoletypeCardCapsule roletype={ roletype } label={label} >
            <RoletypeCardBody roletype={ roletype }>
                {children}
            </RoletypeCardBody>
        </RoletypeCardCapsule>        
    )
}
export let RoletypeMediumCard = RoletypeMediumCardConstant
export const setMediumCard = (newMediumCard) => RoletypeMediumCard = newMediumCard