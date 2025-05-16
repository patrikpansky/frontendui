import { ChildWrapper } from "@hrbolek/uoisfrontend-shared";

/**
 * LessonChildren Component
 *
 * A utility React component that wraps its children with the `ChildWrapper` component, 
 * passing down an `lesson` entity along with other props to all child elements.
 * This component is useful for injecting a common `lesson` entity into multiple children 
 * while preserving their existing functionality.
 *
 * @component
 * @param {Object} props - The props for the LessonChildren component.
 * @param {any} props.lesson - An entity (e.g., object, string, or other data) to be passed to the children.
 * @param {React.ReactNode} props.children - The children elements to be wrapped and enhanced.
 * @param {...any} props - Additional props to be passed to each child element.
 *
 * @returns {JSX.Element} A `ChildWrapper` component containing the children with the injected `lesson` entity.
 *
 * @example
 * // Example usage:
 * const lessonEntity = { id: 1, message: "No data available" };
 *
 * <LessonChildren lesson={lessonEntity}>
 *     <CustomMessage />
 *     <CustomIcon />
 * </LessonChildren>
 *
 * // Result: Both <CustomMessage /> and <CustomIcon /> receive the 'lesson' prop with the specified entity.
 */
export const LessonChildren = ({lesson, children, ...props}) => <ChildWrapper lesson={lesson} children={children} {...props} />