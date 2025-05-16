import { useAsyncAction, createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, InfiniteScroll, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { use, useEffect } from "react";


/**
 * Inserts a VectorGQLModel item into a programlanguagetype’s vectors array and dispatches an update.
 *
 * @param {Object} programlanguagetype - The current programlanguagetype object containing a `vectors` array.
 * @param {Object} vectorItem - The item to insert; must have `__typename === "VectorGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpProgramLanguageTypeVectorItemInsert = (programlanguagetype, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = programlanguagetype;
        const newProgramLanguageTypeVectorItems = [...vectors, vectorItem];
        const newProgramLanguageType = { ...others, vectors: newProgramLanguageTypeVectorItems };
        dispatch(ItemActions.item_update(newProgramLanguageType));
    }
};

/**
 * Replaces an existing VectorGQLModel item in a programlanguagetype’s vectors array and dispatches an update.
 *
 * @param {Object} programlanguagetype - The current programlanguagetype object containing a `vectors` array.
 * @param {Object} vectorItem - The updated item; must have `__typename === "VectorGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpProgramLanguageTypeVectorItemUpdate = (programlanguagetype, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = programlanguagetype;
        const newProgramLanguageTypeVectorItems = vectors.map(item =>
            item.id === vectorItem.id ? vectorItem : item
        );
        const newProgramLanguageType = { ...others, vectors: newProgramLanguageTypeVectorItems };
        dispatch(ItemActions.item_update(newProgramLanguageType));
    }
};

/**
 * Removes a VectorGQLModel item from a programlanguagetype’s vectors array by its `id` and dispatches an update.
 *
 * @param {Object} programlanguagetype - The current programlanguagetype object containing a `vectors` array.
 * @param {Object} vectorItem - The item to delete; must have `__typename === "VectorGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpProgramLanguageTypeVectorItemDelete = (programlanguagetype, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = programlanguagetype;
        const newProgramLanguageTypeVectorItems = vectors.filter(
            item => item.id !== vectorItem.id
        );
        const newProgramLanguageType = { ...others, vectors: newProgramLanguageTypeVectorItems };
        dispatch(ItemActions.item_update(newProgramLanguageType));
    }
};

const ProgramLanguageTypeVectorsAttributeQuery = `
query ProgramLanguageTypeQueryRead($id: UUID!, $where: VectorInputFilter, $skip: Int, $limit: Int) {
    result: programlanguagetypeById(id: $id) {
        __typename
        id
        vectors(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
        }
    }
}
`

const ProgramLanguageTypeVectorsAttributeAsyncAction = createAsyncGraphQLAction(
    ProgramLanguageTypeVectorsAttributeQuery,
    processVectorAttributeFromGraphQLResult("vectors")
)

/**
 * A component for displaying the `vectors` attribute of an programlanguagetype entity.
 *
 * This component checks if the `vectors` attribute exists on the `programlanguagetype` object. If `vectors` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `vectors` array and
 * displays a placeholder message and a JSON representation for each item in the `vectors`.
 *
 * @component
 * @param {Object} props - The props for the ProgramLanguageTypeVectorsAttribute component.
 * @param {Object} props.programlanguagetype - The object representing the programlanguagetype entity.
 * @param {Array} [props.programlanguagetype.vectors] - An array of vectors items associated with the programlanguagetype entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `vectors` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const programlanguagetypeEntity = { 
 *   vectors: [
 *     { id: 1, name: "Vector Item 1" }, 
 *     { id: 2, name: "Vector Item 2" }
 *   ] 
 * };
 *
 * <ProgramLanguageTypeVectorsAttribute programlanguagetype={programlanguagetypeEntity} />
 */
export const ProgramLanguageTypeVectorsAttribute = ({programlanguagetype, filter=Boolean}) => {
    const { vectors: unfiltered } = programlanguagetype
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


export const ProgramLanguageTypeVectorsAttributeInfinite = ({programlanguagetype}) => { 
    const {vectors} = programlanguagetype

    return (
        <InfiniteScroll 
            Visualiser={'VectorMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={ProgramLanguageTypeVectorsAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `vectors` from a `programlanguagetype` entity.
 *
 * This component uses the `ProgramLanguageTypeVectorsAttributeAsyncAction` to asynchronously fetch
 * the `programlanguagetype.vectors` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each vector item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.programlanguagetype - The programlanguagetype entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `vectors` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered vectors or a loading/error placeholder.
 *
 * @example
 * <ProgramLanguageTypeVectorsAttributeLazy programlanguagetype={{ id: "abc123" }} />
 *
 * 
 * @example
 * <ProgramLanguageTypeVectorsAttributeLazy
 *   programlanguagetype={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const ProgramLanguageTypeVectorsAttributeLazy = ({programlanguagetype, filter=Boolean}) => {
    const {loading, error, entity, fetch} = useAsyncAction(ProgramLanguageTypeVectorsAttributeAsyncAction, programlanguagetype, {deferred: true})
    useEffect(() => {
        fetch(programlanguagetype)
    }, [programlanguagetype])

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    return <ProgramLanguageTypeVectorsAttribute programlanguagetype={entity} filter={filter} />    
}