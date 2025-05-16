/**
 * A component for displaying the `scalar` attribute of an role entity.
 *
 * This component checks if the `scalar` attribute exists on the `role` object. If `scalar` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it displays a placeholder message
 * and a JSON representation of the `scalar` attribute.
 *
 * @component
 * @param {Object} props - The props for the RoleScalarAttribute component.
 * @param {Object} props.role - The object representing the role entity.
 * @param {*} [props.role.scalar] - The scalar attribute of the role entity to be displayed, if defined.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `scalar` attribute or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const roleEntity = { scalar: { id: 1, name: "Sample Scalar" } };
 *
 * <RoleScalarAttribute role={roleEntity} />
 */
export const RoleScalarAttribute = ({role}) => {
    const {scalar} = role
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