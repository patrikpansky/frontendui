// Student Demo Component - Shows how to use the modular system
import { useState } from 'react';
import { StudentManagement } from './StudentManagement';
import { StudentListForAdmission } from './StudentListForAdmission';
import { StudentUpdateForm } from './StudentUpdateForm';
import { createMockStudents } from './StudentUtils';

export const StudentDemo = () => {
    const [demoMode, setDemoMode] = useState('management');
    const [selectedStudent, setSelectedStudent] = useState(null);

    const mockStudents = createMockStudents();

    const handleStudentSelected = (student) => {
        setSelectedStudent(student);
        setDemoMode('update-form');
    };

    const handleBackToManagement = () => {
        setDemoMode('management');
        setSelectedStudent(null);
    };

    const renderDemoContent = () => {
        switch (demoMode) {
            case 'create-only':
                return (
                    <div>
                        <h2>Demo: Vytváření a úprava studentů</h2>
                        <p style={{ color: '#666', marginBottom: '16px' }}>
                            Vytvořte studenta a pak klikněte na tlačítko "Upravit" u kteréhokoliv studenta
                        </p>
                        <StudentListForAdmission admission={{}} />
                    </div>
                );

            case 'update-form':
                return (
                    <div>
                        <h2>Demo: Formulář pro úpravu</h2>
                        <button 
                            onClick={handleBackToManagement}
                            style={{
                                padding: '8px 16px',
                                backgroundColor: '#6c757d',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                marginBottom: '16px'
                            }}
                        >
                            Zpět
                        </button>
                        <StudentUpdateForm 
                            student={selectedStudent}
                            onSuccess={(updatedStudent) => {
                                console.log('Student updated:', updatedStudent);
                                handleBackToManagement();
                            }}
                            onCancel={handleBackToManagement}
                        />
                    </div>
                );

            case 'management':
            default:
                return (
                    <div>
                        <h2>Demo: Kompletní správa studentů</h2>
                        <p style={{ color: '#666', marginBottom: '16px' }}>
                            Klikněte na "Vytvořit studenta" nebo "Upravit" u kteréhokoliv studenta
                        </p>
                        <StudentManagement mode="list" />
                    </div>
                );
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ 
                display: 'flex', 
                gap: '12px', 
                marginBottom: '20px',
                flexWrap: 'wrap'
            }}>
                <button
                    onClick={() => setDemoMode('management')}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: demoMode === 'management' ? '#007bff' : '#6c757d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Kompletní správa
                </button>
                <button
                    onClick={() => setDemoMode('create-only')}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: demoMode === 'create-only' ? '#007bff' : '#6c757d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Vytváření + úprava
                </button>
                <button
                    onClick={() => handleStudentSelected(mockStudents[0])}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: demoMode === 'update-form' ? '#007bff' : '#6c757d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Formulář úpravy
                </button>
            </div>

            {renderDemoContent()}
        </div>
    );
}; 