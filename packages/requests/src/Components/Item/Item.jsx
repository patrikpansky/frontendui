import { CardCapsule, SimpleCardCapsule } from "@hrbolek/uoisfrontend-shared"
import { ItemIndex } from "./Visualisers"

const Default = ({item}) => {
    return (
        <div>
            ITEM: {JSON.stringify(item)}
        </div>
    )
}
export const Item = ({item}) => {
    const itemType = item?.type?.id
    const Visualiser = ItemIndex[itemType] || Default
    return (
        <SimpleCardCapsule title={item.name}>
            <Visualiser value={item.value} item={item}/>
        </SimpleCardCapsule>
    )
}