import { ChildWrapper } from "@hrbolek/uoisfrontend-shared";

/**
 * EvalutaionChildren Component
 *
 * A utility React component that wraps its children with the `ChildWrapper` component, 
 * passing down an `evalutaion` entity along with other props to all child elements.
 * This component is useful for injecting a common `evalutaion` entity into multiple children 
 * while preserving their existing functionality.
 *
 * @component
 * @param {Object} props - The props for the EvalutaionChildren component.
 * @param {any} props.evalutaion - An entity (e.g., object, string, or other data) to be passed to the children.
 * @param {React.ReactNode} props.children - The children elements to be wrapped and enhanced.
 * @param {...any} props - Additional props to be passed to each child element.
 *
 * @returns {JSX.Element} A `ChildWrapper` component containing the children with the injected `evalutaion` entity.
 *
 * @example
 * // Example usage:
 * const evalutaionEntity = { id: 1, message: "No data available" };
 *
 * <EvalutaionChildren evalutaion={evalutaionEntity}>
 *     <CustomMessage />
 *     <CustomIcon />
 * </EvalutaionChildren>
 *
 * // Result: Both <CustomMessage /> and <CustomIcon /> receive the 'evalutaion' prop with the specified entity.
 */
export const EvalutaionChildren = ({evalutaion, children, ...props}) => <ChildWrapper evalutaion={evalutaion} children={children} {...props} />