import { ProxyLink } from "@hrbolek/uoisfrontend-shared"

export const ProgramURI = '/program/program/editable/';
export const ProgramReadOnlyURI = '/program/program/readonly/';

/**
 * A React component that renders a `ProxyLink` to program's page.
 *
 * @component
 * @param {Object} props - The properties for the ProgramLink component
 * @param {Object} props.program - The object representing the program entity
 * @param {string|number} props.program.id - The unique identifier for the program entity
 * @param {string} props.program.name - The name or label of the program entity
 *
 * @returns {JSX.Element} A `ProxyLink` component linking to the program page
 */
export const ProgramLink = ({program}) => {
    return <ProxyLink to={ProgramURI + program.id}>{program.name}</ProxyLink>
}