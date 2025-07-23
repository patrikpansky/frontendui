/**
 * A component that displays medium-level content for a student entity.
 *
 * This component renders student information in an organized table format with grouped fields.
 * It is designed to handle and display information about a student entity object.
 *
 * @component
 * @param {Object} props - The properties for the StudentMediumContent component.
 * @param {Object} props.student - The object representing the student entity.
 * @param {string|number} props.student.id - The unique identifier for the student entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render after the serialized `student` object.
 *
 * @returns {JSX.Element} A JSX element displaying the entity's details and optional content.
 *
 * @example
 * // Example usage:
 * const studentEntity = { id: 123, name: "John Doe" };
 * 
 * <StudentMediumContent student={studentEntity}>
 *   <p>Additional information about the student.</p>
 * </StudentMediumContent>
 */
export const StudentMediumContent = ({student, children}) => {
    const labels = {
        id: "ID studenta",
        userId: "ID uživatele",
        programId: "ID programu",
        stateId: "ID stavu",
        semester: "Semestr",
        lastchange: "Poslední změna",
        created: "Vytvořeno",
        createdbyId: "Vytvořil",
        changedbyId: "Změnil"
    };

    // Základní informace
    const basicFields = ["userId", "programId", "stateId", "semester"];
    
    // Systémová pole
    const systemFields = ["id", "lastchange", "created", "createdbyId", "changedbyId"];

    const renderFieldGroup = (fields, title) => {
        const existingFields = fields.filter(key => student[key] !== undefined);
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
                                    {typeof student[key] === 'string' && student[key].match(/^\d{4}-\d{2}-\d{2}T/)
                                        ? new Date(student[key]).toLocaleString('cs-CZ', { 
                                            year: 'numeric', 
                                            month: 'numeric', 
                                            day: 'numeric', 
                                            hour: '2-digit', 
                                            minute: '2-digit' 
                                          })
                                        : student[key]?.toString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    // User information if available
    const renderUserInfo = () => {
        if (!student.student) return null;

        const userLabels = {
            id: "ID uživatele",
            name: "Jméno",
            givenname: "Křestní jméno",
            surname: "Příjmení",
            email: "Email",
            fullname: "Celé jméno",
            valid: "Platný"
        };

        const userFields = Object.keys(student.student).filter(key => 
            key !== '__typename' && student.student[key] !== undefined
        );

        if (userFields.length === 0) return null;

        return (
            <div style={{ marginBottom: '16px' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                    Informace o uživateli
                </h4>
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <tbody>
                        {userFields.map(key => (
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
                                    {userLabels[key] || key}
                                </td>
                                <td style={{ border: '1px solid #ccc', padding: '4px 8px' }}>
                                    {typeof student.student[key] === 'boolean' 
                                        ? student.student[key] ? 'Ano' : 'Ne'
                                        : student.student[key]?.toString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    // Ostatní pole, která nejsou v definovaných skupinách
    const otherFields = Object.keys(student).filter(
        key => ![...basicFields, ...systemFields].includes(key) 
               && key !== '__typename' && key !== 'student'
    );

    return (
        <div style={{ margin: '8px 0' }}>
            {renderFieldGroup(basicFields, "Základní informace")}
            {renderUserInfo()}
            {renderFieldGroup(systemFields, "Systémové informace")}
            {otherFields.length > 0 && renderFieldGroup(otherFields, "Další informace")}
            {children}
        </div>
    )
}
