import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { Part } from './Part'

export const Section = ({section, children, mode="view"}) => {
    const parts = section?.parts || []
    const ordered = parts.toSorted((a, b) => (a?.order || 0) - (b?.order || 0))
    const body = ordered.map(
        (part, index) => <Part key={part?.id} part={part} mode={mode}/>
    )
    if (section?.name) {
        return (
            <CardCapsule  title={<>{section?.name }</>}>
                {body}
            </CardCapsule>
    
        )
    } else {
        return (
            <>
                {body}
            </>
    
        )
    }
    
}
