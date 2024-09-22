import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { AclessonCardCapsule } from './AclessonCardCapsule';
import { AclessonCardBody } from './AclessonCardBody';

export const AclessonVectorLinksCard = ({ aclesson, children, label="" }) => {
    return (
        <AclessonCardCapsule aclesson={ aclesson } label={label} >
        </AclessonCardCapsule>        
    )
}

