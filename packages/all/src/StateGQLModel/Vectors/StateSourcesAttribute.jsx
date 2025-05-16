import { useAsyncAction, createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, InfiniteScroll, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { use, useEffect } from "react";


/**
 * Inserts a SourceGQLModel item into a state’s sources array and dispatches an update.
 *
 * @param {Object} state - The current state object containing a `sources` array.
 * @param {Object} sourceItem - The item to insert; must have `__typename === "SourceGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStateSourceItemInsert = (state, sourceItem, dispatch) => {
    const { __typename } = sourceItem;
    if (__typename === "SourceGQLModel") {
        const { sources, ...others } = state;
        const newStateSourceItems = [...sources, sourceItem];
        const newState = { ...others, sources: newStateSourceItems };
        dispatch(ItemActions.item_update(newState));
    }
};

/**
 * Replaces an existing SourceGQLModel item in a state’s sources array and dispatches an update.
 *
 * @param {Object} state - The current state object containing a `sources` array.
 * @param {Object} sourceItem - The updated item; must have `__typename === "SourceGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStateSourceItemUpdate = (state, sourceItem, dispatch) => {
    const { __typename } = sourceItem;
    if (__typename === "SourceGQLModel") {
        const { sources, ...others } = state;
        const newStateSourceItems = sources.map(item =>
            item.id === sourceItem.id ? sourceItem : item
        );
        const newState = { ...others, sources: newStateSourceItems };
        dispatch(ItemActions.item_update(newState));
    }
};

/**
 * Removes a SourceGQLModel item from a state’s sources array by its `id` and dispatches an update.
 *
 * @param {Object} state - The current state object containing a `sources` array.
 * @param {Object} sourceItem - The item to delete; must have `__typename === "SourceGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStateSourceItemDelete = (state, sourceItem, dispatch) => {
    const { __typename } = sourceItem;
    if (__typename === "SourceGQLModel") {
        const { sources, ...others } = state;
        const newStateSourceItems = sources.filter(
            item => item.id !== sourceItem.id
        );
        const newState = { ...others, sources: newStateSourceItems };
        dispatch(ItemActions.item_update(newState));
    }
};

const StateSourcesAttributeQuery = `
query StateQueryRead($id: UUID!, $where: SourceInputFilter, $skip: Int, $limit: Int) {
    result: stateById(id: $id) {
        __typename
        id
        sources(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
            lastchange
            created
            createdbyId
            changedbyId
            rbacobjectId
            sourceId
            targetId
            statemachineId
        }
    }
}
`

const StateSourcesAttributeAsyncAction = createAsyncGraphQLAction(
    StateSourcesAttributeQuery,
    processVectorAttributeFromGraphQLResult("sources")
)

/**
 * A component for displaying the `sources` attribute of an state entity.
 *
 * This component checks if the `sources` attribute exists on the `state` object. If `sources` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `sources` array and
 * displays a placeholder message and a JSON representation for each item in the `sources`.
 *
 * @component
 * @param {Object} props - The props for the StateSourcesAttribute component.
 * @param {Object} props.state - The object representing the state entity.
 * @param {Array} [props.state.sources] - An array of sources items associated with the state entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `sources` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const stateEntity = { 
 *   sources: [
 *     { id: 1, name: "Source Item 1" }, 
 *     { id: 2, name: "Source Item 2" }
 *   ] 
 * };
 *
 * <StateSourcesAttribute state={stateEntity} />
 */
export const StateSourcesAttribute = ({state, filter=Boolean}) => {
    const { sources: unfiltered } = state
    if (typeof unfiltered === 'undefined') return null
    const sources = unfiltered.filter(filter)
    if (sources.length === 0) return null
    return (
        <>
            {sources.map(
                source => <div id={source.id} key={source.id}>
                    {/* <SourceMediumCard source={source} /> */}
                    {/* <SourceLink source={source} /> */}
                    Probably {'<SourceMediumCard source=\{source\} />'} <br />
                    <pre>{JSON.stringify(source, null, 4)}</pre>
                </div>
            )}
        </>
    )
}


export const StateSourcesAttributeInfinite = ({state}) => { 
    const {sources} = state

    return (
        <InfiniteScroll 
            Visualiser={'SourceMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={StateSourcesAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `sources` from a `state` entity.
 *
 * This component uses the `StateSourcesAttributeAsyncAction` to asynchronously fetch
 * the `state.sources` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each source item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.state - The state entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `sources` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered sources or a loading/error placeholder.
 *
 * @example
 * <StateSourcesAttributeLazy state={{ id: "abc123" }} />
 *
 * 
 * @example
 * <StateSourcesAttributeLazy
 *   state={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const StateSourcesAttributeLazy = ({state, filter=Boolean}) => {
    const {loading, error, entity, fetch} = useAsyncAction(StateSourcesAttributeAsyncAction, state, {deferred: true})
    useEffect(() => {
        fetch(state)
    }, [state])

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    return <StateSourcesAttribute state={entity} filter={filter} />    
}