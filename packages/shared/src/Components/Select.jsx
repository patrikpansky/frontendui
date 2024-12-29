import { useEffect, useRef } from 'react'
import { SimpleCardCapsule } from "./SimpleCardCapsule"

/**
 * A styled select input component wrapped in a `SimpleCardCapsule` for consistent layout and styling.
 *
 * @param {Object} props - The props for the Select component.
 * @param {string} props.label - The label to display above the select input.
 * @param {React.ReactNode} props.children - The options or other children elements for the select input.
 * @param {Object} props - Additional props passed to the select element.
 *
 * @returns {JSX.Element} A styled select input component.
 */
export const Select = ({label, children, ...props}) => {
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
            <select {...props}>{children} </select>
        </SimpleCardCapsule>
    )
}


