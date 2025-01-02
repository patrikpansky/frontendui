import { ProxyLink } from "@hrbolek/uoisfrontend-shared"

/**
 * A component that renders a `ProxyLink` to an empty view page.
 * 
 * The target URL is dynamically constructed using the `empty` object's `id`, 
 * and the link displays the `empty` object's `name` as its content.
 * 
 * @component
 * @param {Object} props - The properties for the EmptyLink component.
 * @param {Object} props.empty - The object representing the empty entity.
 * @param {string|number} props.empty.id - The unique identifier for the empty entity.
 * @param {string} props.empty.name - The display name for the empty entity.
 * 
 * @returns {JSX.Element} A `ProxyLink` component linking to the empty view page.
 * 
 * @example
 * // Example usage:
 * const emptyEntity = { id: 123, name: "Example Empty Entity" };
 * 
 * <EmptyLink empty={emptyEntity} />
 */
export const EmptyLink = ({empty}) => {
    return <ProxyLink to={'/empty/empty/view/' + empty.id}>{empty.name}</ProxyLink>
}