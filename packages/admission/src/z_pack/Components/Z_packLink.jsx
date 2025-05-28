import { ProxyLink } from "@hrbolek/uoisfrontend-shared"

export const Z_packURI = `/z_pack/z_pack/view/`;

/**
 * A React component that renders a `ProxyLink` to an "z_pack" entity's view page.
 *
 * The target URL is dynamically constructed using the `z_pack` object's `id`, and the link displays
 * the `z_pack` object's `name` as its clickable content.
 *
 * @function Z_packLink
 * @param {Object} props - The properties for the `Z_packLink` component.
 * @param {Object} props.z_pack - The object representing the "z_pack" entity.
 * @param {string|number} props.z_pack.id - The unique identifier for the "z_pack" entity. Used to construct the target URL.
 * @param {string} props.z_pack.name - The display name for the "z_pack" entity. Used as the link text.
 *
 * @returns {JSX.Element} A `ProxyLink` component linking to the specified "z_pack" entity's view page.
 *
 * @example
 * // Example usage with a sample z_pack entity:
 * const z_packEntity = { id: 123, name: "Example Z_pack Entity" };
 * 
 * <Z_packLink z_pack={z_packEntity} />
 * // Renders: <ProxyLink to="/z_pack/z_pack/view/123">Example Z_pack Entity</ProxyLink>
 *
 * @remarks
 * - This component utilizes `ProxyLink` to ensure consistent link behavior, including parameter preservation and conditional reloads.
 * - The URL format `/z_pack/z_pack/view/:id` must be supported by the application routing.
 *
 * @see ProxyLink - The base component used for rendering the link.
 */
export const Z_packLink = ({z_pack, ...props}) => {
    return <ProxyLink to={Z_packURI + z_pack.id} {...props}>{z_pack.name}</ProxyLink>
}