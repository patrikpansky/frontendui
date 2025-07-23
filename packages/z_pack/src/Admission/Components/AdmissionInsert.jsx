import { createAsyncGraphQLAction, useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared";
import {useState, useRef} from "react";
import { CreateDelayer, useReadOnly } from "@hrbolek/uoisfrontend-shared";

const AdmissionCreateAsyncAction = createAsyncGraphQLAction(`mutation MyMutation($programId: UUID!, $name: String!, $id: UUID) {
  admissionInsert(admission: {programId: $programId, name: $name, id : $id}) {
    __typename
  }
}`)


export const AdmissionInsert = ({program, onDone = () => {}, readOnly}) => {
    const { isReadOnly } = useReadOnly();
    const effectiveReadOnly = readOnly || isReadOnly;
    
    const {loading, error, fetch: fetchInsert} = useAsyncAction(
        AdmissionCreateAsyncAction,
        {},
        {deffered: true}

    );
    const [name, setName] = useState("");
    const [delayer] = useState(() => CreateDelayer(1000));

    const onCreate = () => {
        const insertParams = {
            programId: program.id,
            id: crypto.randomUUID(),
            name
        };

        fetchInsert(insertParams)
            .then((json) => {
                console.log("Admise vytvořena:", json);
                setName("");
                onDone();
            })
            .catch((err) => {
                console.log("Chyba při vytváření lekce", err);
            });
    };

    if (effectiveReadOnly) {
        return null; // Don't render create form in read-only mode
    }

    return (
        <div className="mb-2">
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Zadej název řízení"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ maxWidth: 400 }}
      />
      <button
        className="btn btn-primary"
        onClick={onCreate}
        disabled={ !name.trim()}
        type="button"
      >
        Vytvořit přijímací řízení
      </button>

      
      {error && <div style={{ color: "red" }}>Chyba: {error.message}</div>}
    </div>
  );
    
};