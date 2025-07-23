import { createAsyncGraphQLAction, useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared";
import { useReadOnly } from "@hrbolek/uoisfrontend-shared";


const AdmissionDeleteAsyncAction = createAsyncGraphQLAction(`mutation MyMutation($id: UUID!, $lastchange: DateTime!) {
  admissionDelete(admission: {id: $id, lastchange: $lastchange}) {
    __typename
    ... on AdmissionGQLModelDeleteError {
      failed
      input
      msg
      Entity {
        id
        lastchange
      }
    }
  }
}`)


export const AdmissionDelete = ({admission, onDeleted, readOnly}) => {
    const { isReadOnly } = useReadOnly();
    const effectiveReadOnly = readOnly || isReadOnly;
    
    const {fetch: deleteAdmission, loading, error } = useAsyncAction(
        AdmissionDeleteAsyncAction,
        {}, 
        {deferred: true}
    );

    const handleDelete = () => {
        if (!admission.id || !admission.lastchange) {
            alert("Chybí ID nebo lastchange přijímacího řízení.");
            return;
        }
        deleteAdmission({ id: admission.id, lastchange: admission.lastchange })
            .then(() => {
                onDeleted?.(admission.id);
            })
            .catch((err) => {
                console.error("Mazání selhalo:", err);
                alert("Mazání selhalo: " + (err?.message || ""));
            });
    };

    if (effectiveReadOnly) {
        return null; // Don't render delete button in read-only mode
    }

    return (
        <div className="mb-2">
            <div className="d-flex justify-content-between align-items-center">
                <button
                    className="btn btn-sm btn-danger"
                    onClick={handleDelete}
                    disabled={loading}
                >
                    Smazat
                </button>
            </div>
            {error && <div style={{ color: "red" }}>{error.message}</div>}
        </div>
    );
}


