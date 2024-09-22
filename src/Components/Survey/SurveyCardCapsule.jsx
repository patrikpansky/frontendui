import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { SurveyLink } from './SurveyLink';

export const SurveyCardCapsule = ({ survey, label="", title, children }) => {
    const _title = title?title:<SurveyLink survey={ survey } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

