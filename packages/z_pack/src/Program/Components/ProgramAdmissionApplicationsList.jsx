import { useState } from 'react';
import { useAsyncAction } from '@hrbolek/uoisfrontend-gql-shared';
import { AdmissionReadPageAsyncAction } from '../../Admission/Queries/AdmissionReadPageAsyncAction';
import { AdmissionLink } from '../../Admission/Components/AdmissionLink';
import { LoadingSpinner, ErrorHandler } from '@hrbolek/uoisfrontend-shared';
import { Container, Row, Col, Card, Badge, Form } from 'react-bootstrap';
import { PersonFill, CalendarEvent, CheckCircle, XCircle, Clock } from 'react-bootstrap-icons';

/**
 * Component for displaying admission applications for a specific study program
 * 
 * Features:
 * - Display applications filtered by study program
 * - Filter by application status
 * - Show application details (name, status, dates)
 * - Responsive card layout
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.program - The study program object
 * @param {string} props.program.id - Program ID to filter applications
 * @param {string} props.program.name - Program name for display
 * @returns {JSX.Element} Applications list component
 */
export const ProgramAdmissionApplicationsList = ({ program }) => {
    const [statusFilter, setStatusFilter] = useState('all');
    
    const { loading, error, dispatchResult } = useAsyncAction(
        AdmissionReadPageAsyncAction,
        { 
            where: { programId: { _eq: program?.id } },
            limit: 100,
            skip: 0
        }
    );

    const getStatusBadge = (admission) => {
        // Determine status based on admission data
        if (admission.student_entry_date) {
            return <Badge bg="success"><CheckCircle size={14} /> Přijat</Badge>;
        }
        if (admission.condition_date && new Date(admission.condition_date) > new Date()) {
            return <Badge bg="warning"><Clock size={14} /> Podmíněně přijat</Badge>;
        }
        if (admission.exam_start_date && new Date(admission.exam_start_date) > new Date()) {
            return <Badge bg="info"><CalendarEvent size={14} /> Ke zkoušce</Badge>;
        }
        return <Badge bg="secondary"><XCircle size={14} /> Podáno</Badge>;
    };

    const getFilteredApplications = () => {
        if (!dispatchResult?.data?.result) return [];
        
        const applications = dispatchResult.data.result;
        
        if (statusFilter === 'all') return applications;
        
        return applications.filter(admission => {
            switch (statusFilter) {
                case 'accepted':
                    return admission.student_entry_date;
                case 'conditional':
                    return admission.condition_date && new Date(admission.condition_date) > new Date();
                case 'exam':
                    return admission.exam_start_date && new Date(admission.exam_start_date) > new Date();
                case 'submitted':
                    return !admission.student_entry_date && !admission.condition_date && !admission.exam_start_date;
                default:
                    return true;
            }
        });
    };

    if (loading) {
        return <LoadingSpinner text="Načítám přihlášky..." />;
    }

    if (error) {
        return <ErrorHandler errors={error} />;
    }

    const filteredApplications = getFilteredApplications();

    return (
        <Container>
            <Row className="mb-4">
                <Col>
                    <h3>
                        <PersonFill className="me-2" />
                        Přihlášky - {program?.name}
                    </h3>
                    <p className="text-muted">
                        Zobrazení podaných přihlášek podle studijního programu
                    </p>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={4}>
                    <Form.Select 
                        value={statusFilter} 
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="all">Všechny přihlášky</option>
                        <option value="submitted">Podané</option>
                        <option value="exam">Ke zkoušce</option>
                        <option value="conditional">Podmíněně přijaté</option>
                        <option value="accepted">Přijaté</option>
                    </Form.Select>
                </Col>
                <Col md={8} className="text-end">
                    <Badge bg="primary" className="me-2">
                        Celkem: {filteredApplications.length}
                    </Badge>
                </Col>
            </Row>

            {filteredApplications.length === 0 ? (
                <Card>
                    <Card.Body className="text-center py-5">
                        <PersonFill size={48} className="text-muted mb-3" />
                        <h5 className="text-muted">Žádné přihlášky</h5>
                        <p className="text-muted">Pro tento program nebyly nalezeny žádné přihlášky.</p>
                    </Card.Body>
                </Card>
            ) : (
                <Row>
                    {filteredApplications.map((admission) => (
                        <Col key={admission.id} md={6} lg={4} className="mb-3">
                            <Card className="h-100">
                                <Card.Header className="d-flex justify-content-between align-items-center">
                                    <AdmissionLink admission={admission} />
                                    {getStatusBadge(admission)}
                                </Card.Header>
                                <Card.Body>
                                    <div className="mb-2">
                                        <strong>Název:</strong> {admission.name || 'Bez názvu'}
                                    </div>
                                    {admission.name_en && (
                                        <div className="mb-2">
                                            <strong>Anglický název:</strong> {admission.name_en}
                                        </div>
                                    )}
                                    {admission.application_start_date && (
                                        <div className="mb-2">
                                            <CalendarEvent size={14} className="me-1" />
                                            <small className="text-muted">
                                                Podání od: {new Date(admission.application_start_date).toLocaleDateString('cs-CZ')}
                                            </small>
                                        </div>
                                    )}
                                    {admission.application_last_date && (
                                        <div className="mb-2">
                                            <CalendarEvent size={14} className="me-1" />
                                            <small className="text-muted">
                                                Podání do: {new Date(admission.application_last_date).toLocaleDateString('cs-CZ')}
                                            </small>
                                        </div>
                                    )}
                                    {admission.exam_start_date && (
                                        <div className="mb-2">
                                            <CalendarEvent size={14} className="me-1" />
                                            <small className="text-success">
                                                Zkouška: {new Date(admission.exam_start_date).toLocaleDateString('cs-CZ')}
                                            </small>
                                        </div>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};