import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { SurveyCardCapsule } from './SurveyCardCapsule';
import { SurveyCardBody } from './SurveyCardBody';

export const SurveyVectorLinksCard = ({ survey, children, label="" }) => {
    return (
        <SurveyCardCapsule survey={ survey } label={label} >
            <ProxyLink to={"/auto/survey/questions/" + survey.id } >questions</ProxyLink><br />
        </SurveyCardCapsule>        
    )
}

