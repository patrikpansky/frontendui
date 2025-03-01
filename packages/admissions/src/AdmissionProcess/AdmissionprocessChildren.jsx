import { ChildWrapper } from "@hrbolek/uoisfrontend-shared";

/**
 * AdmissionprocessChildren Component
 *
 * A utility React component that wraps its children with the `ChildWrapper` component, 
 * passing down an `admissionprocess` entity along with other props to all child elements.
 * This component is useful for injecting a common `admissionprocess` entity into multiple children 
 * while preserving their existing functionality.
 *
 * @component
 * @param {Object} props - The props for the AdmissionprocessChildren component.
 * @param {any} props.admissionprocess - An entity (e.g., object, string, or other data) to be passed to the children.
 * @param {React.ReactNode} props.children - The children elements to be wrapped and enhanced.
 * @param {...any} props - Additional props to be passed to each child element.
 *
 * @returns {JSX.Element} A `ChildWrapper` component containing the children with the injected `admissionprocess` entity.
 *
 * @example
 * // Example usage:
 * const admissionprocessEntity = { id: 1, message: "No data available" };
 *
 * <AdmissionprocessChildren admissionprocess={admissionprocessEntity}>
 *     <CustomMessage />
 *     <CustomIcon />
 * </AdmissionprocessChildren>
 *
 * // Result: Both <CustomMessage /> and <CustomIcon /> receive the 'admissionprocess' prop with the specified entity.
 */
export const AdmissionprocessChildren = ({admissionprocess, children, ...props}) => <ChildWrapper admissionprocess={admissionprocess} children={children} {...props} />