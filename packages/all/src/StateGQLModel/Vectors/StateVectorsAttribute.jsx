import { useAsyncAction, createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, InfiniteScroll, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { use, useEffect } from "react";


/**
 * Inserts a VectorGQLModel item into a state’s vectors array and dispatches an update.
 *
 * @param {Object} state - The current state object containing a `vectors` array.
 * @param {Object} vectorItem - The item to insert; must have `__typename === "VectorGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStateVectorItemInsert = (state, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = state;
        const newStateVectorItems = [...vectors, vectorItem];
        const newState = { ...others, vectors: newStateVectorItems };
        dispatch(ItemActions.item_update(newState));
    }
};

/**
 * Replaces an existing VectorGQLModel item in a state’s vectors array and dispatches an update.
 *
 * @param {Object} state - The current state object containing a `vectors` array.
 * @param {Object} vectorItem - The updated item; must have `__typename === "VectorGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStateVectorItemUpdate = (state, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = state;
        const newStateVectorItems = vectors.map(item =>
            item.id === vectorItem.id ? vectorItem : item
        );
        const newState = { ...others, vectors: newStateVectorItems };
        dispatch(ItemActions.item_update(newState));
    }
};

/**
 * Removes a VectorGQLModel item from a state’s vectors array by its `id` and dispatches an update.
 *
 * @param {Object} state - The current state object containing a `vectors` array.
 * @param {Object} vectorItem - The item to delete; must have `__typename === "VectorGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStateVectorItemDelete = (state, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = state;
        const newStateVectorItems = vectors.filter(
            item => item.id !== vectorItem.id
        );
        const newState = { ...others, vectors: newStateVectorItems };
        dispatch(ItemActions.item_update(newState));
    }
};

const StateVectorsAttributeQuery = `
query StateQueryRead($id: UUID!, $where: VectorInputFilter, $skip: Int, $limit: Int) {
    result: stateById(id: $id) {
        __typename
        id
        vectors(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
        }
    }
}
`

const StateVectorsAttributeAsyncAction = createAsyncGraphQLAction(
    StateVectorsAttributeQuery,
    processVectorAttributeFromGraphQLResult("vectors")
)

/**
 * A component for displaying the `vectors` attribute of an state entity.
 *
 * This component checks if the `vectors` attribute exists on the `state` object. If `vectors` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `vectors` array and
 * displays a placeholder message and a JSON representation for each item in the `vectors`.
 *
 * @component
 * @param {Object} props - The props for the StateVectorsAttribute component.
 * @param {Object} props.state - The object representing the state entity.
 * @param {Array} [props.state.vectors] - An array of vectors items associated with the state entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `vectors` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const stateEntity = { 
 *   vectors: [
 *     { id: 1, name: "Vector Item 1" }, 
 *     { id: 2, name: "Vector Item 2" }
 *   ] 
 * };
 *
 * <StateVectorsAttribute state={stateEntity} />
 */
export const StateVectorsAttribute = ({state, filter=Boolean}) => {
    const { vectors: unfiltered } = state
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


export const StateVectorsAttributeInfinite = ({state}) => { 
    const {vectors} = state

    return (
        <InfiniteScroll 
            Visualiser={'VectorMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={StateVectorsAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `vectors` from a `state` entity.
 *
 * This component uses the `StateVectorsAttributeAsyncAction` to asynchronously fetch
 * the `state.vectors` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each vector item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.state - The state entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `vectors` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered vectors or a loading/error placeholder.
 *
 * @example
 * <StateVectorsAttributeLazy state={{ id: "abc123" }} />
 *
 * 
 * @example
 * <StateVectorsAttributeLazy
 *   state={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const StateVectorsAttributeLazy = ({state, filter=Boolean}) => {
    const {loading, error, entity, fetch} = useAsyncAction(StateVectorsAttributeAsyncAction, state, {deferred: true})
    useEffect(() => {
        fetch(state)
    }, [state])

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    return <StateVectorsAttribute state={entity} filter={filter} />    
}