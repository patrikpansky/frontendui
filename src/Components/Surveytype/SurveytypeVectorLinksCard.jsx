import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { SurveytypeCardCapsule } from './SurveytypeCardCapsule';
import { SurveytypeCardBody } from './SurveytypeCardBody';

export const SurveytypeVectorLinksCard = ({ surveytype, children, label="" }) => {
    return (
        <SurveytypeCardCapsule surveytype={ surveytype } label={label} >
        </SurveytypeCardCapsule>        
    )
}

