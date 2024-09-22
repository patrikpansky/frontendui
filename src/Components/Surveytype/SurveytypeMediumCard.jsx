import { SurveytypeCardCapsule } from './SurveytypeCardCapsule';
import { SurveytypeCardBody } from './SurveytypeCardBody';

export const SurveytypeMediumCardFragment = `
fragment SurveytypeMediumCardFragment on SurveytypeGQLModel {
        id
        name
        lastchange
        created
    }`

export const SurveytypeMediumCardConstant = ({ surveytype, children, label="" }) => {
    return (
        <SurveytypeCardCapsule surveytype={ surveytype } label={label} >
            <SurveytypeCardBody surveytype={ surveytype }>
                {children}
            </SurveytypeCardBody>
        </SurveytypeCardCapsule>        
    )
}
export let SurveytypeMediumCard = SurveytypeMediumCardConstant
export const setMediumCard = (newMediumCard) => SurveytypeMediumCard = newMediumCard