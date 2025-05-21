import { useEffect, useRef } from 'react'
import { Label } from './Label'

export const Input = ({label,  ariaHidden=false , ...props}) => {
    const {id, value, defaultValue, onChange=(e)=>null} = props
    const fired = useRef(false)
    useEffect(() => {
        if (!fired.current) {
            const e = {target:{id, value: (value || defaultValue)}}
            onChange(e)
            // console.log("Input.onChange", e)
            fired.current = true
        }
    })

    if (ariaHidden)
        return null

    if (!label)
        return (
            <input {...props} />
        )

    return (
        <Label title={label}>
            <input {...props} />
        </Label>
    )
}