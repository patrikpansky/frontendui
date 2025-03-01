import Row from "react-bootstrap/Row"
import { LeftColumn, MiddleColumn } from "@hrbolek/uoisfrontend-shared"
import { AdmissionprocessCardCapsule } from "./AdmissionprocessCardCapsule"
import { AdmissionprocessMediumCard } from "./AdmissionprocessMediumCard"

/**
 * A large card component for displaying detailed content and layout for an admissionprocess entity.
 *
 * This component wraps an `AdmissionprocessCardCapsule` with a flexible layout that includes multiple
 * columns. It uses a `Row` layout with a `LeftColumn` for displaying an `AdmissionprocessMediumCard`
 * and a `MiddleColumn` for rendering additional children.
 *
 * @component
 * @param {Object} props - The properties for the AdmissionprocessLargeCard component.
 * @param {Object} props.admissionprocess - The object representing the admissionprocess entity.
 * @param {string|number} props.admissionprocess.id - The unique identifier for the admissionprocess entity.
 * @param {string} props.admissionprocess.name - The name or label of the admissionprocess entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render in the middle column.
 *
 * @returns {JSX.Element} A JSX element combining a large card layout with dynamic content.
 *
 * @example
 * // Example usage:
 * const admissionprocessEntity = { id: 123, name: "Sample Entity" };
 * 
 * <AdmissionprocessLargeCard admissionprocess={admissionprocessEntity}>
 *   <p>Additional content for the middle column.</p>
 * </AdmissionprocessLargeCard>
 */
export const AdmissionprocessLargeCard = ({admissionprocess, children}) => {
    return (
        <AdmissionprocessCardCapsule admissionprocess={admissionprocess} >
            <Row>
                <LeftColumn>
                    <AdmissionprocessMediumCard admissionprocess={admissionprocess}/>
                </LeftColumn>
                <MiddleColumn>
                    {children}
                </MiddleColumn>
            </Row>
        </AdmissionprocessCardCapsule>
    )
}
