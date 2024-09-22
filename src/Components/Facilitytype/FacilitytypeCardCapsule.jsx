import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { FacilitytypeLink } from './FacilitytypeLink';

export const FacilitytypeCardCapsule = ({ facilitytype, label="", title, children }) => {
    const _title = title?title:<FacilitytypeLink facilitytype={ facilitytype } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

