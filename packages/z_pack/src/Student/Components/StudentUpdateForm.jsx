// Student Update Form Component
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StudentUpdateAsyncAction } from '../Queries/StudentUpdateAsyncAction';
import { StudentMediumEditableContent } from './StudentMediumEditableContent';
import { handleStudentUpdateError, validateStudentUpdateData, isMockStudent } from './StudentUtils';

export const StudentUpdateForm = ({ student, onSuccess, onCancel }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: student?.name || '',
        name_en: student?.name_en || ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const validateForm = () => {
        const errors = validateStudentUpdateData(student, formData);
        if (errors.length > 0) {
            setError(errors.join(', '));
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!validateForm()) {
            setLoading(false);
            return;
        }

        try {
            const params = {
                id: student.id,
                lastchange: student.lastChange,
                name: formData.name.trim(),
                name_en: formData.name_en.trim() || null
            };

            console.log("Updating student with params:", params);
            
            const result = await dispatch(StudentUpdateAsyncAction(params));
            
            if (result?.data?.result?.__typename === "StudentGQLModelUpdateError") {
                console.error("Student update failed:", result.data.result);
                setError(`Nepodařilo se aktualizovat studenta: ${result.data.result.msg}`);
                return;
            }

            if (result?.data?.result) {
                console.log("Student updated successfully:", result.data.result);
                onSuccess?.(result.data.result);
            }
        } catch (err) {
            console.error("Update error details:", err);
            handleStudentUpdateError(err, setError, student, formData, onSuccess);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ 
            padding: '20px', 
            border: '1px solid #ddd', 
            borderRadius: '8px',
            backgroundColor: '#fff',
            maxWidth: '600px',
            margin: '0 auto'
        }}>
            <h3 style={{ margin: '0 0 20px 0', color: '#333' }}>
                Upravit studenta: {student?.name || 'Neznámý'}
            </h3>
            
            {/* Student ID and Last Change Info */}
            <div style={{ 
                marginBottom: '16px',
                padding: '12px',
                backgroundColor: '#f8f9fa',
                borderRadius: '4px',
                fontSize: '12px',
                color: '#666'
            }}>
                <div><strong>ID:</strong> {student?.id}</div>
                <div><strong>Poslední změna:</strong> {student?.lastChange ? new Date(student.lastChange).toLocaleString('cs-CZ') : 'Neznámé'}</div>
                {isMockStudent(student) && (
                    <div style={{ color: '#ff9800', marginTop: '4px' }}>
                        <strong>Testovací data:</strong> Změny budou simulovány lokálně
                    </div>
                )}
            </div>
            
            <form onSubmit={handleSubmit}>
                <StudentMediumEditableContent 
                    student={formData}
                    onChange={handleInputChange}
                />
                
                {error && (
                    <div style={{ 
                        padding: '12px', 
                        color: 'red', 
                        backgroundColor: '#ffebee', 
                        marginBottom: '16px',
                        borderRadius: '4px'
                    }}>
                        Chyba: {error}
                    </div>
                )}
                
                <div style={{ 
                    display: 'flex', 
                    gap: '12px', 
                    justifyContent: 'flex-end',
                    marginTop: '20px'
                }}>
                    <button
                        type="button"
                        onClick={onCancel}
                        disabled={loading}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#6c757d',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            fontSize: '14px'
                        }}
                    >
                        Zrušit
                    </button>
                    <button
                        type="submit"
                        disabled={loading || !formData.name.trim()}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: loading ? '#ccc' : '#28a745',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            fontSize: '14px'
                        }}
                    >
                        {loading ? 'Ukládám...' : 'Uložit změny'}
                    </button>
                </div>
            </form>
        </div>
    );
}; 