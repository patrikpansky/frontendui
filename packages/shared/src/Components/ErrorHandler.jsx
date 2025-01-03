import { Modal } from "react-bootstrap";

export const ErrorHandler = ({ errors = "DEMO ERROR", show = true, onClose = () => {} }) => {
    let parsedErrors;

    try {
        parsedErrors = Array.isArray(errors) ? errors : JSON.parse(errors);
    } catch {
        parsedErrors = [{ message: "Unparsable error", raw: errors }];
    }

    return (
        <Modal
            show={show}
            onHide={onClose}
            centered
            backdrop="static" // Prevent closing the modal by clicking outside
            size="xl" // Adjust size as needed
            aria-labelledby="error-handler-title"
        >
            <Modal.Header closeButton>
                <Modal.Title id="error-handler-title">Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ErrorDisplay errors={parsedErrors} />
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-primary" onClick={onClose}>
                    Close
                </button>
            </Modal.Footer>
        </Modal>
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
            A"{JSON.stringify(errors)}"Z<br />
            A"{JSON.stringify(errors[0].raw)}"Z
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