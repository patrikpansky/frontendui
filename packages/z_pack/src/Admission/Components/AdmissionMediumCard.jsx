import { PersonFill } from "react-bootstrap-icons"
import { AdmissionLink } from "./AdmissionLink"
import { AdmissionCardCapsule } from "./AdmissionCardCapsule"
import { AdmissionMediumContent } from "./AdmissionMediumContent"
import { AdmissionButton } from "./AdmissionCUDButton"

/**
 * A card component that displays detailed content for an admission entity.
 *
 * This component combines `AdmissionCardCapsule` and `AdmissionMediumContent` to create a card layout
 * with a title and medium-level content. The title includes a `PersonFill` icon and a link to
 * the admission entity's details, while the body displays serialized details of the entity along
 * with any additional children passed to the component. It also includes an "Upravit" button
 * for editing the admission.
 *
 * @component
 * @param {Object} props - The properties for the AdmissionMediumCard component.
 * @param {Object} props.admission - The object representing the admission entity.
 * @param {string|number} props.admission.id - The unique identifier for the admission entity.
 * @param {string} props.admission.name - The name or label of the admission entity.
 * @param {Function} [props.onEditDone] - Callback function called when edit operation is completed.
 * @param {React.ReactNode} [props.children=null] - Additional content to render inside the card body.
 *
 * @returns {JSX.Element} A JSX element combining a card with a title and detailed content.
 *
 * @example
 * // Example usage:
 * const admissionEntity = { id: 123, name: "Sample Entity" };
 * 
 * <AdmissionMediumCard 
 *   admission={admissionEntity}
 *   onEditDone={(admission) => console.log("Edit completed", admission)}
 * >
 *   <p>Additional details or actions for the entity.</p>
 * </AdmissionMediumCard>
 */
export const AdmissionMediumCard = ({admission, children, onEditDone}) => {
    return (
        <AdmissionCardCapsule title="Informační panel">
            <AdmissionButton 
                className="btn btn-outline-success w-100 mb-3" 
                operation="U" 
                admission={admission} 
                onDone={onEditDone || ((admission) => console.log("AdmissionMediumCard.onEditDone", admission))}
            >
                Upravit
            </AdmissionButton>
            <AdmissionMediumContent admission={admission}>
                {children}
            </AdmissionMediumContent>
        </AdmissionCardCapsule>
    )
}
