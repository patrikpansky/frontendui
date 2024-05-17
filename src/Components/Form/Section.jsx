import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { Part } from './Part'

export const Section = ({section, children}) => {
    const parts = section?.parts || []
    const ordered = parts.toSorted((a, b) => (a?.order || 0) - (b?.order || 0))
    return (
        <CardCapsule  title={<>{section?.name }</>}>
            {ordered.map(
                (part, index) => <Part key={part?.id} part={part} />
            )}
        </CardCapsule>

    )
}
