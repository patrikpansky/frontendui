import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { StatemachineLink } from './StatemachineLink';

export const StatemachineCardCapsule = ({ statemachine, label="", title, children }) => {
    const _title = title?title:<StatemachineLink statemachine={ statemachine } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

