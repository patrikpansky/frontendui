import ReactDOM from "react-dom";

const overlayStyle = {
    position: "fixed", // Changed from "fixed"
    width: "90vw", // Span 90% of the overlay
    top: 0,
    left: "5vw",
    // transform: "translateX(-50%)",
    height: "90vh",
    // display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
};

const errorDisplayStyle = {
    position: "relative",
    width: "100%", // Span 90% of the overlay
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background
    borderRadius: "8px", // Add rounded corners
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add a subtle shadow for elevation
    padding: "16px", // Add padding for better readability
    zIndex: 10000, // Ensure it's above the overlay background
};

export const ErrorHandler = ({ errors = "DEMO ERROR" }) => {
    let parsedErrors;

    try {
        parsedErrors = Array.isArray(errors) ? errors : JSON.parse(errors);
    } catch {
        parsedErrors = [{ message: "Unparsable error", raw: errors }];
    }

    return ReactDOM.createPortal(
        <div style={overlayStyle}>
            <div style={errorDisplayStyle}>
                <h2>Error</h2>
                <ErrorDisplay errors={parsedErrors} />
            </div>
        </div>,
        document.body // Ensure it renders at the root of the DOM
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
                    {error?.raw && JSON.stringify(error.raw)}
                    {JSON.stringify(error)}
                    {error?.raw?.toString && JSON.stringify(error.raw.toString())}
                    {/* {error?.raw?.toString && JSON.stringify(error.toString())} */}
                </div>
            ))}
        </div>
    );
};