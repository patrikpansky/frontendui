// Student Management Component - Combines List, Create, and Update
import { useState } from 'react';
import { StudentListForAdmission } from './StudentListForAdmission';
import { StudentListWithUpdate } from './StudentListWithUpdate';
import { StudentUpdatePage } from '../Pages/StudentUpdatePage';

export const StudentManagement = ({ mode = 'list' }) => {
    const [currentMode, setCurrentMode] = useState(mode);
    const [selectedStudentId, setSelectedStudentId] = useState(null);

    const handleBackToList = () => {
        setCurrentMode('list');
        setSelectedStudentId(null);
    };

    const handleUpdateStudent = (studentId) => {
        setSelectedStudentId(studentId);
        setCurrentMode('update');
    };

    const handleCreateMode = () => {
        setCurrentMode('create');
    };

    const renderContent = () => {
        switch (currentMode) {
            case 'create':
                return (
                    <div>
                        <div style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            marginBottom: '20px'
                        }}>
                            <h2 style={{ margin: '0', color: '#333' }}>
                                Vytvořit nového studenta
                            </h2>
                            <button
                                onClick={handleBackToList}
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
                        <StudentListForAdmission admission={{}} />
                    </div>
                );

            case 'update':
                return (
                    <StudentUpdatePage 
                        studentId={selectedStudentId}
                        onBack={handleBackToList}
                    />
                );

            case 'list':
            default:
                return (
                    <div>
                        <div style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            marginBottom: '20px'
                        }}>
                            <h2 style={{ margin: '0', color: '#333' }}>
                                Správa studentů
                            </h2>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <button
                                    onClick={handleCreateMode}
                                    style={{
                                        padding: '8px 16px',
                                        backgroundColor: '#007bff',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontSize: '14px'
                                    }}
                                >
                                    Vytvořit studenta
                                </button>
                            </div>
                        </div>
                        <StudentListWithUpdate 
                            onUpdateStudent={handleUpdateStudent}
                        />
                    </div>
                );
        }
    };

    return (
        <div style={{ padding: '16px' }}>
            {renderContent()}
        </div>
    );
}; 