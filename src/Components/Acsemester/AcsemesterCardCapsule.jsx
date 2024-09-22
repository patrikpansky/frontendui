import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { AcsemesterLink } from './AcsemesterLink';

export const AcsemesterCardCapsule = ({ acsemester, label="", title, children }) => {
    const _title = title?title:<AcsemesterLink acsemester={ acsemester } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

