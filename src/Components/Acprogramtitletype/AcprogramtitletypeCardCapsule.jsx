import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { AcprogramtitletypeLink } from './AcprogramtitletypeLink';

export const AcprogramtitletypeCardCapsule = ({ acprogramtitletype, label="", title, children }) => {
    const _title = title?title:<AcprogramtitletypeLink acprogramtitletype={ acprogramtitletype } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

