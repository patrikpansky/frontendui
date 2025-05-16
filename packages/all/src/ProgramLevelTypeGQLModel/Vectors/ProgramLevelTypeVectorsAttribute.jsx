import { useAsyncAction, createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, InfiniteScroll, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { use, useEffect } from "react";


/**
 * Inserts a VectorGQLModel item into a programleveltype’s vectors array and dispatches an update.
 *
 * @param {Object} programleveltype - The current programleveltype object containing a `vectors` array.
 * @param {Object} vectorItem - The item to insert; must have `__typename === "VectorGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpProgramLevelTypeVectorItemInsert = (programleveltype, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = programleveltype;
        const newProgramLevelTypeVectorItems = [...vectors, vectorItem];
        const newProgramLevelType = { ...others, vectors: newProgramLevelTypeVectorItems };
        dispatch(ItemActions.item_update(newProgramLevelType));
    }
};

/**
 * Replaces an existing VectorGQLModel item in a programleveltype’s vectors array and dispatches an update.
 *
 * @param {Object} programleveltype - The current programleveltype object containing a `vectors` array.
 * @param {Object} vectorItem - The updated item; must have `__typename === "VectorGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpProgramLevelTypeVectorItemUpdate = (programleveltype, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = programleveltype;
        const newProgramLevelTypeVectorItems = vectors.map(item =>
            item.id === vectorItem.id ? vectorItem : item
        );
        const newProgramLevelType = { ...others, vectors: newProgramLevelTypeVectorItems };
        dispatch(ItemActions.item_update(newProgramLevelType));
    }
};

/**
 * Removes a VectorGQLModel item from a programleveltype’s vectors array by its `id` and dispatches an update.
 *
 * @param {Object} programleveltype - The current programleveltype object containing a `vectors` array.
 * @param {Object} vectorItem - The item to delete; must have `__typename === "VectorGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpProgramLevelTypeVectorItemDelete = (programleveltype, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = programleveltype;
        const newProgramLevelTypeVectorItems = vectors.filter(
            item => item.id !== vectorItem.id
        );
        const newProgramLevelType = { ...others, vectors: newProgramLevelTypeVectorItems };
        dispatch(ItemActions.item_update(newProgramLevelType));
    }
};

const ProgramLevelTypeVectorsAttributeQuery = `
query ProgramLevelTypeQueryRead($id: UUID!, $where: VectorInputFilter, $skip: Int, $limit: Int) {
    result: programleveltypeById(id: $id) {
        __typename
        id
        vectors(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
        }
    }
}
`

const ProgramLevelTypeVectorsAttributeAsyncAction = createAsyncGraphQLAction(
    ProgramLevelTypeVectorsAttributeQuery,
    processVectorAttributeFromGraphQLResult("vectors")
)

/**
 * A component for displaying the `vectors` attribute of an programleveltype entity.
 *
 * This component checks if the `vectors` attribute exists on the `programleveltype` object. If `vectors` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `vectors` array and
 * displays a placeholder message and a JSON representation for each item in the `vectors`.
 *
 * @component
 * @param {Object} props - The props for the ProgramLevelTypeVectorsAttribute component.
 * @param {Object} props.programleveltype - The object representing the programleveltype entity.
 * @param {Array} [props.programleveltype.vectors] - An array of vectors items associated with the programleveltype entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `vectors` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const programleveltypeEntity = { 
 *   vectors: [
 *     { id: 1, name: "Vector Item 1" }, 
 *     { id: 2, name: "Vector Item 2" }
 *   ] 
 * };
 *
 * <ProgramLevelTypeVectorsAttribute programleveltype={programleveltypeEntity} />
 */
export const ProgramLevelTypeVectorsAttribute = ({programleveltype, filter=Boolean}) => {
    const { vectors: unfiltered } = programleveltype
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


export const ProgramLevelTypeVectorsAttributeInfinite = ({programleveltype}) => { 
    const {vectors} = programleveltype

    return (
        <InfiniteScroll 
            Visualiser={'VectorMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={ProgramLevelTypeVectorsAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `vectors` from a `programleveltype` entity.
 *
 * This component uses the `ProgramLevelTypeVectorsAttributeAsyncAction` to asynchronously fetch
 * the `programleveltype.vectors` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each vector item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.programleveltype - The programleveltype entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `vectors` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered vectors or a loading/error placeholder.
 *
 * @example
 * <ProgramLevelTypeVectorsAttributeLazy programleveltype={{ id: "abc123" }} />
 *
 * 
 * @example
 * <ProgramLevelTypeVectorsAttributeLazy
 *   programleveltype={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const ProgramLevelTypeVectorsAttributeLazy = ({programleveltype, filter=Boolean}) => {
    const {loading, error, entity, fetch} = useAsyncAction(ProgramLevelTypeVectorsAttributeAsyncAction, programleveltype, {deferred: true})
    useEffect(() => {
        fetch(programleveltype)
    }, [programleveltype])

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    return <ProgramLevelTypeVectorsAttribute programleveltype={entity} filter={filter} />    
}