/**
 * A component for displaying the `paymentinfo` attribute of an admission entity.
 *
 * This component checks if the `paymentinfo` attribute exists on the `admission` object. If `paymentinfo` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it displays a placeholder message
 * and a JSON representation of the `paymentinfo` attribute.
 *
 * @component
 * @param {Object} props - The props for the AdmissionPaymentinfoAttribute component.
 * @param {Object} props.admission - The object representing the admission entity.
 * @param {*} [props.admission.paymentinfo] - The paymentinfo attribute of the admission entity to be displayed, if defined.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `paymentinfo` attribute or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const admissionEntity = { paymentinfo: { id: 1, name: "Sample Paymentinfo" } };
 *
 * <AdmissionPaymentinfoAttribute admission={admissionEntity} />
 */
export const AdmissionPaymentinfoAttribute = ({admission}) => {
    const {paymentinfo} = admission
    if (typeof paymentinfo === 'undefined') return null
    return (
        <>
            {/* <PaymentinfoMediumCard paymentinfo={paymentinfo} /> */}
            {/* <PaymentinfoLink paymentinfo={paymentinfo} /> */}
            Probably {'<PaymentinfoMediumCard paymentinfo=\{paymentinfo\} />'} <br />
            <pre>{JSON.stringify(paymentinfo, null, 4)}</pre>
        </>
    )
}