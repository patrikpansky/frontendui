import { useRef, useEffect } from 'react'
import { SimpleCardCapsule } from "./SimpleCardCapsule";

export const TextArea = ({label, placeHolder, ariaHidden=false, autoHeight=true, onChange=(e)=>null, onBlur=(e)=>null, ...props}) => {
    const textareaRef = useRef(null);

    const adjustHeight = () => {
        if (!autoHeight) return
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto"; // Reset height to recalculate
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight+10}px`;
        }
    };

    useEffect(() => {
        adjustHeight(); // Adjust height on initial render
    }, []);

    const handleChange = (e) => {
        adjustHeight()
        onChange(e)
    }

    if (ariaHidden) 
        return (
            <textarea {...props} ref={textareaRef} aria-hidden={true} onChange={handleChange}/>
        )
    return (
        <SimpleCardCapsule title={label}>
            {placeHolder && <p>
                {placeHolder}
            </p>}
            <textarea {...props} ref={textareaRef} onChange={handleChange}/>
        </SimpleCardCapsule>
    )
}