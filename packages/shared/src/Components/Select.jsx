import React from 'react'
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
    const {id, value, defaultValue, onChange, onBlur} = props
    const selectRef = useRef(null);
    // const fired = useRef(false)
    // useEffect(() => {
    //     if (!children) return
    //     console.log("got children")
    //     if (!fired.current) {
    //       let initialValue = value || defaultValue;
    //       // Simulate the onChange event
    //       const e = { target: { id, value: initialValue } };
    //       onChange(e);
    //       fired.current = true;
    //     }
    //   }, [id, value, defaultValue, onChange, children]);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            if (selectRef.current) {
                
                const selectedValue = selectRef.current.value;
                const event = { target: { id: selectRef.current.id, value: selectedValue } };
                console.log("Select firing an event", event)
                onChange(event);
            }
        });

        if (selectRef.current) {
            observer.observe(selectRef.current, {
            childList: true, // Listen for child changes
            });
        }

        return () => observer.disconnect();
    }, [onChange]);

    const changedprops = {...props}
    // const ReactChildren = React.Children(children)
    // if (ReactChildren.lenght > 0) {
    //     const firstChild = ReactChildren[0]
    // }
    // const handleOnChange = (e) => {
    //     onChange(e)
    // }

    // const handleOnBlur = (e) => {
    //     console.log("Select onChange", e)
    //     onBlur(e)
    // }

    return (
        <SimpleCardCapsule title={label}>
            <select ref={selectRef} {...changedprops} >
                {children} 
            </select>
        </SimpleCardCapsule>
    )
}


