import { useState } from 'react';
import { Container, Row, Col, Card, Nav, Tab, Badge } from 'react-bootstrap';
import { PersonFill, GearFill, CalendarEvent, BarChart } from 'react-bootstrap-icons';
import { ProgramAdmissionApplicationsList } from './ProgramAdmissionApplicationsList';
import { ProgramExamConditionsManager } from './ProgramExamConditionsManager';
import { ProgramExamScheduleManager } from './ProgramExamScheduleManager';

/**
 * Main dashboard component for managing all admission-related features
 * 
 * Features:
 * - Tabbed interface for different management areas
 * - Overview statistics
 * - Integration of all admission management components
 * - Responsive design
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.program - The study program object
 * @param {string} props.program.id - Program ID
 * @param {string} props.program.name - Program name
 * @returns {JSX.Element} Admission dashboard component
 */
export const ProgramAdmissionDashboard = ({ program }) => {
    const [activeTab, setActiveTab] = useState('applications');

    // Mock statistics - in real app, this would come from GraphQL queries
    const stats = {
        totalApplications: 45,
        acceptedApplications: 18,
        pendingApplications: 22,
        rejectedApplications: 5,
        examConditions: 3,
        examTerms: 4,
        upcomingExams: 2
    };

    const getAcceptanceRate = () => {
        if (stats.totalApplications === 0) return 0;
        return ((stats.acceptedApplications / stats.totalApplications) * 100).toFixed(1);
    };

    return (
        <Container fluid>
            <Row className="mb-4">
                <Col>
                    <h2>
                        <BarChart className="me-2" />
                        Přijímací řízení - {program?.name}
                    </h2>
                    <p className="text-muted">
                        Komplexní správa přijímacího řízení studijního programu
                    </p>
                </Col>
            </Row>

            {/* Statistics Overview */}
            <Row className="mb-4">
                <Col md={3}>
                    <Card className="text-center h-100">
                        <Card.Body>
                            <PersonFill size={32} className="text-primary mb-2" />
                            <h4 className="mb-1">{stats.totalApplications}</h4>
                            <p className="text-muted mb-0">Celkem přihlášek</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="text-center h-100">
                        <Card.Body>
                            <div className="d-flex justify-content-center align-items-center mb-2">
                                <Badge bg="success" className="fs-6">
                                    {getAcceptanceRate()}%
                                </Badge>
                            </div>
                            <h4 className="mb-1">{stats.acceptedApplications}</h4>
                            <p className="text-muted mb-0">Přijatých</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="text-center h-100">
                        <Card.Body>
                            <GearFill size={32} className="text-warning mb-2" />
                            <h4 className="mb-1">{stats.examConditions}</h4>
                            <p className="text-muted mb-0">Podmínek zkoušek</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="text-center h-100">
                        <Card.Body>
                            <CalendarEvent size={32} className="text-info mb-2" />
                            <h4 className="mb-1">{stats.examTerms}</h4>
                            <p className="text-muted mb-0">Termínů zkoušek</p>
                            {stats.upcomingExams > 0 && (
                                <Badge bg="danger" className="mt-1">
                                    {stats.upcomingExams} nadcházející
                                </Badge>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Detailed Statistics */}
            <Row className="mb-4">
                <Col md={8}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-0">Stav přihlášek</h5>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col sm={6} md={3} className="text-center mb-3">
                                    <div className="mb-2">
                                        <Badge bg="secondary" className="fs-6">
                                            {stats.pendingApplications}
                                        </Badge>
                                    </div>
                                    <small className="text-muted">Čekající</small>
                                </Col>
                                <Col sm={6} md={3} className="text-center mb-3">
                                    <div className="mb-2">
                                        <Badge bg="success" className="fs-6">
                                            {stats.acceptedApplications}
                                        </Badge>
                                    </div>
                                    <small className="text-muted">Přijaté</small>
                                </Col>
                                <Col sm={6} md={3} className="text-center mb-3">
                                    <div className="mb-2">
                                        <Badge bg="danger" className="fs-6">
                                            {stats.rejectedApplications}
                                        </Badge>
                                    </div>
                                    <small className="text-muted">Zamítnuté</small>
                                </Col>
                                <Col sm={6} md={3} className="text-center mb-3">
                                    <div className="mb-2">
                                        <Badge bg="primary" className="fs-6">
                                            {getAcceptanceRate()}%
                                        </Badge>
                                    </div>
                                    <small className="text-muted">Úspěšnost</small>
                                </Col>
                            </Row>
                            <div className="progress" style={{ height: '8px' }}>
                                <div 
                                    className="progress-bar bg-success" 
                                    style={{ width: `${(stats.acceptedApplications / stats.totalApplications) * 100}%` }}
                                    title={`Přijaté: ${stats.acceptedApplications}`}
                                ></div>
                                <div 
                                    className="progress-bar bg-secondary" 
                                    style={{ width: `${(stats.pendingApplications / stats.totalApplications) * 100}%` }}
                                    title={`Čekající: ${stats.pendingApplications}`}
                                ></div>
                                <div 
                                    className="progress-bar bg-danger" 
                                    style={{ width: `${(stats.rejectedApplications / stats.totalApplications) * 100}%` }}
                                    title={`Zamítnuté: ${stats.rejectedApplications}`}
                                ></div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-0">Rychlé akce</h5>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-grid gap-2">
                                <button 
                                    className="btn btn-outline-primary btn-sm"
                                    onClick={() => setActiveTab('applications')}
                                >
                                    <PersonFill className="me-2" />
                                    Zobrazit přihlášky
                                </button>
                                <button 
                                    className="btn btn-outline-warning btn-sm"
                                    onClick={() => setActiveTab('conditions')}
                                >
                                    <GearFill className="me-2" />
                                    Spravovat podmínky
                                </button>
                                <button 
                                    className="btn btn-outline-info btn-sm"
                                    onClick={() => setActiveTab('schedule')}
                                >
                                    <CalendarEvent className="me-2" />
                                    Plánovat termíny
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Main Content Tabs */}
            <Card>
                <Card.Header className="p-0">
                    <Nav variant="tabs" className="border-0">
                        <Nav.Item>
                            <Nav.Link 
                                active={activeTab === 'applications'}
                                onClick={() => setActiveTab('applications')}
                                className="d-flex align-items-center"
                            >
                                <PersonFill className="me-2" />
                                Přihlášky
                                <Badge bg="primary" className="ms-2">
                                    {stats.totalApplications}
                                </Badge>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link 
                                active={activeTab === 'conditions'}
                                onClick={() => setActiveTab('conditions')}
                                className="d-flex align-items-center"
                            >
                                <GearFill className="me-2" />
                                Podmínky zkoušek
                                <Badge bg="warning" className="ms-2">
                                    {stats.examConditions}
                                </Badge>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link 
                                active={activeTab === 'schedule'}
                                onClick={() => setActiveTab('schedule')}
                                className="d-flex align-items-center"
                            >
                                <CalendarEvent className="me-2" />
                                Termíny zkoušek
                                <Badge bg="info" className="ms-2">
                                    {stats.examTerms}
                                </Badge>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body className="p-0">
                    <Tab.Content>
                        <Tab.Pane active={activeTab === 'applications'}>
                            {activeTab === 'applications' && (
                                <div className="p-4">
                                    <ProgramAdmissionApplicationsList program={program} />
                                </div>
                            )}
                        </Tab.Pane>
                        <Tab.Pane active={activeTab === 'conditions'}>
                            {activeTab === 'conditions' && (
                                <div className="p-4">
                                    <ProgramExamConditionsManager program={program} />
                                </div>
                            )}
                        </Tab.Pane>
                        <Tab.Pane active={activeTab === 'schedule'}>
                            {activeTab === 'schedule' && (
                                <div className="p-4">
                                    <ProgramExamScheduleManager program={program} />
                                </div>
                            )}
                        </Tab.Pane>
                    </Tab.Content>
                </Card.Body>
            </Card>
        </Container>
    );
};