import { useEffect, useRef } from 'react'
import { SimpleCardCapsule } from "./SimpleCardCapsule"

export const Input = ({label, ...props}) => {
    const {id, value, defaultValue, onChange} = props
    const fired = useRef(false)
    useEffect(() => {
        if (!fired.current) {
            const e = {target:{id, value: (value || defaultValue)}}
            onChange(e)
            fired.current = true
        }
    })

    return (
        <SimpleCardCapsule title={label}>
            <input {...props} />
        </SimpleCardCapsule>
    )
}