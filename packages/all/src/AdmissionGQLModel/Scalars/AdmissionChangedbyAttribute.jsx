/**
 * A component for displaying the `changedby` attribute of an admission entity.
 *
 * This component checks if the `changedby` attribute exists on the `admission` object. If `changedby` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it displays a placeholder message
 * and a JSON representation of the `changedby` attribute.
 *
 * @component
 * @param {Object} props - The props for the AdmissionChangedbyAttribute component.
 * @param {Object} props.admission - The object representing the admission entity.
 * @param {*} [props.admission.changedby] - The changedby attribute of the admission entity to be displayed, if defined.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `changedby` attribute or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const admissionEntity = { changedby: { id: 1, name: "Sample Changedby" } };
 *
 * <AdmissionChangedbyAttribute admission={admissionEntity} />
 */
export const AdmissionChangedbyAttribute = ({admission}) => {
    const {changedby} = admission
    if (typeof changedby === 'undefined') return null
    return (
        <>
            {/* <ChangedbyMediumCard changedby={changedby} /> */}
            {/* <ChangedbyLink changedby={changedby} /> */}
            Probably {'<ChangedbyMediumCard changedby=\{changedby\} />'} <br />
            <pre>{JSON.stringify(changedby, null, 4)}</pre>
        </>
    )
}