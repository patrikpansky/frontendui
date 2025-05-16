/**
 * A component for displaying the `scalar` attribute of an programtype entity.
 *
 * This component checks if the `scalar` attribute exists on the `programtype` object. If `scalar` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it displays a placeholder message
 * and a JSON representation of the `scalar` attribute.
 *
 * @component
 * @param {Object} props - The props for the ProgramTypeScalarAttribute component.
 * @param {Object} props.programtype - The object representing the programtype entity.
 * @param {*} [props.programtype.scalar] - The scalar attribute of the programtype entity to be displayed, if defined.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `scalar` attribute or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const programtypeEntity = { scalar: { id: 1, name: "Sample Scalar" } };
 *
 * <ProgramTypeScalarAttribute programtype={programtypeEntity} />
 */
export const ProgramTypeScalarAttribute = ({programtype}) => {
    const {scalar} = programtype
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