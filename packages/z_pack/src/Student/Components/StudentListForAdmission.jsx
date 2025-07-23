// VERSION: 3.0 - Modular and clean architecture
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { StudentInsertForAdmissionAsyncAction } from '../Queries/StudentInsertForAdmissionAsyncAction';
import { 
    createMockStudents, 
    createMockStudent, 
    handleStudentCreationError
} from './StudentUtils';
import { 
    StudentCreationForm, 
    StudentCard, 
    StatusMessages 
} from './StudentComponents';
import { StudentUpdateForm } from './StudentUpdateForm';

// Main Component
export const StudentListForAdmission = ({ admission }) => {
    const dispatch = useDispatch();
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [studentName, setStudentName] = useState('');
    const [editingStudent, setEditingStudent] = useState(null);

    // Load mock data on mount
    useEffect(() => {
        setStudents(createMockStudents());
    }, []);

    const createStudent = async (studentName) => {
        setLoading(true);
        setError(null);
        
        try {
            const params = { id: null, name: studentName };
            console.log("Creating student with params:", params);
            
            const result = await dispatch(StudentInsertForAdmissionAsyncAction(params));
            
            if (result?.data?.result?.__typename === "InsertError") {
                console.error("Student creation failed:", result.data.result);
                setError(`Nepodařilo se vytvořit studenta: ${result.data.result.msg}`);
                return;
            }

            if (result?.data?.result) {
                const newStudent = result.data.result;
                setStudents(prev => [...prev, newStudent]);
                console.log("Student created successfully:", newStudent);
                setStudentName('');
            }
        } catch (err) {
            handleStudentCreationError(err, studentName, setStudents, setStudentName, setError);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateStudent = () => {
        if (!studentName.trim()) {
            setError('Prosím zadejte jméno studenta');
            return;
        }
        createStudent(studentName.trim());
    };

    const handleEditStudent = (student) => {
        setEditingStudent(student);
    };

    const handleUpdateSuccess = (updatedStudent) => {
        setStudents(prev => 
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
                    onSuccess={handleUpdateSuccess}
                    onCancel={handleCancelEdit}
                />
            </div>
        );
    }

    return (
        <div style={{ padding: '16px' }}>
            <h3>Studenti pro přijetí</h3>
            
            <StudentCreationForm 
                onSubmit={handleCreateStudent}
                loading={loading}
                studentName={studentName}
                setStudentName={setStudentName}
            />
            
            <StatusMessages 
                loading={loading}
                error={error}
                studentsCount={students.length}
            />
            
            {students.map((student, index) => (
                <StudentCard 
                    key={student.id || index} 
                    student={student} 
                    index={index}
                    onEdit={handleEditStudent}
                    showEditButton={true}
                />
            ))}
        </div>
    );
}; 