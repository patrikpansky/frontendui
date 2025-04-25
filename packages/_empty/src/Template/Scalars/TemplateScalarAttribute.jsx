/**
 * A component for displaying the `scalar` attribute of an template entity.
 *
 * This component checks if the `scalar` attribute exists on the `template` object. If `scalar` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it displays a placeholder message
 * and a JSON representation of the `scalar` attribute.
 *
 * @component
 * @param {Object} props - The props for the TemplateScalarAttribute component.
 * @param {Object} props.template - The object representing the template entity.
 * @param {*} [props.template.scalar] - The scalar attribute of the template entity to be displayed, if defined.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `scalar` attribute or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const templateEntity = { scalar: { id: 1, name: "Sample Scalar" } };
 *
 * <TemplateScalarAttribute template={templateEntity} />
 */
export const TemplateScalarAttribute = ({template}) => {
    const {scalar} = template
    if (typeof scalar === 'undefined') return null
    return (
        <>
            Probably {'<ScalarMediumCard scalar=\{scalar\} />'} <br />
            {JSON.stringify(scalar)}
        </>
    )
}