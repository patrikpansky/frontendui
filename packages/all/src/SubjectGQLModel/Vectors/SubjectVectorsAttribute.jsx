import { useAsyncAction, createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, InfiniteScroll, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { use, useEffect } from "react";


/**
 * Inserts a VectorGQLModel item into a subject’s vectors array and dispatches an update.
 *
 * @param {Object} subject - The current subject object containing a `vectors` array.
 * @param {Object} vectorItem - The item to insert; must have `__typename === "VectorGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpSubjectVectorItemInsert = (subject, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = subject;
        const newSubjectVectorItems = [...vectors, vectorItem];
        const newSubject = { ...others, vectors: newSubjectVectorItems };
        dispatch(ItemActions.item_update(newSubject));
    }
};

/**
 * Replaces an existing VectorGQLModel item in a subject’s vectors array and dispatches an update.
 *
 * @param {Object} subject - The current subject object containing a `vectors` array.
 * @param {Object} vectorItem - The updated item; must have `__typename === "VectorGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpSubjectVectorItemUpdate = (subject, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = subject;
        const newSubjectVectorItems = vectors.map(item =>
            item.id === vectorItem.id ? vectorItem : item
        );
        const newSubject = { ...others, vectors: newSubjectVectorItems };
        dispatch(ItemActions.item_update(newSubject));
    }
};

/**
 * Removes a VectorGQLModel item from a subject’s vectors array by its `id` and dispatches an update.
 *
 * @param {Object} subject - The current subject object containing a `vectors` array.
 * @param {Object} vectorItem - The item to delete; must have `__typename === "VectorGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpSubjectVectorItemDelete = (subject, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = subject;
        const newSubjectVectorItems = vectors.filter(
            item => item.id !== vectorItem.id
        );
        const newSubject = { ...others, vectors: newSubjectVectorItems };
        dispatch(ItemActions.item_update(newSubject));
    }
};

const SubjectVectorsAttributeQuery = `
query SubjectQueryRead($id: UUID!, $where: VectorInputFilter, $skip: Int, $limit: Int) {
    result: subjectById(id: $id) {
        __typename
        id
        vectors(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
        }
    }
}
`

const SubjectVectorsAttributeAsyncAction = createAsyncGraphQLAction(
    SubjectVectorsAttributeQuery,
    processVectorAttributeFromGraphQLResult("vectors")
)

/**
 * A component for displaying the `vectors` attribute of an subject entity.
 *
 * This component checks if the `vectors` attribute exists on the `subject` object. If `vectors` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `vectors` array and
 * displays a placeholder message and a JSON representation for each item in the `vectors`.
 *
 * @component
 * @param {Object} props - The props for the SubjectVectorsAttribute component.
 * @param {Object} props.subject - The object representing the subject entity.
 * @param {Array} [props.subject.vectors] - An array of vectors items associated with the subject entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `vectors` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const subjectEntity = { 
 *   vectors: [
 *     { id: 1, name: "Vector Item 1" }, 
 *     { id: 2, name: "Vector Item 2" }
 *   ] 
 * };
 *
 * <SubjectVectorsAttribute subject={subjectEntity} />
 */
export const SubjectVectorsAttribute = ({subject, filter=Boolean}) => {
    const { vectors: unfiltered } = subject
    if (typeof unfiltered === 'undefined') return null
    const vectors = unfiltered.filter(filter)
    if (vectors.length === 0) return null
    return (
        <>
            {vectors.map(
                vector => <div id={vector.id} key={vector.id}>
                    {/* <VectorMediumCard vector={vector} /> */}
                    {/* <VectorLink vector={vector} /> */}
                    Probably {'<VectorMediumCard vector=\{vector\} />'} <br />
                    <pre>{JSON.stringify(vector, null, 4)}</pre>
                </div>
            )}
        </>
    )
}


export const SubjectVectorsAttributeInfinite = ({subject}) => { 
    const {vectors} = subject

    return (
        <InfiniteScroll 
            Visualiser={'VectorMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={SubjectVectorsAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `vectors` from a `subject` entity.
 *
 * This component uses the `SubjectVectorsAttributeAsyncAction` to asynchronously fetch
 * the `subject.vectors` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each vector item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.subject - The subject entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `vectors` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered vectors or a loading/error placeholder.
 *
 * @example
 * <SubjectVectorsAttributeLazy subject={{ id: "abc123" }} />
 *
 * 
 * @example
 * <SubjectVectorsAttributeLazy
 *   subject={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const SubjectVectorsAttributeLazy = ({subject, filter=Boolean}) => {
    const {loading, error, entity, fetch} = useAsyncAction(SubjectVectorsAttributeAsyncAction, subject, {deferred: true})
    useEffect(() => {
        fetch(subject)
    }, [subject])

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    return <SubjectVectorsAttribute subject={entity} filter={filter} />    
}