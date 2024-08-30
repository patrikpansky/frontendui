import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

export const Doporuceni = ({item, mode="view"}) => {
    const onChange = (e) => {
        const newValue = e.target.value
    }
    if (mode === "view") {
        return (
            <CardCapsule title={item.name}>
                <textarea className="form-control" rows="4" readOnly value={item?.value} />
            </CardCapsule>
            
        )
    } else {
        return (
            <CardCapsule title={item.name}>
                <textarea className="form-control" rows="4" defaultValue={item?.value} onChange={onChange} />
            </CardCapsule>
        )
    }
    
}