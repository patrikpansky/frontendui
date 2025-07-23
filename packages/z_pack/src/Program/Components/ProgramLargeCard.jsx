import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import { ProgramCardCapsule } from "./ProgramCardCapsule"
import { ProgramInfoCard } from "./ProgramInfoCard"
import { ProgramAdmissionCreateCard } from "./ProgramAdmissionCreateCard"
import { LeftColumn, MiddleColumn, useReadOnly } from "@hrbolek/uoisfrontend-shared"
import { Link } from "react-router-dom" // přidáno pro odkaz
import { AdmissionDelete } from "../../Admission"

/**
 * A large card component for displaying detailed content and layout for program entities.
 */
export const ProgramLargeCard = ({program, admissions: admissionsProp, children, onBlur, readOnly}) => {
    const { isReadOnly } = useReadOnly();
    const effectiveReadOnly = readOnly || isReadOnly;
    
    // LOGY pro debug
    console.log("ProgramLargeCard: program", program);
    console.log("ProgramLargeCard: program.admissions", program.admissions);
    console.log("ProgramLargeCard: admissionsProp", admissionsProp);
    console.log("ProgramLargeCard: isReadOnly", isReadOnly, "effectiveReadOnly", effectiveReadOnly);

    // Používáme prop admissions pokud je zadán, jinak fallback na program.admissions
    const admissions = Array.isArray(admissionsProp) ? admissionsProp : (Array.isArray(program.admissions) ? program.admissions : []);

    return (
        <ProgramCardCapsule program={program}>
            <Row>
                <LeftColumn>
                    <ProgramInfoCard program={program} admissions={admissions} readOnly={effectiveReadOnly}/>
                    {!effectiveReadOnly && (
                        <div className="mt-4">
                            <ProgramAdmissionCreateCard program={program} onDone={() => onBlur({target: { value: program.id}})} readOnly={effectiveReadOnly}/>
                        </div>
                    )}
                </LeftColumn>
                <MiddleColumn>
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
                                                        to={`/admission/admission/editable/${admission.id}`}
                                                        data-discover="true"
                                                        style={{ fontWeight: "bold", textDecoration: "none" }}
                                                    >
                                                        {admission.name ?? "Přijímací řízení"}
                                                    </Link>
                                                </div>
                                                {!effectiveReadOnly && (
                                                    <AdmissionDelete
                                                        admission={admission}
                                                        onDeleted={() => onBlur?.({target: { value: program.id }})}
                                                        readOnly={effectiveReadOnly}
                                                    />
                                                )}
                                            </div>
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
