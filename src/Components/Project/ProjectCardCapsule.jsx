import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { ProjectLink } from './ProjectLink';

export const ProjectCardCapsule = ({ project, label="", title, children }) => {
    const _title = title?title:<ProjectLink project={ project } />
    return (
        <CardCapsule  title={<>{label} {_title}</>}>
            {children}
        </CardCapsule>
    )
}

