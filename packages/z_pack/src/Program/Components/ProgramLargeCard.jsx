import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { ProgramCardCapsule } from "./ProgramCardCapsule"
import { ProgramMediumCard } from "./ProgramMediumCard"
import { ProgramLink } from "./ProgramLink"

const programData = {
    "programPage": [
        {
            "name": "Vojenská matematika",
            "created": "2024-08-17T14:57:26.557838",
            "id": "0ac1761b-0ec7-4fc2-b4d7-127e79a316eb"
        },
        {
            "name": "Vojenská fyzika",
            "created": "2024-08-17T14:57:26.598375",
            "id": "699e4e12-2876-4b91-a387-b54e8d27e80f"
        },
        {
            "name": "Vojenská informatika",
            "created": "2024-08-17T14:57:26.636717",
            "id": "723f9209-e9ff-4cfe-b489-96f75e40f35b"
        },
        {
            "name": "Vojenská kybernetika",
            "created": "2024-08-17T14:57:26.667664",
            "id": "c362eaa4-59f7-4985-a71f-4cd7d4ce96c3"
        },
        {
            "name": "Vojenská technika",
            "created": "2024-08-17T14:57:26.697559",
            "id": "7a950c5f-ebfa-4ada-8255-81efa7307033"
        },
        {
            "name": "Vojenská robotika",
            "created": "2024-08-17T14:57:26.731335",
            "id": "f69ebc61-3148-48ef-b599-03b9876841e9"
        },
        {
            "name": "Vojenská příprava",
            "created": "2024-08-17T14:57:26.763724",
            "id": "7e05e92b-c223-4fa4-8b2a-f9ce0215be67"
        }
    ]
}

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
export const ProgramLargeCard = ({program}) => {
    return (
        <ProgramCardCapsule program={program} title="Seznam programů">
            <Row>
                {programData.programPage.map((program, index) => (
                    <Col key={program.id} md={6} lg={4} className="mb-3">
                        <ProgramMediumCard 
                            program={program}
                            title={<ProgramLink program={program} />}
                        >
                            <div>
                                <p>ID: {program.id}</p>
                                <p>Vytvořeno: {new Date(program.created).toLocaleDateString('cs-CZ')}</p>
                            </div>
                        </ProgramMediumCard>
                    </Col>
                ))}
            </Row>
        </ProgramCardCapsule>
    )
}
