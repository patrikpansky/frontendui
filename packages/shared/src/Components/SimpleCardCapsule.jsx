const styles = {
    capsuleContainer: {
        position: "relative", // Allows positioning of the title
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid #6c757d", // Border around the component
        borderRadius: "8px", // Rounded corners
        padding: "16px", // Padding inside the container
        margin: "16px 0", // Margin around the container
        color: "#6c757d",
        backgroundColor: "white",
        textAlign: "center",
    },
    capsuleTitle: {
        position: "absolute", // Position the title on the border
        top: "-10px", // Move above the border
        left: "50%", // Center horizontally
        transform: "translateX(-50%)", // Adjust for horizontal centering
        backgroundColor: "white", // Match background color to container
        padding: "0 8px", // Add some padding around the text
        textTransform: "uppercase",
        fontSize: "0.85rem",
        fontWeight: "bold",
        letterSpacing: "0.05em",
        color: "#6c757d",
    },
    childrenWrapper: {
        width: "100%", // Ensure children fill the width of the container
        textAlign: "left", // Align child content to the left
    },
};

export const SimpleCardCapsule = ({ title, children }) => {
    return (
        <div style={styles.capsuleContainer}>
            <span style={styles.capsuleTitle}>{title}</span>
            <div style={styles.childrenWrapper}>
                {children}
            </div>
        </div>
    );
};