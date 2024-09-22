import { QuestionvalueCardCapsule } from './QuestionvalueCardCapsule';
import { QuestionvalueCardBody } from './QuestionvalueCardBody';

export const QuestionvalueMediumCardFragment = `
fragment QuestionvalueMediumCardFragment on QuestionvalueGQLModel {
        id
        name
        lastchange
        created
        order
    }`

export const QuestionvalueMediumCardConstant = ({ questionvalue, children, label="" }) => {
    return (
        <QuestionvalueCardCapsule questionvalue={ questionvalue } label={label} >
            <QuestionvalueCardBody questionvalue={ questionvalue }>
                {children}
            </QuestionvalueCardBody>
        </QuestionvalueCardCapsule>        
    )
}
export let QuestionvalueMediumCard = QuestionvalueMediumCardConstant
export const setMediumCard = (newMediumCard) => QuestionvalueMediumCard = newMediumCard