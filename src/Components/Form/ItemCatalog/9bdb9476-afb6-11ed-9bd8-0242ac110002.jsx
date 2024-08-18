import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

export const Doporuceni = ({item, mode="view"}) => {
    if (mode === "view") {
        return (
            <CardCapsule title={item.name}>
                <textarea className="form-control" rows="4" readonly>{item?.value}</textarea>
            </CardCapsule>
            
        )
    } else {
        return (
            <CardCapsule title={item.name}>
                <textarea className="form-control" rows="4" >{item?.value}</textarea>
            </CardCapsule>
        )
    }
    
}