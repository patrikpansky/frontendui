import {createAsyncGraphQLAction} from '@hrbolek/uoisfrontend-gql-shared'
import {useAsyncAction} from '@hrbolek/uoisfrontend-gql-shared'

const DeleteAdmissionAsyncAction = createAsyncGraphQLAction(`
    mutation MyMutation ($id:UUID!, $lastchange:DateTime!) {
  admissionDelete(
    admission: {id: $id, lastchange: $lastchange}
  ) {
    __typename
    ...Error
  }
}

fragment Error on AdmissionGQLModelDeleteError {
  msg
  input
  failed
}`)

export const AdmissionDelete = ({admission, onDeleted}) => {
    const {fetch : deleteAdmission, loading, error } = useAsyncAction
    (DeleteAdmissionAsyncAction,
        admission,
         { deferred: true }
    );

    const handleDelete = () => {
        console.log("Smazat");
        console.log("admission", admission);
        if (!admission.id || !admission.lastchange) {
            alert("Není ID nebo lastchange");
            return;
        } 

        console.log("deleteadmission", deleteAdmission);

      deleteAdmission({ id: admission.id, lastchange: admission.lastchange })
        .then(() => {
          alert(`Přihláška '${admission.name}' byla smazána.`);
          onDeleted?.(admission.id);
        })
        .catch((err) => {
          console.error("Chyba při mazání přihlášky", err);
          alert("Mazání selhalo");
        });
    };
  
    return (
      
        <div className="d-flex justify-content-between align-items-center">
          <pre style={{display:"none"}}>{JSON.stringify(admission)}</pre>
          <button
            className="btn btn-sm btn-danger"
            onClick={handleDelete}
            disabled={loading}
          > Smazat
          </button>
        </div>
        
      
    );
};