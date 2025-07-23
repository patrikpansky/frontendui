// Student List with Update Functionality
import { useState, useEffect } from 'react';
import { StudentCard, StatusMessages } from './StudentComponents';
import { createMockStudents, getStudentDisplayName } from './StudentUtils';
import { StudentUpdateForm } from './StudentUpdateForm';

export const StudentListWithUpdate = ({ students, onUpdateStudent, onBackToUpdate }) => {
    const [localStudents, setLocalStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [editingStudent, setEditingStudent] = useState(null);

    // Initialize with provided students or mock data
    useEffect(() => {
        if (students && students.length > 0) {
            setLocalStudents(students);
        } else {
            setLocalStudents(createMockStudents());
        }
    }, [students]);

    const handleUpdateClick = (student) => {
        if (onUpdateStudent) {
            onUpdateStudent(student);
        } else {
            setEditingStudent(student);
        }
    };

    const handleStudentUpdated = (updatedStudent) => {
        setLocalStudents(prev => 
            prev.map(student => 
                student.id === updatedStudent.id ? updatedStudent : student
            )
        );
        setEditingStudent(null);
        console.log("Student updated successfully:", updatedStudent);
    };

    const handleCancelEdit = () => {
        setEditingStudent(null);
    };

    // If editing, show the update form
    if (editingStudent) {
        return (
            <div style={{ padding: '16px' }}>
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '20px'
                }}>
                    <h3>Upravit studenta</h3>
                    <button
                        onClick={handleCancelEdit}
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
                        Zpět na seznam
                    </button>
                </div>
                
                <StudentUpdateForm 
                    student={editingStudent}
                    onSuccess={handleStudentUpdated}
                    onCancel={handleCancelEdit}
                />
            </div>
        );
    }

    return (
        <div style={{ padding: '16px' }}>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '20px'
            }}>
                <h3 style={{ margin: '0', color: '#333' }}>
                    Seznam studentů
                </h3>
                {onBackToUpdate && (
                    <button
                        onClick={() => onBackToUpdate()}
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
                )}
            </div>

            <StatusMessages 
                loading={loading}
                error={error}
                studentsCount={localStudents.length}
            />

            {localStudents.map((student, index) => (
                <StudentCard 
                    key={student.id || index} 
                    student={student} 
                    index={index}
                    onEdit={handleUpdateClick}
                    showEditButton={true}
                />
            ))}
        </div>
    );
}; 