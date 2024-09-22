import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { ExternalidtypeLink } from './ExternalidtypeLink';

export const ExternalidtypeCardCapsule = ({ externalidtype, label="", title, children }) => {
    const _title = title?title:<ExternalidtypeLink externalidtype={ externalidtype } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

