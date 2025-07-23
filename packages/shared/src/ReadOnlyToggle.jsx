import React from 'react';
import { Button, Form, Nav } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { useReadOnly } from './ReadOnlyContext';

/**
 * Toggle component for switching between Editable and Read-only modes
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant (default: "outline-secondary")
 * @param {string} props.size - Button size (default: "sm")
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} ReadOnlyToggle component
 */
export const ReadOnlyToggle = ({ 
    variant = "outline-secondary", 
    size = "sm", 
    className = "",
    ...props 
}) => {
    const { isReadOnly, toggleReadOnly } = useReadOnly();

    return (
        <Button
            variant={isReadOnly ? "warning" : variant}
            size={size}
            className={`d-flex align-items-center gap-2 ${className}`}
            onClick={toggleReadOnly}
            {...props}
        >
            <Form.Check
                type="switch"
                checked={isReadOnly}
                onChange={() => {}} // Controlled by button click
                className="m-0"
                style={{ pointerEvents: 'none' }}
            />
            <span>{isReadOnly ? "Read-only" : "Editable"}</span>
        </Button>
    );
};

/**
 * Navigation component for switching between Editable and Read-only modes via URLs
 * 
 * @returns {JSX.Element} ReadOnlyNavigation component
 */
export const ReadOnlyNavigation = () => {
    const { isReadOnly } = useReadOnly();
    const navigate = useNavigate();
    const location = useLocation();

    const handleModeSwitch = (toReadOnly) => {
        const currentPath = location.pathname;
        let newPath;
        
        if (toReadOnly) {
            // Change /editable/ to /readonly/
            newPath = currentPath.replace('/editable/', '/readonly/');
        } else {
            // Change /readonly/ to /editable/
            newPath = currentPath.replace('/readonly/', '/editable/');
        }
        
        navigate(newPath);
    };

    return (
        <Nav className="gap-2">
            <Nav.Link 
                onClick={() => handleModeSwitch(false)}
                active={!isReadOnly}
                style={{ cursor: 'pointer' }}
            >
                Editable
            </Nav.Link>
            <Nav.Link 
                onClick={() => handleModeSwitch(true)}
                active={isReadOnly}
                style={{ cursor: 'pointer' }}
            >
                Readonly
            </Nav.Link>
        </Nav>
    );
};

/**
 * Simple text-based read-only indicator
 * 
 * @returns {JSX.Element} ReadOnlyIndicator component
 */
export const ReadOnlyIndicator = () => {
    const { isReadOnly } = useReadOnly();
    
    if (!isReadOnly) return null;
    
    return (
        <span className="badge bg-warning text-dark">
            Read-only Mode
        </span>
    );
};
