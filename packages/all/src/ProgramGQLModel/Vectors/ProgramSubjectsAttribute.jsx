import { useAsyncAction, createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, InfiniteScroll, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { SubjectLink } from "../../SubjectGQLModel";


/**
 * Inserts a SubjectGQLModel item into a program’s subjects array and dispatches an update.
 *
 * @param {Object} program - The current program object containing a `subjects` array.
 * @param {Object} subjectItem - The item to insert; must have `__typename === "SubjectGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpProgramSubjectItemInsert = (program, subjectItem, dispatch) => {
    const { __typename } = subjectItem;
    if (__typename === "SubjectGQLModel") {
        const { subjects, ...others } = program;
        const newProgramSubjectItems = [...subjects, subjectItem];
        const newProgram = { ...others, subjects: newProgramSubjectItems };
        dispatch(ItemActions.item_update(newProgram));
    }
};

/**
 * Replaces an existing SubjectGQLModel item in a program’s subjects array and dispatches an update.
 *
 * @param {Object} program - The current program object containing a `subjects` array.
 * @param {Object} subjectItem - The updated item; must have `__typename === "SubjectGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpProgramSubjectItemUpdate = (program, subjectItem, dispatch) => {
    const { __typename } = subjectItem;
    if (__typename === "SubjectGQLModel") {
        const { subjects, ...others } = program;
        const newProgramSubjectItems = subjects.map(item =>
            item.id === subjectItem.id ? subjectItem : item
        );
        const newProgram = { ...others, subjects: newProgramSubjectItems };
        dispatch(ItemActions.item_update(newProgram));
    }
};

/**
 * Removes a SubjectGQLModel item from a program’s subjects array by its `id` and dispatches an update.
 *
 * @param {Object} program - The current program object containing a `subjects` array.
 * @param {Object} subjectItem - The item to delete; must have `__typename === "SubjectGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpProgramSubjectItemDelete = (program, subjectItem, dispatch) => {
    const { __typename } = subjectItem;
    if (__typename === "SubjectGQLModel") {
        const { subjects, ...others } = program;
        const newProgramSubjectItems = subjects.filter(
            item => item.id !== subjectItem.id
        );
        const newProgram = { ...others, subjects: newProgramSubjectItems };
        dispatch(ItemActions.item_update(newProgram));
    }
};


/**
 * A component for displaying the `subjects` attribute of an program entity.
 *
 * This component checks if the `subjects` attribute exists on the `program` object. If `subjects` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `subjects` array and
 * displays a placeholder message and a JSON representation for each item in the `subjects`.
 *
 * @component
 * @param {Object} props - The props for the ProgramSubjectsAttribute component.
 * @param {Object} props.program - The object representing the program entity.
 * @param {Array} [props.program.subjects] - An array of subjects items associated with the program entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `subjects` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const programEntity = { 
 *   subjects: [
 *     { id: 1, name: "Subject Item 1" }, 
 *     { id: 2, name: "Subject Item 2" }
 *   ] 
 * };
 *
 * <ProgramSubjectsAttribute program={programEntity} />
 */
export const ProgramSubjectsAttribute = ({program}) => {
    const { subjects } = program
    if (typeof subjects === 'undefined') return null
    return (
        <>
            {subjects.map(
                subject => <div id={subject.id} key={subject.id}>
                    Probably {'<SubjectMediumCard subject=\{subject\} />'} <br />
                    <pre>{JSON.stringify(subject, null, 4)}</pre>
                </div>
            )}
        </>
    )
}

const ProgramSubjectsAttributeQuery = `
query ProgramQueryRead($id: UUID!, $where: SubjectInputFilter, $skip: Int, $limit: Int) {
    result: programById(id: $id) {
        __typename
        id
        subjects(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
            name
            lastchange
            created
            createdbyId
            changedbyId
            rbacobjectId
            programId
            groupId
        }
    }
}
`

const ProgramSubjectsAttributeAsyncAction = createAsyncGraphQLAction(
    ProgramSubjectsAttributeQuery,
    processVectorAttributeFromGraphQLResult("subjects")
)

export const ProgramSubjectsAttributeInfinite = ({program}) => { 
    const {subjects} = program

    return (
        <InfiniteScroll 
            Visualiser={'SubjectMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={ProgramSubjectsAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `subjects` from a `program` entity.
 *
 * This component uses the `ProgramSubjectsAttributeAsyncAction` to asynchronously fetch
 * the `program.subjects` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each subject item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.program - The program entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `subjects` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered subjects or a loading/error placeholder.
 *
 * @example
 * <ProgramSubjectsAttributeLazy program={{ id: "abc123" }} />
 *
 * 
 * @example
 * <ProgramSubjectsAttributeLazy
 *   program={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const ProgramSubjectsAttributeLazy = ({program, filter=Boolean}) => {
    const {loading, error, entity} = useAsyncAction(ProgramSubjectsAttributeAsyncAction, program)
    const values = entity?.subjects || []
    
    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    const valuesToDisplay = values.filter(filter)
    return (<>
        {valuesToDisplay.map(value => <div key={value.id} id={value.id}>
            <SubjectLink subject={value} />
            {/* <pre>{JSON.stringify(value, null, 4)}</pre> */}
        </div>)}
    </>)
}