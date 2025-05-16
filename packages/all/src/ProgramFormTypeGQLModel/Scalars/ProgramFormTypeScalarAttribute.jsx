/**
 * A component for displaying the `scalar` attribute of an programformtype entity.
 *
 * This component checks if the `scalar` attribute exists on the `programformtype` object. If `scalar` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it displays a placeholder message
 * and a JSON representation of the `scalar` attribute.
 *
 * @component
 * @param {Object} props - The props for the ProgramFormTypeScalarAttribute component.
 * @param {Object} props.programformtype - The object representing the programformtype entity.
 * @param {*} [props.programformtype.scalar] - The scalar attribute of the programformtype entity to be displayed, if defined.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `scalar` attribute or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const programformtypeEntity = { scalar: { id: 1, name: "Sample Scalar" } };
 *
 * <ProgramFormTypeScalarAttribute programformtype={programformtypeEntity} />
 */
export const ProgramFormTypeScalarAttribute = ({programformtype}) => {
    const {scalar} = programformtype
    if (typeof scalar === 'undefined') return null
    return (
        <>
            {/* <ScalarMediumCard scalar={scalar} /> */}
            {/* <ScalarLink scalar={scalar} /> */}
            Probably {'<ScalarMediumCard scalar=\{scalar\} />'} <br />
            <pre>{JSON.stringify(scalar, null, 4)}</pre>
        </>
    )
}