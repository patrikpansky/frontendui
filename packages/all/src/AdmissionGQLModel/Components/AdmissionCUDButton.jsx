import { ButtonWithDialog, ErrorHandler, LoadingSpinner } from "@hrbolek/uoisfrontend-shared";

import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared";
import { AdmissionDeleteAsyncAction, AdmissionInsertAsyncAction, AdmissionUpdateAsyncAction } from "../Queries";
import { AdmissionMediumEditableContent } from "./AdmissionMediumEditableContent";

/**
 * AdmissionCUDButton Component
 *
 * A higher-order component that dynamically renders one of the following components
 * based on the `operation` prop:
 * - `InsertAdmissionButton` for creating a new item (operation "C")
 * - `UpdateAdmissionButton` for updating an existing item (operation "U")
 * - `DeleteAdmissionButton` for deleting an existing item (operation "D")
 *
 * This component validates the `admission` prop:
 * - For "C" (create), `admission` can be any object (no restrictions).
 * - For "U" (update) and "D" (delete), `admission` must include an `id` key.
 *
 * If the `operation` prop is invalid or required conditions for `admission` are not met,
 * an `ErrorHandler` component is rendered with an appropriate error message.
 *
 * @component
 * @param {Object} props - The props for the AdmissionCUDButton component.
 * @param {string} props.operation - The operation type ("C" for create, "U" for update, "D" for delete).
 * @param {React.ReactNode} props.children - The content or label for the button.
 * @param {Object} props.admission - The parameters for the operation. For "U" and "D", it must include an `id` key.
 * @param {string} [props.admission.id] - The unique identifier for the item (required for "U" and "D").
 * @param {string} [props.admission.name] - The name of the item (optional).
 * @param {string} [props.admission.name_en] - The English name of the item (optional).
 * @param {Function} [props.onDone=(admission) => {}] - Callback executed after the operation completes. Receives the `admission` object.
 * @param {...Object} props - Additional props passed to the underlying button components.
 *
 * @example
 * // Example Usage
 * const Example = () => {
 *   const handleDone = (data) => console.log("Operation completed:", data);
 *
 *   return (
 *     <>
 *       <AdmissionCUDButton
 *         operation="C"
 *         admission={{ name: "New Item", name_en: "New Item EN" }}
 *         onDone={handleDone}
 *       >
 *         Insert
 *       </AdmissionCUDButton>
 *
 *       <AdmissionCUDButton
 *         operation="U"
 *         admission={{ id: "123", name: "Updated Item", name_en: "Updated Item EN" }}
 *         onDone={handleDone}
 *       >
 *         Update
 *       </AdmissionCUDButton>
 *
 *       <AdmissionCUDButton
 *         operation="D"
 *         admission={{ id: "123" }}
 *         onDone={handleDone}
 *       >
 *         Delete
 *       </AdmissionCUDButton>
 *     </>
 *   );
 * };
 *
 * @returns {JSX.Element} The dynamically selected button component for the specified operation.
 */
export const AdmissionButton = ({ operation, children, admission, onDone = () => {}, ...props }) => {
    const operationConfig = {
        C: {
            asyncAction: AdmissionInsertAsyncAction,
            dialogTitle: "Vytvořit nové přijímací řízení",
            loadingMsg: "Vkládám nové přijímací řízení",
            renderContent: () => <AdmissionMediumEditableContent admission={admission} />,
        },
        U: {
            asyncAction: AdmissionUpdateAsyncAction,
            dialogTitle: "Upravit přijímací řízení",
            loadingMsg: "Ukládám přijímací řízení",
            renderContent: () => <AdmissionMediumEditableContent admission={admission} />,
        },
        D: {
            asyncAction: AdmissionDeleteAsyncAction,
            dialogTitle: "Chcete odebrat přijímací řízení?",
            loadingMsg: "Odstraňuji přijímací řízení",
            renderContent: () => (
                <h2>
                    {admission?.name} ({admission?.name_en})
                </h2>
            ),
        },
    };

    if (!operationConfig[operation]) {
        return <ErrorHandler errors={`Invalid operation value: '${operation}'. Must be one of 'C', 'U', or 'D'.`} />;
    }

    const { asyncAction, dialogTitle, loadingMsg, renderContent } = operationConfig[operation];

    const { error, loading, fetch, entity } = useAsyncAction(asyncAction, admission, { deferred: true });
    const handleClick = async (params = {}) => {
        const fetchParams = { ...admission, ...params };
        const freshAdmission = await fetch(fetchParams);
        onDone(freshAdmission); // Pass the result to the external callback
    };

    // Validate required fields for "U" and "D"
    if ((operation === 'U' || operation === 'D') && !admission?.id) {
        return <ErrorHandler errors={`For '${operation}' operation, 'admission' must include an 'id' key.`} />;
    }

    return (<>
        {error && <ErrorHandler errors={error} />}
        {loading && <LoadingSpinner text={loadingMsg} />}
        <ButtonWithDialog
            buttonLabel={children}
            dialogTitle={dialogTitle}
            {...props}
            params={admission}
            onClick={handleClick}
        >
            {renderContent()}
        </ButtonWithDialog>
    </>);
};

// // Prop validation using PropTypes
// AdmissionCUDButton.propTypes = {
//     /** The operation to perform: "C" for create, "U" for update, "D" for delete. */
//     operation: PropTypes.oneOf(['C', 'U', 'D']).isRequired,
//     /** The label or content for the button. */
//     children: PropTypes.node,
//     /** The parameters for the operation. */
//     admission: PropTypes.shape({
//         id: PropTypes.string, // Required for "U" and "D" operations
//         name: PropTypes.string,
//         name_en: PropTypes.string,
//     }).isRequired,
//     /** Callback executed after the operation completes. Receives the `admission` object. */
//     onDone: PropTypes.func,
// };

// // Default props
// AdmissionCUDButton.defaultProps = {
//     onDone: () => {},
// };