import { useState, useEffect } from 'react';
import { useAsyncAction } from '@hrbolek/uoisfrontend-gql-shared';
import { LoadingSpinner, ErrorHandler } from '@hrbolek/uoisfrontend-shared';
import { Container, Row, Col, Card, Button, Form, Modal, Alert, Badge, Table } from 'react-bootstrap';
import { PlusCircle, PencilSquare, Trash, CalendarEvent, Clock, GeoAlt, People } from 'react-bootstrap-icons';

/**
 * Component for managing exam schedules and terms for admission processes
 * 
 * Features:
 * - Display exam schedule calendar
 * - Add new exam terms
 * - Edit existing exam terms
 * - Delete exam terms
 * - Set exam locations and capacity
 * - Manage exam time slots
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.program - The study program object
 * @param {string} props.program.id - Program ID
 * @returns {JSX.Element} Exam schedule manager component
 */
export const ProgramExamScheduleManager = ({ program }) => {
    const [examTerms, setExamTerms] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingTerm, setEditingTerm] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        exam_date: '',
        start_time: '',
        end_time: '',
        location: '',
        capacity: '',
        description: '',
        exam_type: 'written',
        is_active: true
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState('');
    const [viewMode, setViewMode] = useState('list'); // 'list' or 'calendar'

    // Mock data for demonstration - in real app, this would come from GraphQL
    useEffect(() => {
        // Simulate loading exam terms
        setExamTerms([
            {
                id: '1',
                name: 'Písemná zkouška - 1. termín',
                exam_date: '2025-06-15',
                start_time: '09:00',
                end_time: '11:00',
                location: 'Učebna A101',
                capacity: 30,
                registered_count: 18,
                description: 'Písemná zkouška z matematiky a fyziky',
                exam_type: 'written',
                is_active: true,
                created_at: new Date().toISOString()
            },
            {
                id: '2',
                name: 'Ústní zkouška - 1. termín',
                exam_date: '2025-06-20',
                start_time: '08:00',
                end_time: '16:00',
                location: 'Kancelář B205',
                capacity: 20,
                registered_count: 15,
                description: 'Ústní pohovor s komisí',
                exam_type: 'oral',
                is_active: true,
                created_at: new Date().toISOString()
            },
            {
                id: '3',
                name: 'Praktická zkouška',
                exam_date: '2025-06-25',
                start_time: '13:00',
                end_time: '17:00',
                location: 'Laboratoř C301',
                capacity: 15,
                registered_count: 8,
                description: 'Praktické úkoly z oboru',
                exam_type: 'practical',
                is_active: true,
                created_at: new Date().toISOString()
            }
        ]);
    }, [program?.id]);

    const handleShowModal = (term = null) => {
        if (term) {
            setEditingTerm(term);
            setFormData({
                name: term.name,
                exam_date: term.exam_date,
                start_time: term.start_time,
                end_time: term.end_time,
                location: term.location,
                capacity: term.capacity.toString(),
                description: term.description,
                exam_type: term.exam_type,
                is_active: term.is_active
            });
        } else {
            setEditingTerm(null);
            setFormData({
                name: '',
                exam_date: '',
                start_time: '',
                end_time: '',
                location: '',
                capacity: '',
                description: '',
                exam_type: 'written',
                is_active: true
            });
        }
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingTerm(null);
        setError(null);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Validate form
            if (!formData.name.trim()) {
                throw new Error('Název termínu je povinný');
            }
            if (!formData.exam_date) {
                throw new Error('Datum zkoušky je povinné');
            }
            if (!formData.start_time || !formData.end_time) {
                throw new Error('Čas začátku a konce je povinný');
            }
            if (formData.start_time >= formData.end_time) {
                throw new Error('Čas začátku musí být před časem konce');
            }
            if (!formData.capacity || parseInt(formData.capacity) <= 0) {
                throw new Error('Kapacita musí být kladné číslo');
            }

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            const newTerm = {
                id: editingTerm?.id || Date.now().toString(),
                ...formData,
                capacity: parseInt(formData.capacity),
                registered_count: editingTerm?.registered_count || 0,
                created_at: editingTerm?.created_at || new Date().toISOString(),
                updated_at: new Date().toISOString()
            };

            if (editingTerm) {
                setExamTerms(prev => prev.map(t => t.id === editingTerm.id ? newTerm : t));
                setSuccess('Termín byl úspěšně upraven');
            } else {
                setExamTerms(prev => [...prev, newTerm]);
                setSuccess('Termín byl úspěšně přidán');
            }

            handleCloseModal();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (termId) => {
        if (!window.confirm('Opravdu chcete smazat tento termín?')) {
            return;
        }

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 500));
            setExamTerms(prev => prev.filter(t => t.id !== termId));
            setSuccess('Termín byl úspěšně smazán');
        } catch (err) {
            setError('Chyba při mazání termínu');
        }
    };

    const getExamTypeLabel = (type) => {
        const types = {
            written: 'Písemná',
            oral: 'Ústní',
            practical: 'Praktická',
            combined: 'Kombinovaná'
        };
        return types[type] || type;
    };

    const getExamTypeBadge = (type) => {
        const variants = {
            written: 'primary',
            oral: 'success',
            practical: 'warning',
            combined: 'info'
        };
        return variants[type] || 'secondary';
    };

    const getCapacityBadge = (term) => {
        const percentage = (term.registered_count / term.capacity) * 100;
        if (percentage >= 90) return 'danger';
        if (percentage >= 70) return 'warning';
        return 'success';
    };

    const formatDateTime = (date, time) => {
        const dateObj = new Date(`${date}T${time}`);
        return dateObj.toLocaleString('cs-CZ', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const sortedTerms = [...examTerms].sort((a, b) => {
        const dateA = new Date(`${a.exam_date}T${a.start_time}`);
        const dateB = new Date(`${b.exam_date}T${b.start_time}`);
        return dateA - dateB;
    });

    return (
        <Container>
            <Row className="mb-4">
                <Col>
                    <h3>
                        <CalendarEvent className="me-2" />
                        Správa termínů zkoušek - {program?.name}
                    </h3>
                    <p className="text-muted">
                        Plánování a správa termínů přijímacích zkoušek
                    </p>
                </Col>
                <Col xs="auto">
                    <div className="d-flex gap-2">
                        <Button 
                            variant={viewMode === 'list' ? 'primary' : 'outline-primary'}
                            onClick={() => setViewMode('list')}
                        >
                            Seznam
                        </Button>
                        <Button 
                            variant={viewMode === 'calendar' ? 'primary' : 'outline-primary'}
                            onClick={() => setViewMode('calendar')}
                        >
                            Kalendář
                        </Button>
                        <Button variant="success" onClick={() => handleShowModal()}>
                            <PlusCircle className="me-2" />
                            Přidat termín
                        </Button>
                    </div>
                </Col>
            </Row>

            {success && (
                <Alert variant="success" dismissible onClose={() => setSuccess('')}>
                    {success}
                </Alert>
            )}

            {error && (
                <Alert variant="danger" dismissible onClose={() => setError(null)}>
                    {error}
                </Alert>
            )}

            {examTerms.length === 0 ? (
                <Card>
                    <Card.Body className="text-center py-5">
                        <CalendarEvent size={48} className="text-muted mb-3" />
                        <h5 className="text-muted">Žádné termíny</h5>
                        <p className="text-muted">Pro tento program nebyly nastaveny žádné termíny zkoušek.</p>
                        <Button variant="success" onClick={() => handleShowModal()}>
                            <PlusCircle className="me-2" />
                            Přidat první termín
                        </Button>
                    </Card.Body>
                </Card>
            ) : viewMode === 'list' ? (
                <Card>
                    <Card.Header>
                        <h5 className="mb-0">Přehled termínů</h5>
                    </Card.Header>
                    <Card.Body className="p-0">
                        <Table responsive hover className="mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th>Název</th>
                                    <th>Datum a čas</th>
                                    <th>Typ</th>
                                    <th>Místo</th>
                                    <th>Kapacita</th>
                                    <th>Stav</th>
                                    <th>Akce</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedTerms.map((term) => (
                                    <tr key={term.id}>
                                        <td>
                                            <strong>{term.name}</strong>
                                            {term.description && (
                                                <div className="text-muted small">
                                                    {term.description}
                                                </div>
                                            )}
                                        </td>
                                        <td>
                                            <CalendarEvent className="me-1" />
                                            {formatDateTime(term.exam_date, term.start_time)}
                                            <div className="text-muted small">
                                                <Clock className="me-1" />
                                                {term.start_time} - {term.end_time}
                                            </div>
                                        </td>
                                        <td>
                                            <Badge bg={getExamTypeBadge(term.exam_type)}>
                                                {getExamTypeLabel(term.exam_type)}
                                            </Badge>
                                        </td>
                                        <td>
                                            <GeoAlt className="me-1" />
                                            {term.location}
                                        </td>
                                        <td>
                                            <Badge bg={getCapacityBadge(term)}>
                                                <People className="me-1" />
                                                {term.registered_count}/{term.capacity}
                                            </Badge>
                                            <div className="progress mt-1" style={{ height: '4px' }}>
                                                <div 
                                                    className={`progress-bar bg-${getCapacityBadge(term)}`}
                                                    style={{ width: `${(term.registered_count / term.capacity) * 100}%` }}
                                                ></div>
                                            </div>
                                        </td>
                                        <td>
                                            {term.is_active ? (
                                                <Badge bg="success">Aktivní</Badge>
                                            ) : (
                                                <Badge bg="secondary">Neaktivní</Badge>
                                            )}
                                        </td>
                                        <td>
                                            <div className="d-flex gap-1">
                                                <Button 
                                                    variant="outline-primary" 
                                                    size="sm"
                                                    onClick={() => handleShowModal(term)}
                                                >
                                                    <PencilSquare size={14} />
                                                </Button>
                                                <Button 
                                                    variant="outline-danger" 
                                                    size="sm"
                                                    onClick={() => handleDelete(term.id)}
                                                >
                                                    <Trash size={14} />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            ) : (
                <Row>
                    {sortedTerms.map((term) => (
                        <Col key={term.id} md={6} lg={4} className="mb-3">
                            <Card className="h-100">
                                <Card.Header className="d-flex justify-content-between align-items-center">
                                    <Badge bg={getExamTypeBadge(term.exam_type)}>
                                        {getExamTypeLabel(term.exam_type)}
                                    </Badge>
                                    {term.is_active ? (
                                        <Badge bg="success">Aktivní</Badge>
                                    ) : (
                                        <Badge bg="secondary">Neaktivní</Badge>
                                    )}
                                </Card.Header>
                                <Card.Body>
                                    <h6 className="card-title">{term.name}</h6>
                                    <p className="card-text text-muted small">
                                        {term.description}
                                    </p>
                                    <div className="mb-2">
                                        <CalendarEvent size={14} className="me-1" />
                                        <strong>Datum:</strong> {new Date(term.exam_date).toLocaleDateString('cs-CZ')}
                                    </div>
                                    <div className="mb-2">
                                        <Clock size={14} className="me-1" />
                                        <strong>Čas:</strong> {term.start_time} - {term.end_time}
                                    </div>
                                    <div className="mb-2">
                                        <GeoAlt size={14} className="me-1" />
                                        <strong>Místo:</strong> {term.location}
                                    </div>
                                    <div className="mb-3">
                                        <People size={14} className="me-1" />
                                        <strong>Kapacita:</strong> 
                                        <Badge bg={getCapacityBadge(term)} className="ms-2">
                                            {term.registered_count}/{term.capacity}
                                        </Badge>
                                        <div className="progress mt-2" style={{ height: '6px' }}>
                                            <div 
                                                className={`progress-bar bg-${getCapacityBadge(term)}`}
                                                style={{ width: `${(term.registered_count / term.capacity) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-end">
                                    <Button 
                                        variant="outline-primary" 
                                        size="sm" 
                                        className="me-2"
                                        onClick={() => handleShowModal(term)}
                                    >
                                        <PencilSquare size={14} />
                                    </Button>
                                    <Button 
                                        variant="outline-danger" 
                                        size="sm"
                                        onClick={() => handleDelete(term.id)}
                                    >
                                        <Trash size={14} />
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}

            {/* Add/Edit Modal */}
            <Modal show={showModal} onHide={handleCloseModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>
                        {editingTerm ? 'Upravit termín' : 'Přidat termín'}
                    </Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        {error && (
                            <Alert variant="danger">
                                {error}
                            </Alert>
                        )}
                        
                        <Row>
                            <Col md={8}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Název termínu *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Např. Písemná zkouška - 1. termín"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Typ zkoušky</Form.Label>
                                    <Form.Select
                                        name="exam_type"
                                        value={formData.exam_type}
                                        onChange={handleInputChange}
                                    >
                                        <option value="written">Písemná</option>
                                        <option value="oral">Ústní</option>
                                        <option value="practical">Praktická</option>
                                        <option value="combined">Kombinovaná</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Datum zkoušky *</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="exam_date"
                                        value={formData.exam_date}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Čas začátku *</Form.Label>
                                    <Form.Control
                                        type="time"
                                        name="start_time"
                                        value={formData.start_time}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Čas konce *</Form.Label>
                                    <Form.Control
                                        type="time"
                                        name="end_time"
                                        value={formData.end_time}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={8}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Místo konání *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Např. Učebna A101"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Kapacita *</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="capacity"
                                        value={formData.capacity}
                                        onChange={handleInputChange}
                                        required
                                        min="1"
                                        placeholder="30"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label>Popis</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                placeholder="Detailní popis termínu a požadavků"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                name="is_active"
                                checked={formData.is_active}
                                onChange={handleInputChange}
                                label="Aktivní termín"
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Zrušit
                        </Button>
                        <Button variant="primary" type="submit" disabled={loading}>
                            {loading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" />
                                    Ukládám...
                                </>
                            ) : (
                                editingTerm ? 'Uložit změny' : 'Přidat termín'
                            )}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </Container>
    );
};