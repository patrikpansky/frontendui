import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { QuestionCardCapsule } from './QuestionCardCapsule';
import { QuestionCardBody } from './QuestionCardBody';

export const QuestionVectorLinksCard = ({ question, children, label="" }) => {
    return (
        <QuestionCardCapsule question={ question } label={label} >
            <ProxyLink to={"/auto/question/answers/" + question.id } >answers</ProxyLink><br />
            <ProxyLink to={"/auto/question/values/" + question.id } >values</ProxyLink><br />
        </QuestionCardCapsule>        
    )
}

