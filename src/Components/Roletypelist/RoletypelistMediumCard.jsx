import { RoletypelistCardCapsule } from './RoletypelistCardCapsule';
import { RoletypelistCardBody } from './RoletypelistCardBody';

export const RoletypelistMediumCardFragment = `
fragment RoletypelistMediumCardFragment on RoletypelistGQLModel {
        id
        created
        lastchange
    }`

export const RoletypelistMediumCardConstant = ({ roletypelist, children, label="" }) => {
    return (
        <RoletypelistCardCapsule roletypelist={ roletypelist } label={label} >
            <RoletypelistCardBody roletypelist={ roletypelist }>
                {children}
            </RoletypelistCardBody>
        </RoletypelistCardCapsule>        
    )
}
export let RoletypelistMediumCard = RoletypelistMediumCardConstant
export const setMediumCard = (newMediumCard) => RoletypelistMediumCard = newMediumCard