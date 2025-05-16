import { useAsyncAction, createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, InfiniteScroll, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { use, useEffect } from "react";


/**
 * Inserts a VectorGQLModel item into a programtitletype’s vectors array and dispatches an update.
 *
 * @param {Object} programtitletype - The current programtitletype object containing a `vectors` array.
 * @param {Object} vectorItem - The item to insert; must have `__typename === "VectorGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpProgramTitleTypeVectorItemInsert = (programtitletype, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = programtitletype;
        const newProgramTitleTypeVectorItems = [...vectors, vectorItem];
        const newProgramTitleType = { ...others, vectors: newProgramTitleTypeVectorItems };
        dispatch(ItemActions.item_update(newProgramTitleType));
    }
};

/**
 * Replaces an existing VectorGQLModel item in a programtitletype’s vectors array and dispatches an update.
 *
 * @param {Object} programtitletype - The current programtitletype object containing a `vectors` array.
 * @param {Object} vectorItem - The updated item; must have `__typename === "VectorGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpProgramTitleTypeVectorItemUpdate = (programtitletype, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = programtitletype;
        const newProgramTitleTypeVectorItems = vectors.map(item =>
            item.id === vectorItem.id ? vectorItem : item
        );
        const newProgramTitleType = { ...others, vectors: newProgramTitleTypeVectorItems };
        dispatch(ItemActions.item_update(newProgramTitleType));
    }
};

/**
 * Removes a VectorGQLModel item from a programtitletype’s vectors array by its `id` and dispatches an update.
 *
 * @param {Object} programtitletype - The current programtitletype object containing a `vectors` array.
 * @param {Object} vectorItem - The item to delete; must have `__typename === "VectorGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpProgramTitleTypeVectorItemDelete = (programtitletype, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = programtitletype;
        const newProgramTitleTypeVectorItems = vectors.filter(
            item => item.id !== vectorItem.id
        );
        const newProgramTitleType = { ...others, vectors: newProgramTitleTypeVectorItems };
        dispatch(ItemActions.item_update(newProgramTitleType));
    }
};

const ProgramTitleTypeVectorsAttributeQuery = `
query ProgramTitleTypeQueryRead($id: UUID!, $where: VectorInputFilter, $skip: Int, $limit: Int) {
    result: programtitletypeById(id: $id) {
        __typename
        id
        vectors(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
        }
    }
}
`

const ProgramTitleTypeVectorsAttributeAsyncAction = createAsyncGraphQLAction(
    ProgramTitleTypeVectorsAttributeQuery,
    processVectorAttributeFromGraphQLResult("vectors")
)

/**
 * A component for displaying the `vectors` attribute of an programtitletype entity.
 *
 * This component checks if the `vectors` attribute exists on the `programtitletype` object. If `vectors` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `vectors` array and
 * displays a placeholder message and a JSON representation for each item in the `vectors`.
 *
 * @component
 * @param {Object} props - The props for the ProgramTitleTypeVectorsAttribute component.
 * @param {Object} props.programtitletype - The object representing the programtitletype entity.
 * @param {Array} [props.programtitletype.vectors] - An array of vectors items associated with the programtitletype entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `vectors` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const programtitletypeEntity = { 
 *   vectors: [
 *     { id: 1, name: "Vector Item 1" }, 
 *     { id: 2, name: "Vector Item 2" }
 *   ] 
 * };
 *
 * <ProgramTitleTypeVectorsAttribute programtitletype={programtitletypeEntity} />
 */
export const ProgramTitleTypeVectorsAttribute = ({programtitletype, filter=Boolean}) => {
    const { vectors: unfiltered } = programtitletype
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


export const ProgramTitleTypeVectorsAttributeInfinite = ({programtitletype}) => { 
    const {vectors} = programtitletype

    return (
        <InfiniteScroll 
            Visualiser={'VectorMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={ProgramTitleTypeVectorsAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `vectors` from a `programtitletype` entity.
 *
 * This component uses the `ProgramTitleTypeVectorsAttributeAsyncAction` to asynchronously fetch
 * the `programtitletype.vectors` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each vector item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.programtitletype - The programtitletype entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `vectors` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered vectors or a loading/error placeholder.
 *
 * @example
 * <ProgramTitleTypeVectorsAttributeLazy programtitletype={{ id: "abc123" }} />
 *
 * 
 * @example
 * <ProgramTitleTypeVectorsAttributeLazy
 *   programtitletype={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const ProgramTitleTypeVectorsAttributeLazy = ({programtitletype, filter=Boolean}) => {
    const {loading, error, entity, fetch} = useAsyncAction(ProgramTitleTypeVectorsAttributeAsyncAction, programtitletype, {deferred: true})
    useEffect(() => {
        fetch(programtitletype)
    }, [programtitletype])

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    return <ProgramTitleTypeVectorsAttribute programtitletype={entity} filter={filter} />    
}