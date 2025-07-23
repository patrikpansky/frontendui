import React, { createContext, useContext, useState } from 'react';

/**
 * Context for managing read-only state across the application
 */
const ReadOnlyContext = createContext();

/**
 * Provider component for read-only state management
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} ReadOnlyProvider component
 */
export const ReadOnlyProvider = ({ children }) => {
    const [isReadOnly, setIsReadOnly] = useState(false);

    const toggleReadOnly = () => {
        setIsReadOnly(!isReadOnly);
    };

    const value = {
        isReadOnly,
        setIsReadOnly,
        toggleReadOnly
    };

    return (
        <ReadOnlyContext.Provider value={value}>
            {children}
        </ReadOnlyContext.Provider>
    );
};

/**
 * Hook to use read-only context
 * 
 * @returns {Object} Read-only context value
 * @throws {Error} If used outside of ReadOnlyProvider
 */
export const useReadOnly = () => {
    const context = useContext(ReadOnlyContext);
    if (!context) {
        throw new Error('useReadOnly must be used within a ReadOnlyProvider');
    }
    return context;
};

/**
 * Higher-order component to inject read-only state as props
 * 
 * @param {React.Component} Component - Component to wrap
 * @returns {React.Component} Wrapped component with read-only props
 */
export const withReadOnly = (Component) => {
    return (props) => {
        const readOnlyState = useReadOnly();
        return <Component {...props} {...readOnlyState} />;
    };
};
