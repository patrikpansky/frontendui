// Student Update Page Component
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StudentReadAsyncAction } from '../Queries/StudentReadAsyncAction';
import { StudentUpdateForm } from '../Components/StudentUpdateForm';
import { StudentCard } from '../Components/StudentComponents';
import { createMockStudents, getStudentDisplayName } from '../Components/StudentUtils';

export const StudentUpdatePage = ({ studentId, onBack }) => {
    const dispatch = useDispatch();
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);

    // Load student data
    useEffect(() => {
        const loadStudent = async () => {
            if (!studentId) {
                setError('Chybí ID studenta');
                setLoading(false);
                return;
            }

            try {
                const result = await dispatch(StudentReadAsyncAction({ id: studentId }));
                
                if (result?.data?.result) {
                    setStudent(result.data.result);
                } else {
                    setError('Student nebyl nalezen');
                }
            } catch (err) {
                console.error("Error loading student:", err);
                setError('Chyba při načítání studenta');
                
                // Fallback to mock data for testing
                const mockStudents = createMockStudents();
                const mockStudent = mockStudents.find(s => s.id === studentId) || mockStudents[0];
                setStudent(mockStudent);
            } finally {
                setLoading(false);
            }
        };

        loadStudent();
    }, [studentId, dispatch]);

    const handleUpdateSuccess = (updatedStudent) => {
        setStudent(updatedStudent);
        setShowForm(false);
        // You could show a success message here
        console.log("Student updated successfully:", updatedStudent);
    };

    const handleCancel = () => {
        setShowForm(false);
    };

    if (loading) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <div>Načítám studenta...</div>
            </div>
        );
    }

    if (error && !student) {
        return (
            <div style={{ padding: '20px' }}>
                <div style={{ 
                    padding: '16px', 
                    color: 'red', 
                    backgroundColor: '#ffebee', 
                    marginBottom: '16px',
                    borderRadius: '4px'
                }}>
                    Chyba: {error}
                </div>
                <button
                    onClick={onBack}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Zpět
                </button>
            </div>
        );
    }

    return (
        <div style={{ padding: '16px' }}>
            {/* Header */}
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '20px'
            }}>
                <h2 style={{ margin: '0', color: '#333' }}>
                    {showForm ? 'Upravit studenta' : 'Detail studenta'}
                </h2>
                <div style={{ display: 'flex', gap: '8px' }}>
                    {!showForm && (
                        <button
                            onClick={() => setShowForm(true)}
                            style={{
                                padding: '8px 16px',
                                backgroundColor: '#28a745',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '14px'
                            }}
                        >
                            Upravit
                        </button>
                    )}
                    <button
                        onClick={onBack}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#6c757d',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '14px'
                        }}
                    >
                        Zpět
                    </button>
                </div>
            </div>

            {/* Error display */}
            {error && (
                <div style={{ 
                    padding: '16px', 
                    color: 'red', 
                    backgroundColor: '#ffebee', 
                    marginBottom: '16px',
                    borderRadius: '4px'
                }}>
                    Chyba: {error}
                </div>
            )}

            {/* Content */}
            {showForm ? (
                <StudentUpdateForm 
                    student={student}
                    onSuccess={handleUpdateSuccess}
                    onCancel={handleCancel}
                />
            ) : (
                <div>
                    {/* Student info header */}
                    <div style={{ 
                        marginBottom: '20px',
                        padding: '16px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '4px'
                    }}>
                        <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>
                            {getStudentDisplayName(student)}
                        </h3>
                        <div style={{ fontSize: '14px', color: '#666' }}>
                            ID: {student?.id}
                        </div>
                    </div>

                    {/* Student card */}
                    <StudentCard student={student} index={0} />
                </div>
            )}
        </div>
    );
}; 