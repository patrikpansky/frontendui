import { useAsyncAction, createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, InfiniteScroll, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { use, useEffect } from "react";


/**
 * Inserts a VectorGQLModel item into a program’s vectors array and dispatches an update.
 *
 * @param {Object} program - The current program object containing a `vectors` array.
 * @param {Object} vectorItem - The item to insert; must have `__typename === "VectorGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpProgramVectorItemInsert = (program, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = program;
        const newProgramVectorItems = [...vectors, vectorItem];
        const newProgram = { ...others, vectors: newProgramVectorItems };
        dispatch(ItemActions.item_update(newProgram));
    }
};

/**
 * Replaces an existing VectorGQLModel item in a program’s vectors array and dispatches an update.
 *
 * @param {Object} program - The current program object containing a `vectors` array.
 * @param {Object} vectorItem - The updated item; must have `__typename === "VectorGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpProgramVectorItemUpdate = (program, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = program;
        const newProgramVectorItems = vectors.map(item =>
            item.id === vectorItem.id ? vectorItem : item
        );
        const newProgram = { ...others, vectors: newProgramVectorItems };
        dispatch(ItemActions.item_update(newProgram));
    }
};

/**
 * Removes a VectorGQLModel item from a program’s vectors array by its `id` and dispatches an update.
 *
 * @param {Object} program - The current program object containing a `vectors` array.
 * @param {Object} vectorItem - The item to delete; must have `__typename === "VectorGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpProgramVectorItemDelete = (program, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = program;
        const newProgramVectorItems = vectors.filter(
            item => item.id !== vectorItem.id
        );
        const newProgram = { ...others, vectors: newProgramVectorItems };
        dispatch(ItemActions.item_update(newProgram));
    }
};

const ProgramVectorsAttributeQuery = `
query ProgramQueryRead($id: UUID!, $where: VectorInputFilter, $skip: Int, $limit: Int) {
    result: programById(id: $id) {
        __typename
        id
        vectors(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
        }
    }
}
`

const ProgramVectorsAttributeAsyncAction = createAsyncGraphQLAction(
    ProgramVectorsAttributeQuery,
    processVectorAttributeFromGraphQLResult("vectors")
)

/**
 * A component for displaying the `vectors` attribute of an program entity.
 *
 * This component checks if the `vectors` attribute exists on the `program` object. If `vectors` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `vectors` array and
 * displays a placeholder message and a JSON representation for each item in the `vectors`.
 *
 * @component
 * @param {Object} props - The props for the ProgramVectorsAttribute component.
 * @param {Object} props.program - The object representing the program entity.
 * @param {Array} [props.program.vectors] - An array of vectors items associated with the program entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `vectors` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const programEntity = { 
 *   vectors: [
 *     { id: 1, name: "Vector Item 1" }, 
 *     { id: 2, name: "Vector Item 2" }
 *   ] 
 * };
 *
 * <ProgramVectorsAttribute program={programEntity} />
 */
export const ProgramVectorsAttribute = ({program, filter=Boolean}) => {
    const { vectors: unfiltered } = program
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


export const ProgramVectorsAttributeInfinite = ({program}) => { 
    const {vectors} = program

    return (
        <InfiniteScroll 
            Visualiser={'VectorMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={ProgramVectorsAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `vectors` from a `program` entity.
 *
 * This component uses the `ProgramVectorsAttributeAsyncAction` to asynchronously fetch
 * the `program.vectors` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each vector item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.program - The program entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `vectors` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered vectors or a loading/error placeholder.
 *
 * @example
 * <ProgramVectorsAttributeLazy program={{ id: "abc123" }} />
 *
 * 
 * @example
 * <ProgramVectorsAttributeLazy
 *   program={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const ProgramVectorsAttributeLazy = ({program, filter=Boolean}) => {
    const {loading, error, entity, fetch} = useAsyncAction(ProgramVectorsAttributeAsyncAction, program, {deferred: true})
    useEffect(() => {
        fetch(program)
    }, [program])

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    return <ProgramVectorsAttribute program={entity} filter={filter} />    
}