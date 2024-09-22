import { SurveyCardCapsule } from './SurveyCardCapsule';
import { SurveyCardBody } from './SurveyCardBody';

export const SurveyMediumCardFragment = `
fragment SurveyMediumCardFragment on SurveyGQLModel {
        id
        name
        lastchange
        created
    }`

export const SurveyMediumCardConstant = ({ survey, children, label="" }) => {
    return (
        <SurveyCardCapsule survey={ survey } label={label} >
            <SurveyCardBody survey={ survey }>
                {children}
            </SurveyCardBody>
        </SurveyCardCapsule>        
    )
}
export let SurveyMediumCard = SurveyMediumCardConstant
export const setMediumCard = (newMediumCard) => SurveyMediumCard = newMediumCard