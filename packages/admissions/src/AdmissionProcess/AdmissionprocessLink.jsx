import { ProxyLink } from "@hrbolek/uoisfrontend-shared"

export const AdmissionprocessURI = '/admissionprocess/admissionprocess/view/';

/**
 * A React component that renders a `ProxyLink` to an "admissionprocess" entity's view page.
 *
 * The target URL is dynamically constructed using the `admissionprocess` object's `id`, and the link displays
 * the `admissionprocess` object's `name` as its clickable content.
 *
 * @function AdmissionprocessLink
 * @param {Object} props - The properties for the `AdmissionprocessLink` component.
 * @param {Object} props.admissionprocess - The object representing the "admissionprocess" entity.
 * @param {string|number} props.admissionprocess.id - The unique identifier for the "admissionprocess" entity. Used to construct the target URL.
 * @param {string} props.admissionprocess.name - The display name for the "admissionprocess" entity. Used as the link text.
 *
 * @returns {JSX.Element} A `ProxyLink` component linking to the specified "admissionprocess" entity's view page.
 *
 * @example
 * // Example usage with a sample admissionprocess entity:
 * const admissionprocessEntity = { id: 123, name: "Example Admissionprocess Entity" };
 * 
 * <AdmissionprocessLink admissionprocess={admissionprocessEntity} />
 * // Renders: <ProxyLink to="/admissionprocess/admissionprocess/view/123">Example Admissionprocess Entity</ProxyLink>
 *
 * @remarks
 * - This component utilizes `ProxyLink` to ensure consistent link behavior, including parameter preservation and conditional reloads.
 * - The URL format `/admissionprocess/admissionprocess/view/:id` must be supported by the application routing.
 *
 * @see ProxyLink - The base component used for rendering the link.
 */
export const AdmissionprocessLink = ({admissionprocess}) => {
    return <ProxyLink to={AdmissionprocessURI + admissionprocess.id}>{admissionprocess.name}</ProxyLink>
}