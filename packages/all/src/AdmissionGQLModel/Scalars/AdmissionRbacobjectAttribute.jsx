/**
 * A component for displaying the `rbacobject` attribute of an admission entity.
 *
 * This component checks if the `rbacobject` attribute exists on the `admission` object. If `rbacobject` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it displays a placeholder message
 * and a JSON representation of the `rbacobject` attribute.
 *
 * @component
 * @param {Object} props - The props for the AdmissionRbacobjectAttribute component.
 * @param {Object} props.admission - The object representing the admission entity.
 * @param {*} [props.admission.rbacobject] - The rbacobject attribute of the admission entity to be displayed, if defined.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `rbacobject` attribute or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const admissionEntity = { rbacobject: { id: 1, name: "Sample Rbacobject" } };
 *
 * <AdmissionRbacobjectAttribute admission={admissionEntity} />
 */
export const AdmissionRbacobjectAttribute = ({admission}) => {
    const {rbacobject} = admission
    if (typeof rbacobject === 'undefined') return null
    return (
        <>
            {/* <RbacobjectMediumCard rbacobject={rbacobject} /> */}
            {/* <RbacobjectLink rbacobject={rbacobject} /> */}
            Probably {'<RbacobjectMediumCard rbacobject=\{rbacobject\} />'} <br />
            <pre>{JSON.stringify(rbacobject, null, 4)}</pre>
        </>
    )
}