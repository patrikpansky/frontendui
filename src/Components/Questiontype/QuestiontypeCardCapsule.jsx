import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { QuestiontypeLink } from './QuestiontypeLink';

export const QuestiontypeCardCapsule = ({ questiontype, label="", title, children }) => {
    const _title = title?title:<QuestiontypeLink questiontype={ questiontype } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

