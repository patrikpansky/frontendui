import { PersonFill } from "react-bootstrap-icons"
import { AdmissionprocessLink } from "./AdmissionprocessLink"
import { AdmissionprocessCardCapsule } from "./AdmissionprocessCardCapsule"
import { AdmissionprocessMediumContent } from "./AdmissionprocessMediumContent"

/**
 * A card component that displays detailed content for an admissionprocess entity.
 *
 * This component combines `AdmissionprocessCardCapsule` and `AdmissionprocessMediumContent` to create a card layout
 * with a title and medium-level content. The title includes a `PersonFill` icon and a link to
 * the admissionprocess entity's details, while the body displays serialized details of the entity along
 * with any additional children passed to the component.
 *
 * @component
 * @param {Object} props - The properties for the AdmissionprocessMediumCard component.
 * @param {Object} props.admissionprocess - The object representing the admissionprocess entity.
 * @param {string|number} props.admissionprocess.id - The unique identifier for the admissionprocess entity.
 * @param {string} props.admissionprocess.name - The name or label of the admissionprocess entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render inside the card body.
 *
 * @returns {JSX.Element} A JSX element combining a card with a title and detailed content.
 *
 * @example
 * // Example usage:
 * const admissionprocessEntity = { id: 123, name: "Sample Entity" };
 * 
 * <AdmissionprocessMediumCard admissionprocess={admissionprocessEntity}>
 *   <p>Additional details or actions for the entity.</p>
 * </AdmissionprocessMediumCard>
 */
export const AdmissionprocessMediumCard = ({admissionprocess, children}) => {
    return (
        <AdmissionprocessCardCapsule title={<><PersonFill /> <AdmissionprocessLink admissionprocess={admissionprocess} /></>}>
            <AdmissionprocessMediumContent admissionprocess={admissionprocess}>
                {children}
            </AdmissionprocessMediumContent>
        </AdmissionprocessCardCapsule>
    )
}
