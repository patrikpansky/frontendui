/**
 * A component for displaying the `scalar` attribute of an evalutaion entity.
 *
 * This component checks if the `scalar` attribute exists on the `evalutaion` object. If `scalar` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it displays a placeholder message
 * and a JSON representation of the `scalar` attribute.
 *
 * @component
 * @param {Object} props - The props for the EvalutaionScalarAttribute component.
 * @param {Object} props.evalutaion - The object representing the evalutaion entity.
 * @param {*} [props.evalutaion.scalar] - The scalar attribute of the evalutaion entity to be displayed, if defined.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `scalar` attribute or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const evalutaionEntity = { scalar: { id: 1, name: "Sample Scalar" } };
 *
 * <EvalutaionScalarAttribute evalutaion={evalutaionEntity} />
 */
export const EvalutaionScalarAttribute = ({evalutaion}) => {
    const {scalar} = evalutaion
    if (typeof scalar === 'undefined') return null
    return (
        <>
            Probably {'<ScalarMediumCard scalar=\{scalar\} />'} <br />
            {JSON.stringify(scalar)}
        </>
    )
}