import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { FacilityLink } from './FacilityLink';

export const FacilityCardCapsule = ({ facility, label="", title, children }) => {
    const _title = title?title:<FacilityLink facility={ facility } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

