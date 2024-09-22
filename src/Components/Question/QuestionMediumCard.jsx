import { QuestionCardCapsule } from './QuestionCardCapsule';
import { QuestionCardBody } from './QuestionCardBody';

export const QuestionMediumCardFragment = `
fragment QuestionMediumCardFragment on QuestionGQLModel {
        id
        name
        lastchange
        created
        order
    }`

export const QuestionMediumCardConstant = ({ question, children, label="" }) => {
    return (
        <QuestionCardCapsule question={ question } label={label} >
            <QuestionCardBody question={ question }>
                {children}
            </QuestionCardBody>
        </QuestionCardCapsule>        
    )
}
export let QuestionMediumCard = QuestionMediumCardConstant
export const setMediumCard = (newMediumCard) => QuestionMediumCard = newMediumCard