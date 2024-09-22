import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { QuestionLink } from './QuestionLink';

export const QuestionCardCapsule = ({ question, label="", title, children }) => {
    const _title = title?title:<QuestionLink question={ question } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

