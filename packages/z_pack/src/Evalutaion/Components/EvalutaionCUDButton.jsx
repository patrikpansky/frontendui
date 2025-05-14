import { ButtonWithDialog, ErrorHandler, LoadingSpinner } from "@hrbolek/uoisfrontend-shared";

import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared";
import { EvalutaionDeleteAsyncAction, EvalutaionInsertAsyncAction, EvalutaionUpdateAsyncAction } from "../Queries";
import { EvalutaionMediumEditableContent } from "./EvalutaionMediumEditableContent";

/**
 * EvalutaionCUDButton Component
 *
 * A higher-order component that dynamically renders one of the following components
 * based on the `operation` prop:
 * - `InsertEvalutaionButton` for creating a new item (operation "C")
 * - `UpdateEvalutaionButton` for updating an existing item (operation "U")
 * - `DeleteEvalutaionButton` for deleting an existing item (operation "D")
 *
 * This component validates the `evalutaion` prop:
 * - For "C" (create), `evalutaion` can be any object (no restrictions).
 * - For "U" (update) and "D" (delete), `evalutaion` must include an `id` key.
 *
 * If the `operation` prop is invalid or required conditions for `evalutaion` are not met,
 * an `ErrorHandler` component is rendered with an appropriate error message.
 *
 * @component
 * @param {Object} props - The props for the EvalutaionCUDButton component.
 * @param {string} props.operation - The operation type ("C" for create, "U" for update, "D" for delete).
 * @param {React.ReactNode} props.children - The content or label for the button.
 * @param {Object} props.evalutaion - The parameters for the operation. For "U" and "D", it must include an `id` key.
 * @param {string} [props.evalutaion.id] - The unique identifier for the item (required for "U" and "D").
 * @param {string} [props.evalutaion.name] - The name of the item (optional).
 * @param {string} [props.evalutaion.name_en] - The English name of the item (optional).
 * @param {Function} [props.onDone=(evalutaion) => {}] - Callback executed after the operation completes. Receives the `evalutaion` object.
 * @param {...Object} props - Additional props passed to the underlying button components.
 *
 * @example
 * // Example Usage
 * const Example = () => {
 *   const handleDone = (data) => console.log("Operation completed:", data);
 *
 *   return (
 *     <>
 *       <EvalutaionCUDButton
 *         operation="C"
 *         evalutaion={{ name: "New Item", name_en: "New Item EN" }}
 *         onDone={handleDone}
 *       >
 *         Insert
 *       </EvalutaionCUDButton>
 *
 *       <EvalutaionCUDButton
 *         operation="U"
 *         evalutaion={{ id: "123", name: "Updated Item", name_en: "Updated Item EN" }}
 *         onDone={handleDone}
 *       >
 *         Update
 *       </EvalutaionCUDButton>
 *
 *       <EvalutaionCUDButton
 *         operation="D"
 *         evalutaion={{ id: "123" }}
 *         onDone={handleDone}
 *       >
 *         Delete
 *       </EvalutaionCUDButton>
 *     </>
 *   );
 * };
 *
 * @returns {JSX.Element} The dynamically selected button component for the specified operation.
 */
export const EvalutaionButton = ({ operation, children, evalutaion, onDone = () => {}, ...props }) => {
    const operationConfig = {
        C: {
            asyncAction: EvalutaionInsertAsyncAction,
            dialogTitle: "Vložit novou evalutaion",
            loadingMsg: "Vkládám novou evalutaion",
            renderContent: () => <EvalutaionMediumEditableContent evalutaion={evalutaion} />,
        },
        U: {
            asyncAction: EvalutaionUpdateAsyncAction,
            dialogTitle: "Upravit evalutaion",
            loadingMsg: "Ukládám evalutaion",
            renderContent: () => <EvalutaionMediumEditableContent evalutaion={evalutaion} />,
        },
        D: {
            asyncAction: EvalutaionDeleteAsyncAction,
            dialogTitle: "Chcete odebrat evalutaion?",
            loadingMsg: "Odstraňuji evalutaion",
            renderContent: () => (
                <h2>
                    {evalutaion?.name} ({evalutaion?.name_en})
                </h2>
            ),
        },
    };

    if (!operationConfig[operation]) {
        return <ErrorHandler errors={`Invalid operation value: '${operation}'. Must be one of 'C', 'U', or 'D'.`} />;
    }

    const { asyncAction, dialogTitle, loadingMsg, renderContent } = operationConfig[operation];

    const { error, loading, fetch, entity } = useAsyncAction(asyncAction, evalutaion, { deferred: true });
    const handleClick = async (params = {}) => {
        const fetchParams = { ...evalutaion, ...params };
        const freshEvalutaion = await fetch(fetchParams);
        onDone(freshEvalutaion); // Pass the result to the external callback
    };

    // Validate required fields for "U" and "D"
    if ((operation === 'U' || operation === 'D') && !evalutaion?.id) {
        return <ErrorHandler errors={`For '${operation}' operation, 'evalutaion' must include an 'id' key.`} />;
    }

    return (<>
        {error && <ErrorHandler errors={error} />}
        {loading && <LoadingSpinner text={loadingMsg} />}
        <ButtonWithDialog
            buttonLabel={children}
            dialogTitle={dialogTitle}
            {...props}
            params={evalutaion}
            onClick={handleClick}
        >
            {renderContent()}
        </ButtonWithDialog>
    </>);
};

// // Prop validation using PropTypes
// EvalutaionCUDButton.propTypes = {
//     /** The operation to perform: "C" for create, "U" for update, "D" for delete. */
//     operation: PropTypes.oneOf(['C', 'U', 'D']).isRequired,
//     /** The label or content for the button. */
//     children: PropTypes.node,
//     /** The parameters for the operation. */
//     evalutaion: PropTypes.shape({
//         id: PropTypes.string, // Required for "U" and "D" operations
//         name: PropTypes.string,
//         name_en: PropTypes.string,
//     }).isRequired,
//     /** Callback executed after the operation completes. Receives the `evalutaion` object. */
//     onDone: PropTypes.func,
// };

// // Default props
// EvalutaionCUDButton.defaultProps = {
//     onDone: () => {},
// };