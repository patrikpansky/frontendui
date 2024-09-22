import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { FacilityeventstatetypeLink } from './FacilityeventstatetypeLink';

export const FacilityeventstatetypeCardCapsule = ({ facilityeventstatetype, label="", title, children }) => {
    const _title = title?title:<FacilityeventstatetypeLink facilityeventstatetype={ facilityeventstatetype } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

