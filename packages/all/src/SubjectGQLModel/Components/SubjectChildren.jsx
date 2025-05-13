import { ChildWrapper } from "@hrbolek/uoisfrontend-shared";

/**
 * SubjectChildren Component
 *
 * A utility React component that wraps its children with the `ChildWrapper` component, 
 * passing down an `subject` entity along with other props to all child elements.
 * This component is useful for injecting a common `subject` entity into multiple children 
 * while preserving their existing functionality.
 *
 * @component
 * @param {Object} props - The props for the SubjectChildren component.
 * @param {any} props.subject - An entity (e.g., object, string, or other data) to be passed to the children.
 * @param {React.ReactNode} props.children - The children elements to be wrapped and enhanced.
 * @param {...any} props - Additional props to be passed to each child element.
 *
 * @returns {JSX.Element} A `ChildWrapper` component containing the children with the injected `subject` entity.
 *
 * @example
 * // Example usage:
 * const subjectEntity = { id: 1, message: "No data available" };
 *
 * <SubjectChildren subject={subjectEntity}>
 *     <CustomMessage />
 *     <CustomIcon />
 * </SubjectChildren>
 *
 * // Result: Both <CustomMessage /> and <CustomIcon /> receive the 'subject' prop with the specified entity.
 */
export const SubjectChildren = ({subject, children, ...props}) => <ChildWrapper subject={subject} children={children} {...props} />