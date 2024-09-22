import { AclessonCardCapsule } from './AclessonCardCapsule';
import { AclessonCardBody } from './AclessonCardBody';

export const AclessonMediumCardFragment = `
fragment AclessonMediumCardFragment on AclessonGQLModel {
        id
        name
        nameen
        created
        lastchange
        count
    }`

export const AclessonMediumCardConstant = ({ aclesson, children, label="" }) => {
    return (
        <AclessonCardCapsule aclesson={ aclesson } label={label} >
            <AclessonCardBody aclesson={ aclesson }>
                {children}
            </AclessonCardBody>
        </AclessonCardCapsule>        
    )
}
export let AclessonMediumCard = AclessonMediumCardConstant
export const setMediumCard = (newMediumCard) => AclessonMediumCard = newMediumCard