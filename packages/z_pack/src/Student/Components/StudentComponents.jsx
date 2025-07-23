// Reusable Student Components
import { StudentMediumContent } from './StudentMediumContent';
import { 
    formatDate, 
    getPaymentStatusColor, 
    getPaymentStatusText, 
    getStudentDisplayName 
} from './StudentUtils';

// Student Creation Form Component
export const StudentCreationForm = ({ onSubmit, loading, studentName, setStudentName }) => (
    <div style={{ 
        marginBottom: '20px', 
        padding: '16px', 
        border: '1px solid #ddd', 
        borderRadius: '4px',
        backgroundColor: '#f9f9f9'
    }}>
        <h4 style={{ margin: '0 0 12px 0', color: '#333' }}>Vytvořit nového studenta</h4>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Zadejte jméno studenta"
                style={{
                    flex: 1,
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                }}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        onSubmit();
                    }
                }}
            />
            <button
                onClick={onSubmit}
                disabled={loading || !studentName.trim()}
                style={{
                    padding: '8px 16px',
                    backgroundColor: loading ? '#ccc' : '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    fontSize: '14px'
                }}
            >
                {loading ? 'Vytváření...' : 'Vytvořit studenta'}
            </button>
        </div>
    </div>
);

// Student Card Component
export const StudentCard = ({ student, index, onEdit, showEditButton = true }) => (
    <div style={{ 
        marginBottom: '16px', 
        border: '1px solid #ddd', 
        borderRadius: '4px',
        padding: '16px',
        backgroundColor: '#f9f9f9',
        position: 'relative'
    }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <h4 style={{ margin: '0', color: '#333' }}>
                Student {index + 1}: {getStudentDisplayName(student)}
            </h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ 
                    color: getPaymentStatusColor(student),
                    fontWeight: 'bold',
                    fontSize: '14px'
                }}>
                    {getPaymentStatusText(student)}
                </div>
                {showEditButton && onEdit && (
                    <button
                        onClick={() => onEdit(student)}
                        style={{
                            padding: '6px 12px',
                            backgroundColor: '#28a745',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px',
                            fontWeight: 'bold'
                        }}
                    >
                        Upravit
                    </button>
                )}
            </div>
        </div>
        
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '8px',
            marginBottom: '12px',
            fontSize: '12px',
            color: '#666'
        }}>
            <div><strong>UUID:</strong> {student.id}</div>
            <div><strong>Semestr:</strong> {student.semester || 0}</div>
            <div><strong>Částka:</strong> {student.paymentInfo?.amount || 0} Kč</div>
            <div><strong>Poslední změna:</strong> {formatDate(student.lastChange)}</div>
        </div>
        
        <StudentMediumContent student={student} />
    </div>
);

// Status Messages Component
export const StatusMessages = ({ loading, error, studentsCount }) => (
    <>
        {loading && (
            <div style={{ padding: '16px', textAlign: 'center' }}>
                <div>Vytvářím studenta...</div>
            </div>
        )}
        
        {error && (
            <div style={{ padding: '16px', color: 'red', backgroundColor: '#ffebee', marginBottom: '16px' }}>
                Chyba: {error}
            </div>
        )}
        
        {studentsCount === 0 && !loading && !error && (
            <div style={{ padding: '16px', textAlign: 'center', color: '#666' }}>
                Zatím nebyli vytvořeni žádní studenti. Použijte formulář výše pro vytvoření studentů.
            </div>
        )}
        
        {studentsCount > 0 && (
            <div style={{ marginBottom: '16px', color: '#4caf50', fontWeight: 'bold' }}>
                Zobrazeno {studentsCount} studentů
            </div>
        )}
    </>
); 