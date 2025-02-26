import { ButtonWithDialog, ErrorHandler, LoadingSpinner } from "@hrbolek/uoisfrontend-shared";
// import { InsertEmptyButton } from "./CUDButtons/InsertEmptyButton";
// import { UpdateEmptyButton } from "./CUDButtons/UpdateEmptyButton";
// import { DeleteEmptyButton } from "./CUDButtons/DeleteEmptyButton";
import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared";

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
export const EmptyButton = ({ operation, children, empty, onDone = () => {}, ...props }) => {
    const operationConfig = {
        C: {
            asyncAction: EmptyInsertAsyncAction,
            dialogTitle: "Vložit novou empty",
            loadingMsg: "Vkládám novou empty",
            renderContent: () => <EmptyMediumEditableContent empty={empty} />,
        },
        U: {
            asyncAction: EmptyUpdateAsyncAction,
            dialogTitle: "Upravit empty",
            loadingMsg: "Ukládám empty",
            renderContent: () => <EmptyMediumEditableContent empty={empty} />,
        },
        D: {
            asyncAction: EmptyDeleteAsyncAction,
            dialogTitle: "Chcete odebrat empty?",
            loadingMsg: "Odstraňuji empty",
            renderContent: () => (
                <h2>
                    {empty?.name} ({empty?.name_en})
                </h2>
            ),
        },
    };

    if (!operationConfig[operation]) {
        return <ErrorHandler errors={`Invalid operation value: '${operation}'. Must be one of 'C', 'U', or 'D'.`} />;
    }

    const { asyncAction, dialogTitle, loadingMsg, renderContent } = operationConfig[operation];

    const { error, loading, fetch, entity } = useAsyncAction(asyncAction, empty, { deferred: true });
    const handleClick = async (params = {}) => {
        const fetchParams = { ...empty, ...params };
        const freshEmpty = await fetch(fetchParams);
        onDone(freshEmpty); // Pass the result to the external callback
    };

    // Validate required fields for "U" and "D"
    if ((operation === 'U' || operation === 'D') && !empty?.id) {
        return <ErrorHandler errors={`For '${operation}' operation, 'empty' must include an 'id' key.`} />;
    }

    return (<>
        {error && <ErrorHandler errors={error} />}
        {loading && <LoadingSpinner text={loadingMsg} />}
        <ButtonWithDialog
            buttonLabel={children}
            dialogTitle={dialogTitle}
            {...props}
            params={empty}
            onClick={handleClick}
        >
            {renderContent()}
        </ButtonWithDialog>
    </>);
};

// Prop validation using PropTypes
EmptyCUDButton.propTypes = {
    /** The operation to perform: "C" for create, "U" for update, "D" for delete. */
    operation: PropTypes.oneOf(['C', 'U', 'D']).isRequired,
    /** The label or content for the button. */
    children: PropTypes.node,
    /** The parameters for the operation. */
    empty: PropTypes.shape({
        id: PropTypes.string, // Required for "U" and "D" operations
        name: PropTypes.string,
        name_en: PropTypes.string,
    }).isRequired,
    /** Callback executed after the operation completes. Receives the `empty` object. */
    onDone: PropTypes.func,
};

// Default props
EmptyCUDButton.defaultProps = {
    onDone: () => {},
};