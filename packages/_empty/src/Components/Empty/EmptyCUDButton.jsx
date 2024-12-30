import { ErrorHandler } from "@hrbolek/uoisfrontend-shared";
import { InsertEmptyButton } from "./InsertEmptyButton";
import { UpdateEmptyButton } from "./UpdateEmptyButton";
import { DeleteEmptyButton } from "./DeleteEmptyButton";

/**
 * EmptyCUDButton Component
 *
 * A higher-order component that dynamically renders one of the following components
 * based on the `operation` prop:
 * - `InsertEmptyButton` for creating a new item (operation "C")
 * - `UpdateEmptyButton` for updating an existing item (operation "U")
 * - `DeleteEmptyButton` for deleting an existing item (operation "D")
 *
 * This component validates the `empty` prop:
 * - For "C" (create), `empty` can be any object (no restrictions).
 * - For "U" (update) and "D" (delete), `empty` must include an `id` key.
 *
 * If the `operation` prop is invalid or required conditions for `empty` are not met,
 * an `ErrorHandler` component is rendered with an appropriate error message.
 *
 * @component
 * @param {Object} props - The props for the EmptyCUDButton component.
 * @param {string} props.operation - The operation type ("C" for create, "U" for update, "D" for delete).
 * @param {React.ReactNode} props.children - The content or label for the button.
 * @param {Object} props.empty - The parameters for the operation. For "U" and "D", it must include an `id` key.
 * @param {string} [props.empty.id] - The unique identifier for the item (required for "U" and "D").
 * @param {string} [props.empty.name] - The name of the item (optional).
 * @param {string} [props.empty.name_en] - The English name of the item (optional).
 * @param {Function} [props.onDone=(empty) => {}] - Callback executed after the operation completes. Receives the `empty` object.
 * @param {...Object} props - Additional props passed to the underlying button components.
 *
 * @example
 * // Example Usage
 * const Example = () => {
 *   const handleDone = (data) => console.log("Operation completed:", data);
 *
 *   return (
 *     <>
 *       <EmptyCUDButton
 *         operation="C"
 *         empty={{ name: "New Item", name_en: "New Item EN" }}
 *         onDone={handleDone}
 *       >
 *         Insert
 *       </EmptyCUDButton>
 *
 *       <EmptyCUDButton
 *         operation="U"
 *         empty={{ id: "123", name: "Updated Item", name_en: "Updated Item EN" }}
 *         onDone={handleDone}
 *       >
 *         Update
 *       </EmptyCUDButton>
 *
 *       <EmptyCUDButton
 *         operation="D"
 *         empty={{ id: "123" }}
 *         onDone={handleDone}
 *       >
 *         Delete
 *       </EmptyCUDButton>
 *     </>
 *   );
 * };
 *
 * @returns {JSX.Element} The dynamically selected button component for the specified operation.
 */
export const EmptyCUDButton = ({ operation, children, empty, onDone, ...props }) => {
    const operationMap = {
        C: InsertEmptyButton,
        U: UpdateEmptyButton,
        D: DeleteEmptyButton,
    };

    if (!empty) {
        return <ErrorHandler errors="The 'empty' parameter is required for EmptyCUDButton." />;
    }

    if ((operation === 'U' || operation === 'D') && !empty.id) {
        return <ErrorHandler errors={`For '${operation}' operation, 'empty' must include an 'id' key.`} />;
    }

    const Component = operationMap[operation];
    if (!Component) {
        return <ErrorHandler errors={`Invalid operation value: '${operation}'. Must be one of 'C', 'U', or 'D'.`} />;
    }

    return <Component children={children} empty={empty} onDone={onDone} {...props} />;
};

// Prop validation
EmptyCUDButton.propTypes = {
    operation: PropTypes.oneOf(['C', 'U', 'D']).isRequired, // Restrict to valid operations
    children: PropTypes.node,
    empty: PropTypes.shape({
        id: PropTypes.string, // Optional for 'C', required for 'U' and 'D'
        name: PropTypes.string,
        name_en: PropTypes.string,
    }).isRequired,
    onDone: PropTypes.func,
};

// Default callback
EmptyCUDButton.defaultProps = {
    onDone: () => {},
};