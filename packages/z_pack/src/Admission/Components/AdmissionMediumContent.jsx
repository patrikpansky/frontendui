/**
 * A component that displays medium-level content for an admission entity.
 *
 * This component renders a label "AdmissionMediumContent" followed by a serialized representation of the `admission` object
 * and any additional child content. It is designed to handle and display information about an admission entity object.
 *
 * @component
 * @param {Object} props - The properties for the AdmissionMediumContent component.
 * @param {Object} props.admission - The object representing the admission entity.
 * @param {string|number} props.admission.id - The unique identifier for the admission entity.
 * @param {string} props.admission.name - The name or label of the admission entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render after the serialized `admission` object.
 *
 * @returns {JSX.Element} A JSX element displaying the entity's details and optional content.
 *
 * @example
 * // Example usage:
 * const admissionEntity = { id: 123, name: "Sample Entity" };
 * 
 * <AdmissionMediumContent admission={admissionEntity}>
 *   <p>Additional information about the entity.</p>
 * </AdmissionMediumContent>
 */
export const AdmissionMediumContent = ({admission, children}) => {
    const labels = {
        id: "ID",
        name: "Název",
        paymentInfoId: "ID platby",
        programId: "ID programu",
        studentEntryDate: "Datum vstupu studenta",
        examStartDate: "První termín zkoušky",
        examLastDate: "Poslední zkoušky",
        paymentDate: "Datum do kdy lze zaplatit poplatek",
        requestConditionExtendDate: "Datum žádosti o prodloužení podmínek",
        requestExtraConditionsDate: "Datum žádosti o dodatečné podmínky",
        lastchange: "Poslední změna"
    };

    const order = [
        "name",
        "paymentInfoId",
        "programId",
        "studentEntryDate",
        "examStartDate",
        "examLastDate",
        "paymentDate",
        "requestConditionExtendDate",
        "requestExtraConditionsDate",
        "id",
        "lastchange"
    ];

    const orderedKeys = order.filter(key => admission[key] !== undefined)
        .concat(Object.keys(admission).filter(
            key => !order.includes(key) && key !== 'nameEn' && key !== '__typename'
        ));

    return (
        <table style={{ borderCollapse: 'collapse', margin: '8px 0' }}>
            <tbody>
                {orderedKeys.map(key => (
                    <tr key={key}>
                        <td style={{ border: '1px solid #ccc', padding: '4px 8px', fontWeight: 'bold', textAlign: 'right', whiteSpace: 'nowrap' }}>
                            {labels[key] || key}
                        </td>
                        <td style={{ border: '1px solid #ccc', padding: '4px 8px' }}>
                            {typeof admission[key] === 'string' && admission[key].match(/^\d{4}-\d{2}-\d{2}T/)
                                ? new Date(admission[key]).toLocaleString('cs-CZ')
                                : admission[key]?.toString()}
                        </td>
                    </tr>
                ))}
            </tbody>
            {children}
        </table>
    )
}
