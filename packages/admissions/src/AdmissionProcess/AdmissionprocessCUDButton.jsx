import { ButtonWithDialog, ErrorHandler, LoadingSpinner } from "@hrbolek/uoisfrontend-shared";
// import { InsertAdmissionprocessButton } from "./CUDButtons/InsertAdmissionprocessButton";
// import { UpdateAdmissionprocessButton } from "./CUDButtons/UpdateAdmissionprocessButton";
// import { DeleteAdmissionprocessButton } from "./CUDButtons/DeleteAdmissionprocessButton";
import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared";

/**
 * AdmissionprocessCUDButton Component
 *
 * A higher-order component that dynamically renders one of the following components
 * based on the `operation` prop:
 * - `InsertAdmissionprocessButton` for creating a new item (operation "C")
 * - `UpdateAdmissionprocessButton` for updating an existing item (operation "U")
 * - `DeleteAdmissionprocessButton` for deleting an existing item (operation "D")
 *
 * This component validates the `admissionprocess` prop:
 * - For "C" (create), `admissionprocess` can be any object (no restrictions).
 * - For "U" (update) and "D" (delete), `admissionprocess` must include an `id` key.
 *
 * If the `operation` prop is invalid or required conditions for `admissionprocess` are not met,
 * an `ErrorHandler` component is rendered with an appropriate error message.
 *
 * @component
 * @param {Object} props - The props for the AdmissionprocessCUDButton component.
 * @param {string} props.operation - The operation type ("C" for create, "U" for update, "D" for delete).
 * @param {React.ReactNode} props.children - The content or label for the button.
 * @param {Object} props.admissionprocess - The parameters for the operation. For "U" and "D", it must include an `id` key.
 * @param {string} [props.admissionprocess.id] - The unique identifier for the item (required for "U" and "D").
 * @param {string} [props.admissionprocess.name] - The name of the item (optional).
 * @param {string} [props.admissionprocess.name_en] - The English name of the item (optional).
 * @param {Function} [props.onDone=(admissionprocess) => {}] - Callback executed after the operation completes. Receives the `admissionprocess` object.
 * @param {...Object} props - Additional props passed to the underlying button components.
 *
 * @example
 * // Example Usage
 * const Example = () => {
 *   const handleDone = (data) => console.log("Operation completed:", data);
 *
 *   return (
 *     <>
 *       <AdmissionprocessCUDButton
 *         operation="C"
 *         admissionprocess={{ name: "New Item", name_en: "New Item EN" }}
 *         onDone={handleDone}
 *       >
 *         Insert
 *       </AdmissionprocessCUDButton>
 *
 *       <AdmissionprocessCUDButton
 *         operation="U"
 *         admissionprocess={{ id: "123", name: "Updated Item", name_en: "Updated Item EN" }}
 *         onDone={handleDone}
 *       >
 *         Update
 *       </AdmissionprocessCUDButton>
 *
 *       <AdmissionprocessCUDButton
 *         operation="D"
 *         admissionprocess={{ id: "123" }}
 *         onDone={handleDone}
 *       >
 *         Delete
 *       </AdmissionprocessCUDButton>
 *     </>
 *   );
 * };
 *
 * @returns {JSX.Element} The dynamically selected button component for the specified operation.
 */
export const AdmissionprocessButton = ({ operation, children, admissionprocess, onDone = () => {}, ...props }) => {
    const operationConfig = {
        C: {
            asyncAction: AdmissionprocessInsertAsyncAction,
            dialogTitle: "Vložit novou admissionprocess",
            loadingMsg: "Vkládám novou admissionprocess",
            renderContent: () => <AdmissionprocessMediumEditableContent admissionprocess={admissionprocess} />,
        },
        U: {
            asyncAction: AdmissionprocessUpdateAsyncAction,
            dialogTitle: "Upravit admissionprocess",
            loadingMsg: "Ukládám admissionprocess",
            renderContent: () => <AdmissionprocessMediumEditableContent admissionprocess={admissionprocess} />,
        },
        D: {
            asyncAction: AdmissionprocessDeleteAsyncAction,
            dialogTitle: "Chcete odebrat admissionprocess?",
            loadingMsg: "Odstraňuji admissionprocess",
            renderContent: () => (
                <h2>
                    {admissionprocess?.name} ({admissionprocess?.name_en})
                </h2>
            ),
        },
    };

    if (!operationConfig[operation]) {
        return <ErrorHandler errors={`Invalid operation value: '${operation}'. Must be one of 'C', 'U', or 'D'.`} />;
    }

    const { asyncAction, dialogTitle, loadingMsg, renderContent } = operationConfig[operation];

    const { error, loading, fetch, entity } = useAsyncAction(asyncAction, admissionprocess, { deferred: true });
    const handleClick = async (params = {}) => {
        const fetchParams = { ...admissionprocess, ...params };
        const freshAdmissionprocess = await fetch(fetchParams);
        onDone(freshAdmissionprocess); // Pass the result to the external callback
    };

    // Validate required fields for "U" and "D"
    if ((operation === 'U' || operation === 'D') && !admissionprocess?.id) {
        return <ErrorHandler errors={`For '${operation}' operation, 'admissionprocess' must include an 'id' key.`} />;
    }

    return (<>
        {error && <ErrorHandler errors={error} />}
        {loading && <LoadingSpinner text={loadingMsg} />}
        <ButtonWithDialog
            buttonLabel={children}
            dialogTitle={dialogTitle}
            {...props}
            params={admissionprocess}
            onClick={handleClick}
        >
            {renderContent()}
        </ButtonWithDialog>
    </>);
};

// Prop validation using PropTypes
AdmissionprocessCUDButton.propTypes = {
    /** The operation to perform: "C" for create, "U" for update, "D" for delete. */
    operation: PropTypes.oneOf(['C', 'U', 'D']).isRequired,
    /** The label or content for the button. */
    children: PropTypes.node,
    /** The parameters for the operation. */
    admissionprocess: PropTypes.shape({
        id: PropTypes.string, // Required for "U" and "D" operations
        name: PropTypes.string,
        name_en: PropTypes.string,
    }).isRequired,
    /** Callback executed after the operation completes. Receives the `admissionprocess` object. */
    onDone: PropTypes.func,
};

// Default props
AdmissionprocessCUDButton.defaultProps = {
    onDone: () => {},
};