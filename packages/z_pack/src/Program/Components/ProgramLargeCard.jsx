import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import { ProgramCardCapsule } from "./ProgramCardCapsule"
import { ProgramMediumCard } from "./ProgramMediumCard"
import { LeftColumn, MiddleColumn } from "@hrbolek/uoisfrontend-shared"
import { AdmissionInsert } from "../../Admission"
import { AdmissionMediumContent } from "../../Admission"
import { Link } from "react-router-dom" // přidáno pro odkaz
import { AdmissionDelete } from "../../Admission"

/**
 * A large card component for displaying detailed content and layout for program entities.
 */
export const ProgramLargeCard = ({program, children, onBlur, readOnly}) => {
    // LOGY pro debug
    console.log("ProgramLargeCard: program", program);
    console.log("ProgramLargeCard: program.admissions", program.admissions);

    const admissions = Array.isArray(program.admissions) ? program.admissions : [];

    return (
        <ProgramCardCapsule program={program}>
            <Row>
                <LeftColumn>
                    <ProgramMediumCard program={program}/>
                </LeftColumn>
                <MiddleColumn>
                    <div className="mt-4">
                        <AdmissionInsert program={program} onDone={() => onBlur({target: { value: program}})}/>
                    </div>
                    <Card className="mt-4">
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <Card.Title className="mb-0">Přijímací řízení</Card.Title>
                            </div>
                            {admissions.length > 0 ? (
                                <ListGroup variant="flush">
                                    {admissions.map(admission => (
                                        <ListGroup.Item key={admission.id}>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <Link
                                                        to={`/admission/admission/view/${admission.id}`}
                                                        data-discover="true"
                                                        style={{ fontWeight: "bold", textDecoration: "none" }}
                                                    >
                                                        {admission.name ?? "Přijímací řízení"}
                                                    </Link>
                                                </div>
                                                <AdmissionDelete
                                                    admission={admission}
                                                    onDeleted={() => onBlur?.({target: { value: program }})}
                                                />
                                            </div>
                                            <AdmissionMediumContent admission={admission} />
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            ) : (
                                <div>Žádné přijímací řízení</div>
                            )}
                        </Card.Body>
                    </Card>
                    {children}
                </MiddleColumn>
            </Row>
        </ProgramCardCapsule>
    )
}
