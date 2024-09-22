import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { StatementofworkLink } from './StatementofworkLink';

export const StatementofworkCardCapsule = ({ statementofwork, label="", title, children }) => {
    const _title = title?title:<StatementofworkLink statementofwork={ statementofwork } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

