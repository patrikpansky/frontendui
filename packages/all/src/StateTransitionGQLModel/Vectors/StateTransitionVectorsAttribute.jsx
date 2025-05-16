import { useAsyncAction, createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, InfiniteScroll, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { use, useEffect } from "react";


/**
 * Inserts a VectorGQLModel item into a statetransition’s vectors array and dispatches an update.
 *
 * @param {Object} statetransition - The current statetransition object containing a `vectors` array.
 * @param {Object} vectorItem - The item to insert; must have `__typename === "VectorGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStateTransitionVectorItemInsert = (statetransition, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = statetransition;
        const newStateTransitionVectorItems = [...vectors, vectorItem];
        const newStateTransition = { ...others, vectors: newStateTransitionVectorItems };
        dispatch(ItemActions.item_update(newStateTransition));
    }
};

/**
 * Replaces an existing VectorGQLModel item in a statetransition’s vectors array and dispatches an update.
 *
 * @param {Object} statetransition - The current statetransition object containing a `vectors` array.
 * @param {Object} vectorItem - The updated item; must have `__typename === "VectorGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStateTransitionVectorItemUpdate = (statetransition, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = statetransition;
        const newStateTransitionVectorItems = vectors.map(item =>
            item.id === vectorItem.id ? vectorItem : item
        );
        const newStateTransition = { ...others, vectors: newStateTransitionVectorItems };
        dispatch(ItemActions.item_update(newStateTransition));
    }
};

/**
 * Removes a VectorGQLModel item from a statetransition’s vectors array by its `id` and dispatches an update.
 *
 * @param {Object} statetransition - The current statetransition object containing a `vectors` array.
 * @param {Object} vectorItem - The item to delete; must have `__typename === "VectorGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStateTransitionVectorItemDelete = (statetransition, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = statetransition;
        const newStateTransitionVectorItems = vectors.filter(
            item => item.id !== vectorItem.id
        );
        const newStateTransition = { ...others, vectors: newStateTransitionVectorItems };
        dispatch(ItemActions.item_update(newStateTransition));
    }
};

const StateTransitionVectorsAttributeQuery = `
query StateTransitionQueryRead($id: UUID!, $where: VectorInputFilter, $skip: Int, $limit: Int) {
    result: statetransitionById(id: $id) {
        __typename
        id
        vectors(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
        }
    }
}
`

const StateTransitionVectorsAttributeAsyncAction = createAsyncGraphQLAction(
    StateTransitionVectorsAttributeQuery,
    processVectorAttributeFromGraphQLResult("vectors")
)

/**
 * A component for displaying the `vectors` attribute of an statetransition entity.
 *
 * This component checks if the `vectors` attribute exists on the `statetransition` object. If `vectors` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `vectors` array and
 * displays a placeholder message and a JSON representation for each item in the `vectors`.
 *
 * @component
 * @param {Object} props - The props for the StateTransitionVectorsAttribute component.
 * @param {Object} props.statetransition - The object representing the statetransition entity.
 * @param {Array} [props.statetransition.vectors] - An array of vectors items associated with the statetransition entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `vectors` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const statetransitionEntity = { 
 *   vectors: [
 *     { id: 1, name: "Vector Item 1" }, 
 *     { id: 2, name: "Vector Item 2" }
 *   ] 
 * };
 *
 * <StateTransitionVectorsAttribute statetransition={statetransitionEntity} />
 */
export const StateTransitionVectorsAttribute = ({statetransition, filter=Boolean}) => {
    const { vectors: unfiltered } = statetransition
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


export const StateTransitionVectorsAttributeInfinite = ({statetransition}) => { 
    const {vectors} = statetransition

    return (
        <InfiniteScroll 
            Visualiser={'VectorMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={StateTransitionVectorsAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `vectors` from a `statetransition` entity.
 *
 * This component uses the `StateTransitionVectorsAttributeAsyncAction` to asynchronously fetch
 * the `statetransition.vectors` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each vector item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.statetransition - The statetransition entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `vectors` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered vectors or a loading/error placeholder.
 *
 * @example
 * <StateTransitionVectorsAttributeLazy statetransition={{ id: "abc123" }} />
 *
 * 
 * @example
 * <StateTransitionVectorsAttributeLazy
 *   statetransition={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const StateTransitionVectorsAttributeLazy = ({statetransition, filter=Boolean}) => {
    const {loading, error, entity, fetch} = useAsyncAction(StateTransitionVectorsAttributeAsyncAction, statetransition, {deferred: true})
    useEffect(() => {
        fetch(statetransition)
    }, [statetransition])

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    return <StateTransitionVectorsAttribute statetransition={entity} filter={filter} />    
}