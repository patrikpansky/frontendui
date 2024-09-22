import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { AnswerLink } from './AnswerLink';

export const AnswerCardCapsule = ({ answer, label="", title, children }) => {
    const _title = title?title:<AnswerLink answer={ answer } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

