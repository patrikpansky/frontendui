import { ChildWrapper } from "@hrbolek/uoisfrontend-shared";

/**
 * Z_packChildren Component
 *
 * A utility React component that wraps its children with the `ChildWrapper` component, 
 * passing down an `z_pack` entity along with other props to all child elements.
 * This component is useful for injecting a common `z_pack` entity into multiple children 
 * while preserving their existing functionality.
 *
 * @component
 * @param {Object} props - The props for the Z_packChildren component.
 * @param {any} props.z_pack - An entity (e.g., object, string, or other data) to be passed to the children.
 * @param {React.ReactNode} props.children - The children elements to be wrapped and enhanced.
 * @param {...any} props - Additional props to be passed to each child element.
 *
 * @returns {JSX.Element} A `ChildWrapper` component containing the children with the injected `z_pack` entity.
 *
 * @example
 * // Example usage:
 * const z_packEntity = { id: 1, message: "No data available" };
 *
 * <Z_packChildren z_pack={z_packEntity}>
 *     <CustomMessage />
 *     <CustomIcon />
 * </Z_packChildren>
 *
 * // Result: Both <CustomMessage /> and <CustomIcon /> receive the 'z_pack' prop with the specified entity.
 */
export const Z_packChildren = ({z_pack, children, ...props}) => <ChildWrapper z_pack={z_pack} children={children} {...props} />