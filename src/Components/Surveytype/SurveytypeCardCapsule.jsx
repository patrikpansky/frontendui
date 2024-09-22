import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { SurveytypeLink } from './SurveytypeLink';

export const SurveytypeCardCapsule = ({ surveytype, label="", title, children }) => {
    const _title = title?title:<SurveytypeLink surveytype={ surveytype } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

