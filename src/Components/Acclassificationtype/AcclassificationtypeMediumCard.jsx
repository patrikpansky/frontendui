import { AcclassificationtypeCardCapsule } from './AcclassificationtypeCardCapsule';
import { AcclassificationtypeCardBody } from './AcclassificationtypeCardBody';

export const AcclassificationtypeMediumCardFragment = `
fragment AcclassificationtypeMediumCardFragment on AcclassificationtypeGQLModel {
        id
        name
        nameEn
        created
        lastchange
    }`

export const AcclassificationtypeMediumCardConstant = ({ acclassificationtype, children, label="" }) => {
    return (
        <AcclassificationtypeCardCapsule acclassificationtype={ acclassificationtype } label={label} >
            <AcclassificationtypeCardBody acclassificationtype={ acclassificationtype }>
                {children}
            </AcclassificationtypeCardBody>
        </AcclassificationtypeCardCapsule>        
    )
}
export let AcclassificationtypeMediumCard = AcclassificationtypeMediumCardConstant
export const setMediumCard = (newMediumCard) => AcclassificationtypeMediumCard = newMediumCard