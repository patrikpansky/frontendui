import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { QuestionvalueLink } from './QuestionvalueLink';

export const QuestionvalueCardCapsule = ({ questionvalue, label="", title, children }) => {
    const _title = title?title:<QuestionvalueLink questionvalue={ questionvalue } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

