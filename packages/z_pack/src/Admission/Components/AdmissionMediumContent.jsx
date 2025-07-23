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
        id: "ID přijímacího řízení",
        name: "Název",
        programId: "ID programu",
        studentEntryDate: "Den zapsání studenta",
        examStartDate: "První zkouška",
        examLastDate: "Poslední zkouška",
        paymentDate: "Datum do kdy lze zaplatit poplatek",
        requestConditionExtendDate: "Datum žádosti o prodloužení podmínek",
        requestExtraConditionsDate: "Datum žádosti o dodatečné podmínky",
        lastchange: "Poslední změna"
    };

    // Základní informace
    const basicFields = ["name", "programId"];
    
    // Datumy zkoušek a vstupů
    const examFields = ["examStartDate", "examLastDate", "studentEntryDate"];
    
    // Platby a žádosti
    const paymentFields = ["paymentDate", "requestConditionExtendDate", "requestExtraConditionsDate"];
    
    // Systémová pole
    const systemFields = ["id", "lastchange"];

    const renderFieldGroup = (fields, title) => {
        const existingFields = fields.filter(key => admission[key] !== undefined);
        if (existingFields.length === 0) return null;

        return (
            <div style={{ marginBottom: '16px' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                    {title}
                </h4>
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <tbody>
                        {existingFields.map(key => (
                            <tr key={key}>
                                <td style={{ 
                                    border: '1px solid #ccc', 
                                    padding: '4px 8px', 
                                    fontWeight: 'bold', 
                                    textAlign: 'right', 
                                    whiteSpace: 'nowrap',
                                    backgroundColor: '#f5f5f5',
                                    width: '40%'
                                }}>
                                    {labels[key] || key}
                                </td>
                                <td style={{ border: '1px solid #ccc', padding: '4px 8px' }}>
                                    {typeof admission[key] === 'string' && admission[key].match(/^\d{4}-\d{2}-\d{2}T/)
                                        ? new Date(admission[key]).toLocaleDateString('cs-CZ')
                                        : admission[key]?.toString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    // Ostatní pole, která nejsou v definovaných skupinách
    const otherFields = Object.keys(admission).filter(
        key => ![...basicFields, ...examFields, ...paymentFields, ...systemFields].includes(key) 
               && key !== 'nameEn' && key !== '__typename'
    );

    return (
        <div style={{ margin: '8px 0' }}>
            {renderFieldGroup(basicFields, "Základní informace")}
            {renderFieldGroup(examFields, "Termíny a datumy")}
            {renderFieldGroup(paymentFields, "Platby a žádosti")}
            {renderFieldGroup(systemFields, "Systémové informace")}
            {otherFields.length > 0 && renderFieldGroup(otherFields, "Další informace")}
            {children}
        </div>
    )
}
