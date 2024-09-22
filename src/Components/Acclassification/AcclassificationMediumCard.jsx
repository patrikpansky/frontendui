import { AcclassificationCardCapsule } from './AcclassificationCardCapsule';
import { AcclassificationCardBody } from './AcclassificationCardBody';

export const AcclassificationMediumCardFragment = `
fragment AcclassificationMediumCardFragment on AcclassificationGQLModel {
        id
        created
        lastchange
        date
        order
    }`

export const AcclassificationMediumCardConstant = ({ acclassification, children, label="" }) => {
    return (
        <AcclassificationCardCapsule acclassification={ acclassification } label={label} >
            <AcclassificationCardBody acclassification={ acclassification }>
                {children}
            </AcclassificationCardBody>
        </AcclassificationCardCapsule>        
    )
}
export let AcclassificationMediumCard = AcclassificationMediumCardConstant
export const setMediumCard = (newMediumCard) => AcclassificationMediumCard = newMediumCard