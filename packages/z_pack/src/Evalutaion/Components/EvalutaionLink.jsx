import { ProxyLink } from "@hrbolek/uoisfrontend-shared"

export const EvalutaionURI = `/evalutaion/evalutaion/view/`;

/**
 * A React component that renders a `ProxyLink` to an "evalutaion" entity's view page.
 *
 * The target URL is dynamically constructed using the `evalutaion` object's `id`, and the link displays
 * the `evalutaion` object's `name` as its clickable content.
 *
 * @function EvalutaionLink
 * @param {Object} props - The properties for the `EvalutaionLink` component.
 * @param {Object} props.evalutaion - The object representing the "evalutaion" entity.
 * @param {string|number} props.evalutaion.id - The unique identifier for the "evalutaion" entity. Used to construct the target URL.
 * @param {string} props.evalutaion.name - The display name for the "evalutaion" entity. Used as the link text.
 *
 * @returns {JSX.Element} A `ProxyLink` component linking to the specified "evalutaion" entity's view page.
 *
 * @example
 * // Example usage with a sample evalutaion entity:
 * const evalutaionEntity = { id: 123, name: "Example Evalutaion Entity" };
 * 
 * <EvalutaionLink evalutaion={evalutaionEntity} />
 * // Renders: <ProxyLink to="/evalutaion/evalutaion/view/123">Example Evalutaion Entity</ProxyLink>
 *
 * @remarks
 * - This component utilizes `ProxyLink` to ensure consistent link behavior, including parameter preservation and conditional reloads.
 * - The URL format `/evalutaion/evalutaion/view/:id` must be supported by the application routing.
 *
 * @see ProxyLink - The base component used for rendering the link.
 */
export const EvalutaionLink = ({evalutaion, ...props}) => {
    return <ProxyLink to={EvalutaionURI + evalutaion.id} {...props}>{evalutaion.name}</ProxyLink>
}