import Row from "react-bootstrap/Row"
import { ProgramCardCapsule } from "./ProgramCardCapsule"
import { ProgramMediumCard } from "./ProgramMediumCard"
import { ProgramLink } from "./ProgramLink"
import { LeftColumn, MiddleColumn } from "@hrbolek/uoisfrontend-shared"

/**
 * A large card component for displaying detailed content and layout for program entities.
 *
 * This component displays multiple medium cards, each representing a different military program
 * including mathematics, physics, informatics, cybernetics, technology, robotics, and military preparation.
 *
 * @component
 * @param {Object} props - The properties for the ProgramLargeCard component.
 * @param {Object} props.program - The object representing the program entity.
 *
 * @returns {JSX.Element} A JSX element with multiple cards showing program information.
 */
export const ProgramLargeCard = ({program, children}) => {
    return (
        <ProgramCardCapsule program={program}>
            <Row>
                <LeftColumn>
                    <ProgramMediumCard program={program}/>
                </LeftColumn>
                <MiddleColumn>
                    {children}
                </MiddleColumn>
            </Row>

        </ProgramCardCapsule>
    )
}
