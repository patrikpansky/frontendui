import { AsyncClickHandler, ButtonWithDialog } from '@hrbolek/uoisfrontend-shared';
import { EmptyUpdateAsyncAction } from './Queries/EmptyUpdateAsyncAction';
import { EmptyMediumEditableContent } from './EmptyMediumEditableContent';

/**
 * UpdateEmptyButton Component
 *
 * A reusable button component for updateing a new "empty" into the system. It uses a dialog
 * for collecting necessary inputs and executes an asynchronous action upon confirmation.
 * 
 * This component integrates with `AsyncClickHandler` to manage asynchronous actions, 
 * and `ButtonWithDialog` for rendering a dialog interface. It also utilizes the `Input` 
 * component for rendering form fields dynamically based on the `params` prop.
 *
 * @component
 * @param {Object} props - The props for the UpdateEmptyButton component.
 * @param {React.ReactNode} props.children - The content or label for the button.
 * @param {Object} [props.empty={}] - The initial parameters for the empty updateion action. 
 *                                      Contains default values for the dialog inputs.
 * @param {string} [props.empty.name] - The default value for the "Název" field.
 * @param {string} [props.empty.name_en] - The default value for the "Anglický název" field.
 * @param {Function} [props.onDone=(newEmpty) => null] - Callback executed after the empty is successfully updateed.
 *                                                      Receives the new empty as an argument.
 * @param {...Object} props - Additional props passed to the `ButtonWithDialog` component.
 *
 * @example
 * // Basic Usage
 * const Example = () => {
 *     const handleEmptyUpdateed = (newEmpty) => {
 *         console.log("Empty updateed:", newEmpty);
 *     };
 *
 *     return (
 *         <UpdateEmptyButton
 *             params={{ name: "Default Name", name_en: "Default English Name" }}
 *             onDone={handleEmptyUpdateed}
 *         >
 *             Add New Empty
 *         </UpdateEmptyButton>
 *     );
 * };
 *
 * @returns {JSX.Element} A button that opens a dialog for updateing a new empty.
 */
export const UpdateEmptyButton = ({ children, empty, onDone = (empty) => null, ...props }) => {
    // console.log(`UpdateEmptyButton.empty`, empty)
    const handleClick = (empty) => {
        // console.log(`UpdateEmptyButton.empty`, empty)
        onDone(empty)
    }
    return (
        <AsyncClickHandler
            asyncAction={EmptyUpdateAsyncAction}
            defaultParams={empty}
            loadingMsg={"Ukládám data"}
            // onClick={onDone}
            onClick={handleClick}
        >
            <ButtonWithDialog buttonLabel={children} dialogTitle="Upravit část" {...props} params={empty}>
                <EmptyMediumEditableContent empty={empty} />
            </ButtonWithDialog>
        </AsyncClickHandler>
    );
};
