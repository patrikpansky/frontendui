export const ErrorHandler = ({ errors }) => {
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