import Row from "react-bootstrap/Row"
import { LeftColumn, MiddleColumn, useReadOnly } from "@hrbolek/uoisfrontend-shared"
import { AdmissionCardCapsule } from "./AdmissionCardCapsule"
import { AdmissionMediumCard } from "./AdmissionMediumCard"

/**
 * A large card component for displaying detailed content and layout for an admission entity.
 *
 * This component wraps an `AdmissionCardCapsule` with a flexible layout that includes multiple
 * columns. It uses a `Row` layout with a `LeftColumn` for displaying an `AdmissionMediumCard`
 * and a `MiddleColumn` for rendering additional children.
 *
 * @component
 * @param {Object} props - The properties for the AdmissionLargeCard component.
 * @param {Object} props.admission - The object representing the admission entity.
 * @param {string|number} props.admission.id - The unique identifier for the admission entity.
 * @param {string} props.admission.name - The name or label of the admission entity.
 * @param {Function} [props.onEditDone] - Callback function called when edit operation is completed.
 * @param {React.ReactNode} [props.children=null] - Additional content to render in the middle column.
 *
 * @returns {JSX.Element} A JSX element combining a large card layout with dynamic content.
 *
 * @example
 * // Example usage:
 * const admissionEntity = { id: 123, name: "Sample Entity" };
 * 
 * <AdmissionLargeCard 
 *   admission={admissionEntity}
 *   onEditDone={(admission) => console.log("Edit completed", admission)}
 * >
 *   <p>Additional content for the middle column.</p>
 * </AdmissionLargeCard>
 */
export const AdmissionLargeCard = ({admission, children, onEditDone, readOnly}) => {
    const { isReadOnly } = useReadOnly();
    const effectiveReadOnly = readOnly || isReadOnly;
    
    return (
        <AdmissionCardCapsule admission={admission} >
            <Row>
                <LeftColumn>
                    <AdmissionMediumCard admission={admission} onEditDone={onEditDone} readOnly={effectiveReadOnly}/>
                </LeftColumn>
                <MiddleColumn>
                    {children}
                </MiddleColumn>
            </Row>
        </AdmissionCardCapsule>
    )
}
