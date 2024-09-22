import { PresencetypeCardCapsule } from './PresencetypeCardCapsule';
import { PresencetypeCardBody } from './PresencetypeCardBody';

export const PresencetypeMediumCardFragment = `
fragment PresencetypeMediumCardFragment on PresencetypeGQLModel {
        id
        name
        nameEn
        lastchange
        created
    }`

export const PresencetypeMediumCardConstant = ({ presencetype, children, label="" }) => {
    return (
        <PresencetypeCardCapsule presencetype={ presencetype } label={label} >
            <PresencetypeCardBody presencetype={ presencetype }>
                {children}
            </PresencetypeCardBody>
        </PresencetypeCardCapsule>        
    )
}
export let PresencetypeMediumCard = PresencetypeMediumCardConstant
export const setMediumCard = (newMediumCard) => PresencetypeMediumCard = newMediumCard