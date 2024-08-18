import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { Item } from './Item'

export const Part = ({part, children, mode="view"}) => {
    const items = part?.items || []
    const ordered = items.toSorted((a, b) => (a?.order || 0) - (b?.order || 0))
    const body = ordered.map(
        (item, index) => <Item key={item?.id} item={item} mode={mode}/>
    )
    if (part?.name !== "") {
        return (
            <CardCapsule  title={<>{part?.name }</>}>
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
