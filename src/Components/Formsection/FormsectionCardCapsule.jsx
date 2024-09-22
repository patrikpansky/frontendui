import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { FormsectionLink } from './FormsectionLink';

export const FormsectionCardCapsule = ({ formsection, label="", title, children }) => {
    const _title = title?title:<FormsectionLink formsection={ formsection } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

