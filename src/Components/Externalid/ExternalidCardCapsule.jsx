import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { ExternalidLink } from './ExternalidLink';

export const ExternalidCardCapsule = ({ externalid, label="", title, children }) => {
    const _title = title?title:<ExternalidLink externalid={ externalid } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

