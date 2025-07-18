import { PersonFill } from "react-bootstrap-icons"
import { ProgramCardCapsule } from "./ProgramCardCapsule"
import { ProgramMediumContent } from "./ProgramMediumContent"

/**
 * A specialized info card component for displaying program information with admission count.
 * 
 * This component is specifically designed for the program detail page's left column
 * and shows relevant information including the number of admissions.
 *
 * @component
 * @param {Object} props - The properties for the ProgramInfoCard component.
 * @param {Object} props.program - The object representing the program entity.
 * @param {string|number} props.program.id - The unique identifier for the program entity.
 * @param {string} props.program.name - The name or label of the program entity.
 * @param {string} [props.program.type] - The type of the program entity.
 * @param {string} [props.program.createdAt] - The creation date of the program entity.
 * @param {Array} [props.admissions] - Array of admissions for this program.
 * @param {React.ReactNode} [props.children=null] - Content to render inside the card body.
 *
 * @returns {JSX.Element} A JSX element displaying program information with admission count.
 */
export const ProgramInfoCard = ({program, admissions, children}) => {
    const admissionsCount = Array.isArray(admissions) ? admissions.length : 0;
    
    return (
        <ProgramCardCapsule title="Informace o řízení">
            <ProgramMediumContent program={program}>
                {children}
                {/* Displaying admissions count */}
                <div style={{ marginTop: '0.5rem', fontSize: '0.9em', color: '#555' }}>
                    Počet přijímacích řízení: {admissionsCount}
                </div>
                {/* Displaying additional program information */}
                {program.type && (
                    <div style={{ marginTop: '0.5rem', fontSize: '0.9em', color: '#555' }}>
                        Type: {program.type}
                    </div>
                )}
                {program.createdAt && (
                    <div style={{ fontSize: '0.9em', color: '#555' }}>
                        Created: {new Date(program.createdAt).toLocaleDateString()}
                    </div>
                )}
            </ProgramMediumContent>
        </ProgramCardCapsule>
    )
}
