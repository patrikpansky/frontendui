/**
 * A component for displaying the `createdby` attribute of an admission entity.
 *
 * This component checks if the `createdby` attribute exists on the `admission` object. If `createdby` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it displays a placeholder message
 * and a JSON representation of the `createdby` attribute.
 *
 * @component
 * @param {Object} props - The props for the AdmissionCreatedbyAttribute component.
 * @param {Object} props.admission - The object representing the admission entity.
 * @param {*} [props.admission.createdby] - The createdby attribute of the admission entity to be displayed, if defined.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `createdby` attribute or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const admissionEntity = { createdby: { id: 1, name: "Sample Createdby" } };
 *
 * <AdmissionCreatedbyAttribute admission={admissionEntity} />
 */
export const AdmissionCreatedbyAttribute = ({admission}) => {
    const {createdby} = admission
    if (typeof createdby === 'undefined') return null
    return (
        <>
            {/* <CreatedbyMediumCard createdby={createdby} /> */}
            {/* <CreatedbyLink createdby={createdby} /> */}
            Probably {'<CreatedbyMediumCard createdby=\{createdby\} />'} <br />
            <pre>{JSON.stringify(createdby, null, 4)}</pre>
        </>
    )
}