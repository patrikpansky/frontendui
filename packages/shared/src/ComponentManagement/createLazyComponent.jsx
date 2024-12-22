import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { useFreshItem } from "@hrbolek/uoisfrontend-gql-shared";


const LoadingSpinner = ({ text = "Loading..." }) => (
    <div style={overlayStyle}>
        <div style={spinnerContainerStyle}>
            <div style={spinnerStyle}></div>
            <span style={textStyle}>{text}</span>
        </div>
        <style>{`
            @keyframes spin {
                to {
                    transform: rotate(360deg);
                }
            }
        `}</style>
    </div>
);

// Styles for the overlay and spinner
const overlayStyle = {
    position: "fixed",
    top: 0,
    left: "50%",       // Centers it horizontally
    transform: "translateX(-50%)", // Adjusts for its own width
    width: "10vw",
    height: "20vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
    zIndex: 9999, // Ensure it's above all other components
};

const spinnerContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};

const spinnerStyle = {
    width: "60px", // Larger size
    height: "60px",
    border: "6px solid rgba(0, 0, 0, 0.2)",
    borderTopColor: "#007bff", // Spinner color
    borderRadius: "50%",
    animation: "spin 1s infinite linear",
    marginBottom: "15px",
};

const textStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#555",
};

const ErrorHandler = ({ errors }) => {
    let parsedErrors;

    try {
        parsedErrors = Array.isArray(errors) ? errors : JSON.parse(errors);
    } catch {
        parsedErrors = [{ message: "Unparsable error", raw: errors }];
    }

    return (
        <div>
            <h2>Error</h2>
            <ErrorDisplay errors={parsedErrors} />
        </div>
    );
};

const ErrorExtensionsDisplay = ({ extensions }) => {
    if (!extensions) {
        return null;
    }

    return (
        <div style={{ marginTop: "10px", padding: "10px", border: "1px solid lightgray", background: "#f9f9f9" }}>
            {extensions.serviceName && (
                <p><strong>Service:</strong> {extensions.serviceName}</p>
            )}
            {extensions.code && (
                <p><strong>Code:</strong> {extensions.code}</p>
            )}
            {extensions.exception?.msg && (
                <div>
                    <strong>Exception Message:</strong>
                    <pre>{extensions.exception.msg}</pre>
                </div>
            )}
            {extensions.msg_e && (
                <div>
                    <strong>Details:</strong>
                    <pre>{extensions.msg_e.join("\n")}</pre>
                </div>
            )}
            {extensions.stacktrace && (
                <details>
                    <summary><strong>Stacktrace</strong></summary>
                    <pre>{extensions.stacktrace.join("\n")}</pre>
                </details>
            )}
        </div>
    );
};

const ErrorDisplay = ({ errors }) => {
    if (!Array.isArray(errors)) {
        return <p>No errors to display.</p>;
    }

    return (
        <div>
            {errors.map((error, index) => (
                <div key={index} style={{ border: "1px solid red", marginBottom: "10px", padding: "10px" }}>
                    <h4>Error {index + 1}</h4>
                    <p><strong>Message:</strong> {error.message}</p>
                    {error.path && (
                        <p><strong>Path:</strong> {error.path.join(" > ")}</p>
                    )}
                    <ErrorExtensionsDisplay extensions={error.extensions} />
                </div>
            ))}
        </div>
    );
};

/**
 * Higher-order function to create a lazy-loading component that fetches an entity using a custom hook.
 *
 * This function wraps a given component (`WrappedComponent`) and dynamically fetches the specified
 * entity (`entityName`) using an asynchronous Redux action (`asyncAction`). It manages loading, error,
 * and success states, and injects the fetched entity into the wrapped component as a prop.
 *
 * @function
 * @param {React.ComponentType} WrappedComponent - The component that will display the fetched entity.
 * @param {string} entityName - The name of the prop representing the entity to be fetched.
 * @param {Function} asyncAction - The asynchronous Redux action used to fetch the entity data.
 *
 * @returns {React.ComponentType} A lazy-loading component that handles the fetching of the entity
 * and passes it to the wrapped component.
 *
 * @example
 * // Example usage:
 * const MyComponent = ({ user }) => <div>User Name: {user.name}</div>;
 * 
 * const exampleQuery = `
 *   query ExampleQuery($id: ID!) {
 *     user(id: $id) {
 *       id
 *       name
 *       groups {
 *          __typename
 *          id
 *          name
 *       }
 *     }
 *   }
 * `;
 *
  * // Create an async action
 * const asyncFetchUser = createAsyncGraphQLAction(
 *   exampleQuery,
 *   processVectorAttributeFromGraphQLResult("groups"),
 *   updateItemsFromGraphQLResult
 * );
 * 
 * const LazyUserComponent = createLazyComponent(MyComponent, "user", asyncFetchUser);
 * 
 * <LazyUserComponent user="123" />
 */
export const createLazyComponent = (WrappedComponent, entityName, asyncAction) => {
    function LazyComponent(props) {
        const entityValue = props[entityName];
        const [result, promise, state] = useFreshItem(entityValue, asyncAction);

        if (result) {
            const wrappedProps = {
                ...props,
                [entityName]: result,
            };

            return (
                <>
                    <WrappedComponent {...wrappedProps} />
                    {state.loading && <LoadingSpinner text="Aktualizuji..." />}
                </>
            );
        }

        if (state.loading) {
            return <LoadingSpinner text="Nahrávám..." />;
        }

        if (state.errors) {
            return <ErrorHandler errors={state.errors} />;
        }

        return (
            <div>
                <h2>Nenalezeno</h2>
                <p>Data not found or unknown issue occurred.</p>
            </div>
        );
    }

    LazyComponent.displayName = `Lazy${entityName}Component`;
    return LazyComponent;
};
