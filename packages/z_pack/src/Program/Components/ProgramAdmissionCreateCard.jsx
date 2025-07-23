import { ProgramCardCapsule } from "./ProgramCardCapsule"
import { AdmissionInsert } from "../../Admission"
import { useReadOnly } from "@hrbolek/uoisfrontend-shared"

/**
 * A specialized card component for creating new admissions for a program.
 * 
 * This component is specifically designed for the program detail page's left column
 * and provides interface for creating new admission processes.
 *
 * @component
 * @param {Object} props - The properties for the ProgramAdmissionCreateCard component.
 * @param {Object} props.program - The object representing the program entity.
 * @param {string|number} props.program.id - The unique identifier for the program entity.
 * @param {Function} [props.onDone] - Callback function called when admission creation is completed.
 * @param {React.ReactNode} [props.children=null] - Content to render inside the card body.
 *
 * @returns {JSX.Element} A JSX element for creating new admissions.
 */
export const ProgramAdmissionCreateCard = ({program, onDone, children, readOnly}) => {
    const { isReadOnly } = useReadOnly();
    const effectiveReadOnly = readOnly || isReadOnly;
    
    if (effectiveReadOnly) {
        return null; // Don't render create card in read-only mode
    }
    
    return (
        <ProgramCardCapsule title="Vytvoření řízení">
            <div style={{ padding: '1rem 0' }}>
                <AdmissionInsert 
                    program={program} 
                    onDone={onDone}
                    readOnly={effectiveReadOnly}
                />
                {children}
            </div>
        </ProgramCardCapsule>
    )
}
