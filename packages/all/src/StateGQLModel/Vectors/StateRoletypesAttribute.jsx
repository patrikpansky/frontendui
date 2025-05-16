import { useAsyncAction, createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, InfiniteScroll, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { use, useEffect } from "react";


/**
 * Inserts a RoletypeGQLModel item into a state’s roletypes array and dispatches an update.
 *
 * @param {Object} state - The current state object containing a `roletypes` array.
 * @param {Object} roletypeItem - The item to insert; must have `__typename === "RoletypeGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStateRoletypeItemInsert = (state, roletypeItem, dispatch) => {
    const { __typename } = roletypeItem;
    if (__typename === "RoletypeGQLModel") {
        const { roletypes, ...others } = state;
        const newStateRoletypeItems = [...roletypes, roletypeItem];
        const newState = { ...others, roletypes: newStateRoletypeItems };
        dispatch(ItemActions.item_update(newState));
    }
};

/**
 * Replaces an existing RoletypeGQLModel item in a state’s roletypes array and dispatches an update.
 *
 * @param {Object} state - The current state object containing a `roletypes` array.
 * @param {Object} roletypeItem - The updated item; must have `__typename === "RoletypeGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStateRoletypeItemUpdate = (state, roletypeItem, dispatch) => {
    const { __typename } = roletypeItem;
    if (__typename === "RoletypeGQLModel") {
        const { roletypes, ...others } = state;
        const newStateRoletypeItems = roletypes.map(item =>
            item.id === roletypeItem.id ? roletypeItem : item
        );
        const newState = { ...others, roletypes: newStateRoletypeItems };
        dispatch(ItemActions.item_update(newState));
    }
};

/**
 * Removes a RoletypeGQLModel item from a state’s roletypes array by its `id` and dispatches an update.
 *
 * @param {Object} state - The current state object containing a `roletypes` array.
 * @param {Object} roletypeItem - The item to delete; must have `__typename === "RoletypeGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStateRoletypeItemDelete = (state, roletypeItem, dispatch) => {
    const { __typename } = roletypeItem;
    if (__typename === "RoletypeGQLModel") {
        const { roletypes, ...others } = state;
        const newStateRoletypeItems = roletypes.filter(
            item => item.id !== roletypeItem.id
        );
        const newState = { ...others, roletypes: newStateRoletypeItems };
        dispatch(ItemActions.item_update(newState));
    }
};

const StateRoletypesAttributeQuery = `
query StateQueryRead($id: UUID!, $where: RoletypeInputFilter, $skip: Int, $limit: Int) {
    result: stateById(id: $id) {
        __typename
        id
        roletypes(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
            lastchange
            created
            createdbyId
            changedbyId
            rbacobjectId
            categoryId
        }
    }
}
`

const StateRoletypesAttributeAsyncAction = createAsyncGraphQLAction(
    StateRoletypesAttributeQuery,
    processVectorAttributeFromGraphQLResult("roletypes")
)

/**
 * A component for displaying the `roletypes` attribute of an state entity.
 *
 * This component checks if the `roletypes` attribute exists on the `state` object. If `roletypes` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `roletypes` array and
 * displays a placeholder message and a JSON representation for each item in the `roletypes`.
 *
 * @component
 * @param {Object} props - The props for the StateRoletypesAttribute component.
 * @param {Object} props.state - The object representing the state entity.
 * @param {Array} [props.state.roletypes] - An array of roletypes items associated with the state entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `roletypes` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const stateEntity = { 
 *   roletypes: [
 *     { id: 1, name: "Roletype Item 1" }, 
 *     { id: 2, name: "Roletype Item 2" }
 *   ] 
 * };
 *
 * <StateRoletypesAttribute state={stateEntity} />
 */
export const StateRoletypesAttribute = ({state, filter=Boolean}) => {
    const { roletypes: unfiltered } = state
    if (typeof unfiltered === 'undefined') return null
    const roletypes = unfiltered.filter(filter)
    if (roletypes.length === 0) return null
    return (
        <>
            {roletypes.map(
                roletype => <div id={roletype.id} key={roletype.id}>
                    {/* <RoletypeMediumCard roletype={roletype} /> */}
                    {/* <RoletypeLink roletype={roletype} /> */}
                    Probably {'<RoletypeMediumCard roletype=\{roletype\} />'} <br />
                    <pre>{JSON.stringify(roletype, null, 4)}</pre>
                </div>
            )}
        </>
    )
}


export const StateRoletypesAttributeInfinite = ({state}) => { 
    const {roletypes} = state

    return (
        <InfiniteScroll 
            Visualiser={'RoletypeMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={StateRoletypesAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `roletypes` from a `state` entity.
 *
 * This component uses the `StateRoletypesAttributeAsyncAction` to asynchronously fetch
 * the `state.roletypes` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each roletype item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.state - The state entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `roletypes` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered roletypes or a loading/error placeholder.
 *
 * @example
 * <StateRoletypesAttributeLazy state={{ id: "abc123" }} />
 *
 * 
 * @example
 * <StateRoletypesAttributeLazy
 *   state={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const StateRoletypesAttributeLazy = ({state, filter=Boolean}) => {
    const {loading, error, entity, fetch} = useAsyncAction(StateRoletypesAttributeAsyncAction, state, {deferred: true})
    useEffect(() => {
        fetch(state)
    }, [state])

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    return <StateRoletypesAttribute state={entity} filter={filter} />    
}