import { useState, useEffect } from 'react';
import { useAsyncAction } from '@hrbolek/uoisfrontend-gql-shared';
import { LoadingSpinner, ErrorHandler } from '@hrbolek/uoisfrontend-shared';
import { Container, Row, Col, Card, Button, Form, Modal, Alert, Badge } from 'react-bootstrap';
import { PlusCircle, PencilSquare, Trash, CheckCircle, XCircle, GearFill } from 'react-bootstrap-icons';

/**
 * Component for managing exam conditions for admission processes
 * 
 * Features:
 * - Display existing exam conditions
 * - Add new exam conditions
 * - Edit existing conditions
 * - Delete conditions
 * - Set condition requirements and criteria
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.program - The study program object
 * @param {string} props.program.id - Program ID
 * @returns {JSX.Element} Exam conditions manager component
 */
export const ProgramExamConditionsManager = ({ program }) => {
    const [conditions, setConditions] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingCondition, setEditingCondition] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        required_score: '',
        max_score: '',
        condition_type: 'written_exam',
        is_mandatory: true,
        weight: 1.0
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState('');

    // Mock data for demonstration - in real app, this would come from GraphQL
    useEffect(() => {
        // Simulate loading conditions
        setConditions([
            {
                id: '1',
                name: 'Písemná zkouška z matematiky',
                description: 'Základní matematické znalosti na úrovni střední školy',
                required_score: 60,
                max_score: 100,
                condition_type: 'written_exam',
                is_mandatory: true,
                weight: 0.6,
                created_at: new Date().toISOString()
            },
            {
                id: '2',
                name: 'Ústní pohovor',
                description: 'Motivace a základní znalosti oboru',
                required_score: 50,
                max_score: 100,
                condition_type: 'oral_exam',
                is_mandatory: true,
                weight: 0.4,
                created_at: new Date().toISOString()
            }
        ]);
    }, [program?.id]);

    const handleShowModal = (condition = null) => {
        if (condition) {
            setEditingCondition(condition);
            setFormData({
                name: condition.name,
                description: condition.description,
                required_score: condition.required_score.toString(),
                max_score: condition.max_score.toString(),
                condition_type: condition.condition_type,
                is_mandatory: condition.is_mandatory,
                weight: condition.weight
            });
        } else {
            setEditingCondition(null);
            setFormData({
                name: '',
                description: '',
                required_score: '',
                max_score: '',
                condition_type: 'written_exam',
                is_mandatory: true,
                weight: 1.0
            });
        }
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingCondition(null);
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
                throw new Error('Název podmínky je povinný');
            }
            if (!formData.required_score || !formData.max_score) {
                throw new Error('Bodové hodnoty jsou povinné');
            }
            if (parseInt(formData.required_score) > parseInt(formData.max_score)) {
                throw new Error('Požadované skóre nemůže být vyšší než maximální skóre');
            }

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            const newCondition = {
                id: editingCondition?.id || Date.now().toString(),
                ...formData,
                required_score: parseInt(formData.required_score),
                max_score: parseInt(formData.max_score),
                weight: parseFloat(formData.weight),
                created_at: editingCondition?.created_at || new Date().toISOString(),
                updated_at: new Date().toISOString()
            };

            if (editingCondition) {
                setConditions(prev => prev.map(c => c.id === editingCondition.id ? newCondition : c));
                setSuccess('Podmínka byla úspěšně upravena');
            } else {
                setConditions(prev => [...prev, newCondition]);
                setSuccess('Podmínka byla úspěšně přidána');
            }

            handleCloseModal();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (conditionId) => {
        if (!window.confirm('Opravdu chcete smazat tuto podmínku?')) {
            return;
        }

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 500));
            setConditions(prev => prev.filter(c => c.id !== conditionId));
            setSuccess('Podmínka byla úspěšně smazána');
        } catch (err) {
            setError('Chyba při mazání podmínky');
        }
    };

    const getConditionTypeLabel = (type) => {
        const types = {
            written_exam: 'Písemná zkouška',
            oral_exam: 'Ústní zkouška',
            practical_exam: 'Praktická zkouška',
            portfolio: 'Portfolio',
            interview: 'Pohovor',
            other: 'Jiné'
        };
        return types[type] || type;
    };

    const getConditionTypeBadge = (type) => {
        const variants = {
            written_exam: 'primary',
            oral_exam: 'success',
            practical_exam: 'warning',
            portfolio: 'info',
            interview: 'secondary',
            other: 'dark'
        };
        return variants[type] || 'secondary';
    };

    return (
        <Container>
            <Row className="mb-4">
                <Col>
                    <h3>
                        <GearFill className="me-2" />
                        Správa podmínek zkoušek - {program?.name}
                    </h3>
                    <p className="text-muted">
                        Nastavení a správa podmínek pro přijímací zkoušky
                    </p>
                </Col>
                <Col xs="auto">
                    <Button variant="primary" onClick={() => handleShowModal()}>
                        <PlusCircle className="me-2" />
                        Přidat podmínku
                    </Button>
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

            {conditions.length === 0 ? (
                <Card>
                    <Card.Body className="text-center py-5">
                        <GearFill size={48} className="text-muted mb-3" />
                        <h5 className="text-muted">Žádné podmínky</h5>
                        <p className="text-muted">Pro tento program nebyly nastaveny žádné podmínky zkoušek.</p>
                        <Button variant="primary" onClick={() => handleShowModal()}>
                            <PlusCircle className="me-2" />
                            Přidat první podmínku
                        </Button>
                    </Card.Body>
                </Card>
            ) : (
                <Row>
                    {conditions.map((condition) => (
                        <Col key={condition.id} md={6} lg={4} className="mb-3">
                            <Card className="h-100">
                                <Card.Header className="d-flex justify-content-between align-items-center">
                                    <Badge bg={getConditionTypeBadge(condition.condition_type)}>
                                        {getConditionTypeLabel(condition.condition_type)}
                                    </Badge>
                                    {condition.is_mandatory ? (
                                        <Badge bg="danger">Povinné</Badge>
                                    ) : (
                                        <Badge bg="secondary">Volitelné</Badge>
                                    )}
                                </Card.Header>
                                <Card.Body>
                                    <h6 className="card-title">{condition.name}</h6>
                                    <p className="card-text text-muted small">
                                        {condition.description}
                                    </p>
                                    <div className="mb-2">
                                        <strong>Požadované skóre:</strong> {condition.required_score}/{condition.max_score}
                                    </div>
                                    <div className="mb-2">
                                        <strong>Váha:</strong> {(condition.weight * 100).toFixed(0)}%
                                    </div>
                                    <div className="progress mb-3">
                                        <div 
                                            className="progress-bar" 
                                            style={{ width: `${(condition.required_score / condition.max_score) * 100}%` }}
                                        >
                                            {((condition.required_score / condition.max_score) * 100).toFixed(0)}%
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-end">
                                    <Button 
                                        variant="outline-primary" 
                                        size="sm" 
                                        className="me-2"
                                        onClick={() => handleShowModal(condition)}
                                    >
                                        <PencilSquare size={14} />
                                    </Button>
                                    <Button 
                                        variant="outline-danger" 
                                        size="sm"
                                        onClick={() => handleDelete(condition.id)}
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
                        {editingCondition ? 'Upravit podmínku' : 'Přidat podmínku'}
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
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Název podmínky *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Např. Písemná zkouška z matematiky"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Typ podmínky</Form.Label>
                                    <Form.Select
                                        name="condition_type"
                                        value={formData.condition_type}
                                        onChange={handleInputChange}
                                    >
                                        <option value="written_exam">Písemná zkouška</option>
                                        <option value="oral_exam">Ústní zkouška</option>
                                        <option value="practical_exam">Praktická zkouška</option>
                                        <option value="portfolio">Portfolio</option>
                                        <option value="interview">Pohovor</option>
                                        <option value="other">Jiné</option>
                                    </Form.Select>
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
                                placeholder="Detailní popis podmínky a požadavků"
                            />
                        </Form.Group>

                        <Row>
                            <Col md={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Požadované skóre *</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="required_score"
                                        value={formData.required_score}
                                        onChange={handleInputChange}
                                        required
                                        min="0"
                                        placeholder="60"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Maximální skóre *</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="max_score"
                                        value={formData.max_score}
                                        onChange={handleInputChange}
                                        required
                                        min="1"
                                        placeholder="100"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Váha (0.0 - 1.0)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        step="0.1"
                                        min="0"
                                        max="1"
                                        name="weight"
                                        value={formData.weight}
                                        onChange={handleInputChange}
                                        placeholder="1.0"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                name="is_mandatory"
                                checked={formData.is_mandatory}
                                onChange={handleInputChange}
                                label="Povinná podmínka"
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
                                editingCondition ? 'Uložit změny' : 'Přidat podmínku'
                            )}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </Container>
    );
};