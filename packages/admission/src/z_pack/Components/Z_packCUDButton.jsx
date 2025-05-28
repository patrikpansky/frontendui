import { ButtonWithDialog, ErrorHandler, LoadingSpinner } from "@hrbolek/uoisfrontend-shared";

import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared";
import { Z_packDeleteAsyncAction, Z_packInsertAsyncAction, Z_packUpdateAsyncAction } from "../Queries";
import { Z_packMediumEditableContent } from "./Z_packMediumEditableContent";

/**
 * Z_packCUDButton Component
 *
 * A higher-order component that dynamically renders one of the following components
 * based on the `operation` prop:
 * - `InsertZ_packButton` for creating a new item (operation "C")
 * - `UpdateZ_packButton` for updating an existing item (operation "U")
 * - `DeleteZ_packButton` for deleting an existing item (operation "D")
 *
 * This component validates the `z_pack` prop:
 * - For "C" (create), `z_pack` can be any object (no restrictions).
 * - For "U" (update) and "D" (delete), `z_pack` must include an `id` key.
 *
 * If the `operation` prop is invalid or required conditions for `z_pack` are not met,
 * an `ErrorHandler` component is rendered with an appropriate error message.
 *
 * @component
 * @param {Object} props - The props for the Z_packCUDButton component.
 * @param {string} props.operation - The operation type ("C" for create, "U" for update, "D" for delete).
 * @param {React.ReactNode} props.children - The content or label for the button.
 * @param {Object} props.z_pack - The parameters for the operation. For "U" and "D", it must include an `id` key.
 * @param {string} [props.z_pack.id] - The unique identifier for the item (required for "U" and "D").
 * @param {string} [props.z_pack.name] - The name of the item (optional).
 * @param {string} [props.z_pack.name_en] - The English name of the item (optional).
 * @param {Function} [props.onDone=(z_pack) => {}] - Callback executed after the operation completes. Receives the `z_pack` object.
 * @param {...Object} props - Additional props passed to the underlying button components.
 *
 * @example
 * // Example Usage
 * const Example = () => {
 *   const handleDone = (data) => console.log("Operation completed:", data);
 *
 *   return (
 *     <>
 *       <Z_packCUDButton
 *         operation="C"
 *         z_pack={{ name: "New Item", name_en: "New Item EN" }}
 *         onDone={handleDone}
 *       >
 *         Insert
 *       </Z_packCUDButton>
 *
 *       <Z_packCUDButton
 *         operation="U"
 *         z_pack={{ id: "123", name: "Updated Item", name_en: "Updated Item EN" }}
 *         onDone={handleDone}
 *       >
 *         Update
 *       </Z_packCUDButton>
 *
 *       <Z_packCUDButton
 *         operation="D"
 *         z_pack={{ id: "123" }}
 *         onDone={handleDone}
 *       >
 *         Delete
 *       </Z_packCUDButton>
 *     </>
 *   );
 * };
 *
 * @returns {JSX.Element} The dynamically selected button component for the specified operation.
 */
export const Z_packButton = ({ operation, children, z_pack, onDone = () => {}, ...props }) => {
    const operationConfig = {
        C: {
            asyncAction: Z_packInsertAsyncAction,
            dialogTitle: "Vložit novou z_pack",
            loadingMsg: "Vkládám novou z_pack",
            renderContent: () => <Z_packMediumEditableContent z_pack={z_pack} />,
        },
        U: {
            asyncAction: Z_packUpdateAsyncAction,
            dialogTitle: "Upravit z_pack",
            loadingMsg: "Ukládám z_pack",
            renderContent: () => <Z_packMediumEditableContent z_pack={z_pack} />,
        },
        D: {
            asyncAction: Z_packDeleteAsyncAction,
            dialogTitle: "Chcete odebrat z_pack?",
            loadingMsg: "Odstraňuji z_pack",
            renderContent: () => (
                <h2>
                    {z_pack?.name} ({z_pack?.name_en})
                </h2>
            ),
        },
    };

    if (!operationConfig[operation]) {
        return <ErrorHandler errors={`Invalid operation value: '${operation}'. Must be one of 'C', 'U', or 'D'.`} />;
    }

    const { asyncAction, dialogTitle, loadingMsg, renderContent } = operationConfig[operation];

    const { error, loading, fetch, entity } = useAsyncAction(asyncAction, z_pack, { deferred: true });
    const handleClick = async (params = {}) => {
        const fetchParams = { ...z_pack, ...params };
        const freshZ_pack = await fetch(fetchParams);
        onDone(freshZ_pack); // Pass the result to the external callback
    };

    // Validate required fields for "U" and "D"
    if ((operation === 'U' || operation === 'D') && !z_pack?.id) {
        return <ErrorHandler errors={`For '${operation}' operation, 'z_pack' must include an 'id' key.`} />;
    }

    return (<>
        {error && <ErrorHandler errors={error} />}
        {loading && <LoadingSpinner text={loadingMsg} />}
        <ButtonWithDialog
            buttonLabel={children}
            dialogTitle={dialogTitle}
            {...props}
            params={z_pack}
            onClick={handleClick}
        >
            {renderContent()}
        </ButtonWithDialog>
    </>);
};

// // Prop validation using PropTypes
// Z_packCUDButton.propTypes = {
//     /** The operation to perform: "C" for create, "U" for update, "D" for delete. */
//     operation: PropTypes.oneOf(['C', 'U', 'D']).isRequired,
//     /** The label or content for the button. */
//     children: PropTypes.node,
//     /** The parameters for the operation. */
//     z_pack: PropTypes.shape({
//         id: PropTypes.string, // Required for "U" and "D" operations
//         name: PropTypes.string,
//         name_en: PropTypes.string,
//     }).isRequired,
//     /** Callback executed after the operation completes. Receives the `z_pack` object. */
//     onDone: PropTypes.func,
// };

// // Default props
// Z_packCUDButton.defaultProps = {
//     onDone: () => {},
// };