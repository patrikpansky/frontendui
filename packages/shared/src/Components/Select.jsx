import React from 'react'
import { useEffect, useRef } from 'react'
import { Label } from './Label'

/**
 * A React component that renders a styled `<select>` dropdown with dynamic options and enhanced change detection.
 *
 * This component integrates with the `Options` component to fetch and display dynamic `<option>` elements.
 * It uses a `MutationObserver` to detect changes in the `<select>` element's children and triggers the `onChange`
 * event accordingly. The dropdown is wrapped in a `SimpleCardCapsule` for a consistent UI layout.
 *
 * @function Select
 * @param {Object} props - The properties for the Select component.
 * @param {string} [props.label] - The label displayed as the title of the `SimpleCardCapsule`.
 * @param {React.ReactNode} props.children - The `<option>` elements or an `Options` component to render dynamic options.
 * @param {string} [props.id] - The unique identifier for the `<select>` element.
 * @param {string|number} [props.value] - The current value of the `<select>` element, used for controlled components.
 * @param {string|number} [props.defaultValue] - The default value of the `<select>` element, used for uncontrolled components.
 * @param {Function} [props.onChange] - A callback function triggered when the `<select>` value changes. Receives an event object.
 * @param {Function} [props.onBlur] - A callback function triggered when the `<select>` loses focus. Receives an event object.
 * @param {Object} props.rest - Any additional props passed to the `<select>` element.
 *
 * @returns {JSX.Element} A styled dropdown wrapped in a `SimpleCardCapsule` with dynamic options and change detection.
 *
 * @example
 * // Example usage with Options:
 * const MyComponent = () => {
 *   const fetchOptions = (params) => async (dispatch) => {
 *     const response = await fetch('/api/data', {
 *       method: 'POST',
 *       body: JSON.stringify(params),
 *     });
 *     const json = await response.json();
 *     return json;
 *   };
 *
 *   const [selectedValue, setSelectedValue] = useState("");
 *   const [fetchTrigger, setFetchTrigger] = useState(0);
 *
 *   const handleChange = (e) => {
 *     setSelectedValue(e.target.value);
 *   };
 *
 *   const refreshOptions = () => setFetchTrigger((prev) => prev + 1);
 *
 *   return (
 *     <div>
 *       <button onClick={refreshOptions}>Refresh Options</button>
 *       <Select
 *         label="Dynamic Select"
 *         id="dynamic-select"
 *         value={selectedValue}
 *         onChange={handleChange}
 *       >
 *         <Options asyncAction={fetchOptions} params={{ someParam: "value" }} shouldFetch={fetchTrigger} />
 *       </Select>
 *     </div>
 *   );
 * };
 */
export const Select = ({ label, children, onChange, onBlur, defaultValue, ariaHidden, ...props }) => {
    const selectRef = useRef(null);

    useEffect(() => {
        if (!selectRef.current || typeof onChange !== "function" || defaultValue === undefined) return;

        const observer = new MutationObserver(() => {
            const selectedValue = selectRef.current.value;
            if (selectedValue !== defaultValue) {
                const event = { target: { id: selectRef.current.id, value: selectedValue } };
                console.log("Select firing an event", defaultValue, selectedValue, event);
                onChange(event);
            }
        });

        observer.observe(selectRef.current, {
            childList: true,
            subtree: true,
        });

        return () => observer.disconnect();
    }, [onChange, defaultValue]);

    if (ariaHidden) return null;

    const selectElement = (
        <select
            ref={selectRef}
            defaultValue={defaultValue}
            onChange={onChange}
            onBlur={onBlur}
            {...props}
        >
            {children}
        </select>
    );

    return label ? <Label title={label}>{selectElement}</Label> : selectElement;
};


