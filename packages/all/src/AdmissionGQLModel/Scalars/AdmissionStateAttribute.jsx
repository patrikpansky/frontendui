/**
 * A component for displaying the `state` attribute of an admission entity.
 *
 * This component checks if the `state` attribute exists on the `admission` object. If `state` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it displays a placeholder message
 * and a JSON representation of the `state` attribute.
 *
 * @component
 * @param {Object} props - The props for the AdmissionStateAttribute component.
 * @param {Object} props.admission - The object representing the admission entity.
 * @param {*} [props.admission.state] - The state attribute of the admission entity to be displayed, if defined.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `state` attribute or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const admissionEntity = { state: { id: 1, name: "Sample State" } };
 *
 * <AdmissionStateAttribute admission={admissionEntity} />
 */
export const AdmissionStateAttribute = ({admission}) => {
    const {state} = admission
    if (typeof state === 'undefined') return null
    return (
        <>
            {/* <StateMediumCard state={state} /> */}
            {/* <StateLink state={state} /> */}
            Probably {'<StateMediumCard state=\{state\} />'} <br />
            <pre>{JSON.stringify(state, null, 4)}</pre>
        </>
    )
}