import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { Item } from './Item'

export const Part = ({part, children}) => {
    const items = part?.items || []
    const ordered = items.toSorted((a, b) => (a?.order || 0) - (b?.order || 0))
    return (
        <CardCapsule  title={<>{part?.name }</>}>
            {ordered.map(
                (item, index) => <Item key={item?.id} item={item} />
            )}
        </CardCapsule>

    )
}
