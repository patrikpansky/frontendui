import { Col, Row } from "react-bootstrap"
/**
 * A component that displays medium-level content for an studyplan entity.
 *
 * This component renders a label "StudyPlanMediumContent" followed by a serialized representation of the `studyplan` object
 * and any additional child content. It is designed to handle and display information about an studyplan entity object.
 *
 * @component
 * @param {Object} props - The properties for the StudyPlanMediumContent component.
 * @param {Object} props.studyplan - The object representing the studyplan entity.
 * @param {string|number} props.studyplan.id - The unique identifier for the studyplan entity.
 * @param {string} props.studyplan.name - The name or label of the studyplan entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render after the serialized `studyplan` object.
 *
 * @returns {JSX.Element} A JSX element displaying the entity's details and optional content.
 *
 * @example
 * // Example usage:
 * const studyplanEntity = { id: 123, name: "Sample Entity" };
 * 
 * <StudyPlanMediumContent studyplan={studyplanEntity}>
 *   <p>Additional information about the entity.</p>
 * </StudyPlanMediumContent>
 */
export const StudyPlanMediumContent = ({studyplan, children}) => {
    return (
        <>
            <Row>
                <Col>Program</Col>
                <Col><ProgramLink program={student?.program} /></Col>
            </Row>
            <Row>
                <Col>JSON</Col>
                <Col><pre>{JSON.stringify(studyplan, null, 2)}</pre></Col>
            </Row>
            {children}
        </>
    )
}
