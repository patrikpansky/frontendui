import { useState } from 'react'
import { Dialog } from './Dialog';

/**
 * A reusable button component that opens a dialog when clicked.
 * The dialog allows gathering data and confirms the action with a callback on confirmation.
 *
 * @component
 * @param {Object} props - Props passed to the component.
 * @param {string} [props.buttonLabel="Click Me"] - Label for the button that opens the dialog.
 * @param {string} [props.dialogTitle="Confirm Action"] - Title of the dialog.
 * @param {string} [props.oklabel="Ok"] - Label for the confirmation button in the dialog.
 * @param {string} [props.cancellabel="Cancel"] - Label for the cancel button in the dialog.
 * @param {Function} props.onClick - Callback function executed on confirmation (`onOk`) of the dialog.
 * @param {React.ReactNode} [props.children] - Content to display inside the dialog for gathering data.
 * @param {...Object} props - Additional props passed to the button element.
 *
 * @example
 * // Basic Usage
 * import React from "react";
 * import { ButtonWithDialog } from "./ButtonWithDialog";
 *
 * const Example = () => {
 *     const handleAction = () => {
 *         alert("Action confirmed!");
 *     };
 *
 *     return (
 *         <ButtonWithDialog
 *             buttonLabel="Open Dialog"
 *             dialogTitle="Are you sure?"
 *             oklabel="Confirm"
 *             cancellabel="Cancel"
 *             onClick={handleAction}
 *         >
 *             <p>Please confirm your action.</p>
 *         </ButtonWithDialog>
 *     );
 * };
 * 
 * export default Example;
 *
 * @example
 * // RequestTransitionButton Example
 * export const RequestTransitionButton = ({ request, transition, ...props }) => {
 *     const [mutationParams, setMutationParams] = useState({
 *         id: request.id,
 *         lastchange: request.lastchange,
 *         history_message: "",
 *         transition_id: transition.id
 *     });
 *
 *     useEffect(() => {
 *         setMutationParams((oldState) => ({
 *             ...oldState,
 *             lastchange: request.lastchange,
 *             transition_id: transition.id
 *         }));
 *     }, [request, transition]);
 *
 *     const onChange = (e) => {
 *         const newValue = e.target.value;
 *         const attributeName = e.target.id;
 *         setMutationParams((oldState) => ({ ...oldState, [attributeName]: newValue }));
 *     };
 *
 *     const { loading, error, fetch } = useAsyncAction(
 *         RequestUseTransitionAsyncAction,
 *         mutationParams,
 *         { deferred: true }
 *     );
 *
 *     const onClick = () => {
 *         fetch(mutationParams);
 *     };
 *
 *     return (
 *         <ButtonWithDialog
 *             onClick={onClick}
 *             buttonLabel={`${transition?.name} (${transition?.target?.name})`}
 *             dialogTitle={"Potvrďte akci a napište zprávu"}
 *             {...props}
 *         >
 *             <input
 *                 id="history_message"
 *                 className="form-control"
 *                 defaultValue={""}
 *                 onChange={onChange}
 *                 onBlur={onChange}
 *             />
 *         </ButtonWithDialog>
 *     );
 * };
 */
export const ButtonWithDialog = ({
    buttonLabel = "Provést",
    dialogTitle = "Potvrďte akci",
    oklabel = "Ok",
    cancellabel = "Zrušit",
    onClick,
    children,
    ...props
}) => {
    const [showDialog, setShowDialog] = useState(false);

    const handleButtonClick = () => {
        setShowDialog(true); // Show the dialog on the first click
    };

    const handleDialogOk = () => {
        if (onClick) onClick(); // Call the hook on confirmation
        setShowDialog(false); // Hide the dialog
    };

    const handleDialogCancel = () => {
        setShowDialog(false); // Simply close the dialog without calling the hook
    };

    return (
        <>
            <button {...props} onClick={handleButtonClick}>
                {buttonLabel}
            </button>

            {showDialog && (
                <Dialog
                    title={dialogTitle}
                    oklabel={oklabel}
                    cancellabel={cancellabel}
                    onOk={handleDialogOk}
                    onCancel={handleDialogCancel}
                >
                    {children}
                </Dialog>
            )}
        </>
    );
};