import { AsyncClickHandler, ButtonWithDialog } from '@hrbolek/uoisfrontend-shared';
import { EmptyInsertAsyncAction } from './Queries/EmptyInsertAsyncAction';
import { EmptyMediumEditableContent } from './EmptyMediumEditableContent';

/**
 * InsertEmptyButton Component
 *
 * A reusable button component for inserting a new "empty" into the system. It uses a dialog
 * for collecting necessary inputs and executes an asynchronous action upon confirmation.
 * 
 * This component integrates with `AsyncClickHandler` to manage asynchronous actions, 
 * and `ButtonWithDialog` for rendering a dialog interface. It also utilizes the `Input` 
 * component for rendering form fields dynamically based on the `params` prop.
 *
 * @component
 * @param {Object} props - The props for the InsertEmptyButton component.
 * @param {React.ReactNode} props.children - The content or label for the button.
 * @param {Object} [props.empty={}] - The initial parameters for the empty insertion action. 
 *                                      Contains default values for the dialog inputs.
 * @param {string} [props.empty.name] - The default value for the "Název" field.
 * @param {string} [props.empty.name_en] - The default value for the "Anglický název" field.
 * @param {Function} [props.onDone=(newEmpty) => null] - Callback executed after the empty is successfully inserted.
 *                                                      Receives the new empty as an argument.
 * @param {...Object} props - Additional props passed to the `ButtonWithDialog` component.
 *
 * @example
 * // Basic Usage
 * const Example = () => {
 *     const handleEmptyInserted = (newEmpty) => {
 *         console.log("Empty inserted:", newEmpty);
 *     };
 *
 *     return (
 *         <InsertEmptyButton
 *             params={{ name: "Default Name", name_en: "Default English Name" }}
 *             onDone={handleEmptyInserted}
 *         >
 *             Add New Empty
 *         </InsertEmptyButton>
 *     );
 * };
 *
 * @returns {JSX.Element} A button that opens a dialog for inserting a new empty.
 */
export const InsertEmptyButton = ({ children, params, onDone = (newEmpty) => null, ...props }) => {
    return (
        <AsyncClickHandler
            asyncAction={EmptyInsertAsyncAction}
            defaultParams={params}
            loadingMsg={"Vkládám novou část"}
            onClick={onDone}
        >
            <ButtonWithDialog buttonLabel={children} dialogTitle="Vložit novou část" {...props} params={params}>
                <EmptyMediumEditableContent empty={params} />
            </ButtonWithDialog>
        </AsyncClickHandler>
    );
};
