import { useAsyncAction, createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, InfiniteScroll, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { use, useEffect } from "react";


/**
 * Inserts a VectorGQLModel item into a lessontype’s vectors array and dispatches an update.
 *
 * @param {Object} lessontype - The current lessontype object containing a `vectors` array.
 * @param {Object} vectorItem - The item to insert; must have `__typename === "VectorGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpLessonTypeVectorItemInsert = (lessontype, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = lessontype;
        const newLessonTypeVectorItems = [...vectors, vectorItem];
        const newLessonType = { ...others, vectors: newLessonTypeVectorItems };
        dispatch(ItemActions.item_update(newLessonType));
    }
};

/**
 * Replaces an existing VectorGQLModel item in a lessontype’s vectors array and dispatches an update.
 *
 * @param {Object} lessontype - The current lessontype object containing a `vectors` array.
 * @param {Object} vectorItem - The updated item; must have `__typename === "VectorGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpLessonTypeVectorItemUpdate = (lessontype, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = lessontype;
        const newLessonTypeVectorItems = vectors.map(item =>
            item.id === vectorItem.id ? vectorItem : item
        );
        const newLessonType = { ...others, vectors: newLessonTypeVectorItems };
        dispatch(ItemActions.item_update(newLessonType));
    }
};

/**
 * Removes a VectorGQLModel item from a lessontype’s vectors array by its `id` and dispatches an update.
 *
 * @param {Object} lessontype - The current lessontype object containing a `vectors` array.
 * @param {Object} vectorItem - The item to delete; must have `__typename === "VectorGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpLessonTypeVectorItemDelete = (lessontype, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = lessontype;
        const newLessonTypeVectorItems = vectors.filter(
            item => item.id !== vectorItem.id
        );
        const newLessonType = { ...others, vectors: newLessonTypeVectorItems };
        dispatch(ItemActions.item_update(newLessonType));
    }
};

const LessonTypeVectorsAttributeQuery = `
query LessonTypeQueryRead($id: UUID!, $where: VectorInputFilter, $skip: Int, $limit: Int) {
    result: lessontypeById(id: $id) {
        __typename
        id
        vectors(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
        }
    }
}
`

const LessonTypeVectorsAttributeAsyncAction = createAsyncGraphQLAction(
    LessonTypeVectorsAttributeQuery,
    processVectorAttributeFromGraphQLResult("vectors")
)

/**
 * A component for displaying the `vectors` attribute of an lessontype entity.
 *
 * This component checks if the `vectors` attribute exists on the `lessontype` object. If `vectors` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `vectors` array and
 * displays a placeholder message and a JSON representation for each item in the `vectors`.
 *
 * @component
 * @param {Object} props - The props for the LessonTypeVectorsAttribute component.
 * @param {Object} props.lessontype - The object representing the lessontype entity.
 * @param {Array} [props.lessontype.vectors] - An array of vectors items associated with the lessontype entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `vectors` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const lessontypeEntity = { 
 *   vectors: [
 *     { id: 1, name: "Vector Item 1" }, 
 *     { id: 2, name: "Vector Item 2" }
 *   ] 
 * };
 *
 * <LessonTypeVectorsAttribute lessontype={lessontypeEntity} />
 */
export const LessonTypeVectorsAttribute = ({lessontype, filter=Boolean}) => {
    const { vectors: unfiltered } = lessontype
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


export const LessonTypeVectorsAttributeInfinite = ({lessontype}) => { 
    const {vectors} = lessontype

    return (
        <InfiniteScroll 
            Visualiser={'VectorMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={LessonTypeVectorsAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `vectors` from a `lessontype` entity.
 *
 * This component uses the `LessonTypeVectorsAttributeAsyncAction` to asynchronously fetch
 * the `lessontype.vectors` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each vector item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.lessontype - The lessontype entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `vectors` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered vectors or a loading/error placeholder.
 *
 * @example
 * <LessonTypeVectorsAttributeLazy lessontype={{ id: "abc123" }} />
 *
 * 
 * @example
 * <LessonTypeVectorsAttributeLazy
 *   lessontype={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const LessonTypeVectorsAttributeLazy = ({lessontype, filter=Boolean}) => {
    const {loading, error, entity, fetch} = useAsyncAction(LessonTypeVectorsAttributeAsyncAction, lessontype, {deferred: true})
    useEffect(() => {
        fetch(lessontype)
    }, [lessontype])

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    return <LessonTypeVectorsAttribute lessontype={entity} filter={filter} />    
}