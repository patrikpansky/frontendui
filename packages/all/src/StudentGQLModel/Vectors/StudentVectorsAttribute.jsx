import { useAsyncAction, createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, InfiniteScroll, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"


/**
 * Inserts a VectorGQLModel item into a student’s vectors array and dispatches an update.
 *
 * @param {Object} student - The current student object containing a `vectors` array.
 * @param {Object} vectorItem - The item to insert; must have `__typename === "VectorGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStudentVectorItemInsert = (student, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = student;
        const newStudentVectorItems = [...vectors, vectorItem];
        const newStudent = { ...others, vectors: newStudentVectorItems };
        dispatch(ItemActions.item_update(newStudent));
    }
};

/**
 * Replaces an existing VectorGQLModel item in a student’s vectors array and dispatches an update.
 *
 * @param {Object} student - The current student object containing a `vectors` array.
 * @param {Object} vectorItem - The updated item; must have `__typename === "VectorGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStudentVectorItemUpdate = (student, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = student;
        const newStudentVectorItems = vectors.map(item =>
            item.id === vectorItem.id ? vectorItem : item
        );
        const newStudent = { ...others, vectors: newStudentVectorItems };
        dispatch(ItemActions.item_update(newStudent));
    }
};

/**
 * Removes a VectorGQLModel item from a student’s vectors array by its `id` and dispatches an update.
 *
 * @param {Object} student - The current student object containing a `vectors` array.
 * @param {Object} vectorItem - The item to delete; must have `__typename === "VectorGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStudentVectorItemDelete = (student, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = student;
        const newStudentVectorItems = vectors.filter(
            item => item.id !== vectorItem.id
        );
        const newStudent = { ...others, vectors: newStudentVectorItems };
        dispatch(ItemActions.item_update(newStudent));
    }
};


/**
 * A component for displaying the `vectors` attribute of an student entity.
 *
 * This component checks if the `vectors` attribute exists on the `student` object. If `vectors` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `vectors` array and
 * displays a placeholder message and a JSON representation for each item in the `vectors`.
 *
 * @component
 * @param {Object} props - The props for the StudentVectorsAttribute component.
 * @param {Object} props.student - The object representing the student entity.
 * @param {Array} [props.student.vectors] - An array of vectors items associated with the student entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `vectors` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const studentEntity = { 
 *   vectors: [
 *     { id: 1, name: "Vector Item 1" }, 
 *     { id: 2, name: "Vector Item 2" }
 *   ] 
 * };
 *
 * <StudentVectorsAttribute student={studentEntity} />
 */
export const StudentVectorsAttribute = ({student}) => {
    const { vectors } = student
    if (typeof vectors === 'undefined') return null
    return (
        <>
            {vectors.map(
                vector => <div id={vector.id} key={vector.id}>
                    Probably {'<VectorMediumCard vector=\{vector\} />'} <br />
                    <pre>{JSON.stringify(vector, null, 4)}</pre>
                </div>
            )}
        </>
    )
}

const StudentVectorsAttributeQuery = `
query StudentQueryRead($id: UUID!, $where: VectorInputFilter, $skip: Int, $limit: Int) {
    result: studentById(id: $id) {
        __typename
        id
        vectors(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
        }
    }
}
`

const StudentVectorsAttributeAsyncAction = createAsyncGraphQLAction(
    StudentVectorsAttributeQuery,
    processVectorAttributeFromGraphQLResult("vectors")
)

export const StudentVectorsAttributeInfinite = ({student}) => { 
    const {vectors} = student

    return (
        <InfiniteScroll 
            Visualiser={'VectorMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={StudentVectorsAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `vectors` from a `student` entity.
 *
 * This component uses the `StudentVectorsAttributeAsyncAction` to asynchronously fetch
 * the `student.vectors` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each vector item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.student - The student entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `vectors` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered vectors or a loading/error placeholder.
 *
 * @example
 * <StudentVectorsAttributeLazy student={{ id: "abc123" }} />
 *
 * 
 * @example
 * <StudentVectorsAttributeLazy
 *   student={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const StudentVectorsAttributeLazy = ({student, filter=Boolean}) => {
    const {loading, error, entity} = useAsyncAction(StudentVectorsAttributeAsyncAction, student)
    const values = entity?.vectors || []
    
    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    const valuesToDisplay = values.filter(filter)
    return (<>
        {valuesToDisplay.map(value => <div key={value.id} id={value.id}>
            <pre>{JSON.stringify(value, null, 4)}</pre>
        </div>)}
    </>)
}