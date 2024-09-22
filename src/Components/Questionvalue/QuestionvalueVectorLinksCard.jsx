import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { QuestionvalueCardCapsule } from './QuestionvalueCardCapsule';
import { QuestionvalueCardBody } from './QuestionvalueCardBody';

export const QuestionvalueVectorLinksCard = ({ questionvalue, children, label="" }) => {
    return (
        <QuestionvalueCardCapsule questionvalue={ questionvalue } label={label} >
        </QuestionvalueCardCapsule>        
    )
}

