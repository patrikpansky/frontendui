import { AnswerCardCapsule } from './AnswerCardCapsule';
import { AnswerCardBody } from './AnswerCardBody';

export const AnswerMediumCardFragment = `
fragment AnswerMediumCardFragment on AnswerGQLModel {
        id
        lastchange
        created
        value
        aswered
        expired
    }`

export const AnswerMediumCardConstant = ({ answer, children, label="" }) => {
    return (
        <AnswerCardCapsule answer={ answer } label={label} >
            <AnswerCardBody answer={ answer }>
                {children}
            </AnswerCardBody>
        </AnswerCardCapsule>        
    )
}
export let AnswerMediumCard = AnswerMediumCardConstant
export const setMediumCard = (newMediumCard) => AnswerMediumCard = newMediumCard