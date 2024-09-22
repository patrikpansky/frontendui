import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { QuestiontypeCardCapsule } from './QuestiontypeCardCapsule';
import { QuestiontypeCardBody } from './QuestiontypeCardBody';

export const QuestiontypeVectorLinksCard = ({ questiontype, children, label="" }) => {
    return (
        <QuestiontypeCardCapsule questiontype={ questiontype } label={label} >
        </QuestiontypeCardCapsule>        
    )
}

