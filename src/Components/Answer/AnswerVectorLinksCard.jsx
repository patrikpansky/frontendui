import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { AnswerCardCapsule } from './AnswerCardCapsule';
import { AnswerCardBody } from './AnswerCardBody';

export const AnswerVectorLinksCard = ({ answer, children, label="" }) => {
    return (
        <AnswerCardCapsule answer={ answer } label={label} >
        </AnswerCardCapsule>        
    )
}

