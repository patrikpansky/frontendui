import { QuestiontypeCardCapsule } from './QuestiontypeCardCapsule';
import { QuestiontypeCardBody } from './QuestiontypeCardBody';

export const QuestiontypeMediumCardFragment = `
fragment QuestiontypeMediumCardFragment on QuestiontypeGQLModel {
        id
        name
        lastchange
        created
    }`

export const QuestiontypeMediumCardConstant = ({ questiontype, children, label="" }) => {
    return (
        <QuestiontypeCardCapsule questiontype={ questiontype } label={label} >
            <QuestiontypeCardBody questiontype={ questiontype }>
                {children}
            </QuestiontypeCardBody>
        </QuestiontypeCardCapsule>        
    )
}
export let QuestiontypeMediumCard = QuestiontypeMediumCardConstant
export const setMediumCard = (newMediumCard) => QuestiontypeMediumCard = newMediumCard