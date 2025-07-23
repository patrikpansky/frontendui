// Student Utilities - Reusable functions for student components

// Czech character normalization
export const normalizeCzechText = (text) => {
    const czechMap = {
        'á': 'a', 'č': 'c', 'ď': 'd', 'é': 'e', 'ě': 'e', 'í': 'i', 'ň': 'n',
        'ó': 'o', 'ř': 'r', 'š': 's', 'ť': 't', 'ú': 'u', 'ů': 'u', 'ý': 'y', 'ž': 'z',
        'Á': 'A', 'Č': 'C', 'Ď': 'D', 'É': 'E', 'Ě': 'E', 'Í': 'I', 'Ň': 'N',
        'Ó': 'O', 'Ř': 'R', 'Š': 'S', 'Ť': 'T', 'Ú': 'U', 'Ů': 'U', 'Ý': 'Y', 'Ž': 'Z'
    };
    
    return text.replace(/[áčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]/g, char => czechMap[char] || char);
};

// Generate email from name (handles Czech characters)
export const generateEmailFromName = (name) => {
    const normalizedName = normalizeCzechText(name.toLowerCase());
    const cleanName = normalizedName
        .replace(/[^a-z0-9\s]/g, '') // Remove special characters
        .replace(/\s+/g, '.') // Replace spaces with dots
        .replace(/\.+/g, '.') // Remove multiple dots
        .replace(/^\.|\.$/g, ''); // Remove leading/trailing dots
    
    return `${cleanName}@example.com`;
};

// Date formatting
export const formatDate = (dateString) => {
    if (!dateString) return 'Neznámé';
    try {
        return new Date(dateString).toLocaleString('cs-CZ');
    } catch (e) {
        return dateString;
    }
};

// Payment status utilities
export const getPaymentStatusColor = (student) => {
    if (student.paymentInfo?.paid === true) return '#4caf50';
    if (student.paymentInfo?.paid === false) return '#f44336';
    return '#666';
};

export const getPaymentStatusText = (student) => {
    if (student.paymentInfo?.paid === true) return 'Zaplaceno';
    if (student.paymentInfo?.paid === false) return 'Nezaplaceno';
    return 'Neznámý stav';
};

// Student display name
export const getStudentDisplayName = (student) => {
    if (student.student?.fullname) return student.student.fullname;
    if (student.student?.name) return student.student.name;
    if (student.student?.givenname && student.student?.surname) {
        return `${student.student.givenname} ${student.student.surname}`;
    }
    return `Student ${student.id?.substring(0, 8) || 'Neznámý'}`;
};

// Mock data detection
export const isMockStudent = (student) => {
    if (!student?.id) return false;
    return student.id.startsWith('mock-') || student.id.includes('12345678');
};

// Mock data creation
export const createMockStudents = () => [
    {
        id: '12345678-1234-1234-1234-123456789abc',
        name: 'Jan Novák',
        paymentInfo: { paid: true, amount: 5000 },
        semester: 0,
        lastChange: '2024-01-15T10:30:00Z',
        student: {
            fullname: 'Jan Novák',
            email: 'jan.novak@example.com'
        }
    },
    {
        id: '87654321-4321-4321-4321-cba987654321',
        name: 'Marie Svobodová',
        paymentInfo: { paid: false, amount: 5000 },
        semester: 0,
        lastChange: '2024-01-14T14:20:00Z',
        student: {
            fullname: 'Marie Svobodová',
            email: 'marie.svobodova@example.com'
        }
    },
    {
        id: 'abcdef12-3456-7890-abcd-ef1234567890',
        name: 'Petr Černý',
        paymentInfo: { paid: null, amount: 5000 },
        semester: 0,
        lastChange: '2024-01-13T09:15:00Z',
        student: {
            fullname: 'Petr Černý',
            email: 'petr.cerny@example.com'
        }
    }
];

export const createMockStudent = (name) => ({
    id: `mock-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    name: name,
    paymentInfo: { paid: false, amount: 5000 },
    semester: 0,
    lastChange: new Date().toISOString(),
    student: {
        fullname: name,
        email: generateEmailFromName(name)
    }
});

// Error handling utilities
export const handleStudentCreationError = (err, studentName, setStudents, setStudentName, setError) => {
    if (err.details) {
        const isFederationError = err.details[0]?.extensions?.code === 'DOWNSTREAM_SERVICE_ERROR';
        const serviceName = err.details[0]?.extensions?.serviceName;
        
        if (isFederationError) {
            console.log(`Federation error from ${serviceName} service. Creating mock student as fallback.`);
            
            const mockStudent = createMockStudent(studentName);
            setStudents(prev => [...prev, mockStudent]);
            setStudentName('');
            
            setError(`Server ${serviceName} není dostupný. Vytvořil jsem testovacího studenta.`);
        } else {
            const serverError = err.details[0]?.message || err.message;
            setError(`Chyba serveru: ${serverError}`);
        }
    } else {
        setError(`Chyba při vytváření studenta: ${err.message}`);
    }
};

// Update-specific error handling
export const handleStudentUpdateError = (err, setError, student, formData, onSuccess) => {
    if (err.details) {
        const isFederationError = err.details[0]?.extensions?.code === 'DOWNSTREAM_SERVICE_ERROR';
        const serviceName = err.details[0]?.extensions?.serviceName;
        
        if (isFederationError) {
            console.log(`Federation error from ${serviceName} service during update.`);
            
            // For mock data, simulate successful update
            if (isMockStudent(student)) {
                console.log("Mock student detected, simulating successful update");
                const updatedStudent = {
                    ...student,
                    name: formData.name.trim(),
                    name_en: formData.name_en.trim() || null,
                    lastChange: new Date().toISOString()
                };
                onSuccess?.(updatedStudent);
                return;
            }
            
            setError(`Server ${serviceName} není dostupný. Zkuste to prosím později.`);
        } else {
            const serverError = err.details[0]?.message || err.message;
            setError(`Chyba serveru: ${serverError}`);
        }
    } else {
        // For mock data or network errors, simulate success
        if (isMockStudent(student)) {
            console.log("Mock student detected, simulating successful update");
            const updatedStudent = {
                ...student,
                name: formData.name.trim(),
                name_en: formData.name_en.trim() || null,
                lastChange: new Date().toISOString()
            };
            onSuccess?.(updatedStudent);
            return;
        }
        
        setError(`Chyba při aktualizaci studenta: ${err.message}`);
    }
};

// Validation utilities
export const validateStudentUpdateData = (student, formData) => {
    const errors = [];
    
    if (!student?.id) {
        errors.push('Chybí ID studenta');
    }
    if (!student?.lastChange) {
        errors.push('Chybí datum poslední změny');
    }
    if (!formData?.name?.trim()) {
        errors.push('Název studenta je povinný');
    }
    
    return errors;
}; 