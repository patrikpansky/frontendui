/**
 * A component for displaying the `scalar` attribute of an lessontype entity.
 *
 * This component checks if the `scalar` attribute exists on the `lessontype` object. If `scalar` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it displays a placeholder message
 * and a JSON representation of the `scalar` attribute.
 *
 * @component
 * @param {Object} props - The props for the LessonTypeScalarAttribute component.
 * @param {Object} props.lessontype - The object representing the lessontype entity.
 * @param {*} [props.lessontype.scalar] - The scalar attribute of the lessontype entity to be displayed, if defined.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `scalar` attribute or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const lessontypeEntity = { scalar: { id: 1, name: "Sample Scalar" } };
 *
 * <LessonTypeScalarAttribute lessontype={lessontypeEntity} />
 */
export const LessonTypeScalarAttribute = ({lessontype}) => {
    const {scalar} = lessontype
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