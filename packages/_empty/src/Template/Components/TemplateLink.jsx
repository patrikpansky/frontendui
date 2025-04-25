import { ProxyLink } from "@hrbolek/uoisfrontend-shared"

export const TemplateURI = `/template/template/view/`;

/**
 * A React component that renders a `ProxyLink` to an "template" entity's view page.
 *
 * The target URL is dynamically constructed using the `template` object's `id`, and the link displays
 * the `template` object's `name` as its clickable content.
 *
 * @function TemplateLink
 * @param {Object} props - The properties for the `TemplateLink` component.
 * @param {Object} props.template - The object representing the "template" entity.
 * @param {string|number} props.template.id - The unique identifier for the "template" entity. Used to construct the target URL.
 * @param {string} props.template.name - The display name for the "template" entity. Used as the link text.
 *
 * @returns {JSX.Element} A `ProxyLink` component linking to the specified "template" entity's view page.
 *
 * @example
 * // Example usage with a sample template entity:
 * const templateEntity = { id: 123, name: "Example Template Entity" };
 * 
 * <TemplateLink template={templateEntity} />
 * // Renders: <ProxyLink to="/template/template/view/123">Example Template Entity</ProxyLink>
 *
 * @remarks
 * - This component utilizes `ProxyLink` to ensure consistent link behavior, including parameter preservation and conditional reloads.
 * - The URL format `/template/template/view/:id` must be supported by the application routing.
 *
 * @see ProxyLink - The base component used for rendering the link.
 */
export const TemplateLink = ({template, ...props}) => {
    return <ProxyLink to={TemplateURI + template.id} {...props}>{template.name}</ProxyLink>
}