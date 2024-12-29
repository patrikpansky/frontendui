import { useState } from 'react'
import { useAsyncAction } from '@hrbolek/uoisfrontend-gql-shared';
import { LoadingSpinner, ErrorHandler, ButtonWithDialog, SimpleCardCapsule } from '@hrbolek/uoisfrontend-shared';
import { RequestInsertAsyncAction } from './Queries/RequestInsertAsyncAction';

export const InsertRequestButton = ({ 
    request, 
    confirmationDialog=true, 
    onAdd = () => null, 
    dialogTitle="Nový požadavek",
    className='btn btn-outline-primary form-control',
    children, 
    ...props 
}) => {
    const { fetch, error, loading } = useAsyncAction(RequestInsertAsyncAction, {...request}, { deferred: true });
    const [state, setState] = useState({
        name: "Nový požadavek",
        name_en: "New request",
        ...request,
    })
    const onConfirmCreate = async () => {
        const id = crypto.randomUUID()
        await fetch({...state, id});
        onAdd(state);
    };
    const onChange = (e) => {
        const name = e.target.id
        const value = e.target.value
        const newState = {
            ...state,
            [name]: value
        }
        setState(prev => newState)
    }
    return (
        <>
            {loading && <LoadingSpinner text='Vytvářím' />}
            {error && <ErrorHandler errors={error} />}
            {!confirmationDialog && <span {...props} onClick={onClick}>{children}</span>}
            {confirmationDialog &&
                <ButtonWithDialog
                    dialogTitle={dialogTitle}
                    buttonLabel={children}
                    className={className}
                    {...props}
                    onClick={onConfirmCreate}
                >
                    <SimpleCardCapsule title={"Název požadavku"}>
                        <input id="name" className='form-control' onChange={onChange} onBlur={onChange} defaultValue={state.name} />
                    </SimpleCardCapsule>
                    <SimpleCardCapsule title={"Anglický název"}>
                        <input id="name_en" className='form-control' onChange={onChange} onBlur={onChange} defaultValue={state.name_en} />
                    </SimpleCardCapsule>
                </ButtonWithDialog>
            }
        </>
    );
};
