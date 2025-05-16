import { useAsyncAction, createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, InfiniteScroll, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { use, useEffect } from "react";


/**
 * Inserts a TransitionGQLModel item into a statemachine’s transitions array and dispatches an update.
 *
 * @param {Object} statemachine - The current statemachine object containing a `transitions` array.
 * @param {Object} transitionItem - The item to insert; must have `__typename === "TransitionGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStateMachineTransitionItemInsert = (statemachine, transitionItem, dispatch) => {
    const { __typename } = transitionItem;
    if (__typename === "TransitionGQLModel") {
        const { transitions, ...others } = statemachine;
        const newStateMachineTransitionItems = [...transitions, transitionItem];
        const newStateMachine = { ...others, transitions: newStateMachineTransitionItems };
        dispatch(ItemActions.item_update(newStateMachine));
    }
};

/**
 * Replaces an existing TransitionGQLModel item in a statemachine’s transitions array and dispatches an update.
 *
 * @param {Object} statemachine - The current statemachine object containing a `transitions` array.
 * @param {Object} transitionItem - The updated item; must have `__typename === "TransitionGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStateMachineTransitionItemUpdate = (statemachine, transitionItem, dispatch) => {
    const { __typename } = transitionItem;
    if (__typename === "TransitionGQLModel") {
        const { transitions, ...others } = statemachine;
        const newStateMachineTransitionItems = transitions.map(item =>
            item.id === transitionItem.id ? transitionItem : item
        );
        const newStateMachine = { ...others, transitions: newStateMachineTransitionItems };
        dispatch(ItemActions.item_update(newStateMachine));
    }
};

/**
 * Removes a TransitionGQLModel item from a statemachine’s transitions array by its `id` and dispatches an update.
 *
 * @param {Object} statemachine - The current statemachine object containing a `transitions` array.
 * @param {Object} transitionItem - The item to delete; must have `__typename === "TransitionGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStateMachineTransitionItemDelete = (statemachine, transitionItem, dispatch) => {
    const { __typename } = transitionItem;
    if (__typename === "TransitionGQLModel") {
        const { transitions, ...others } = statemachine;
        const newStateMachineTransitionItems = transitions.filter(
            item => item.id !== transitionItem.id
        );
        const newStateMachine = { ...others, transitions: newStateMachineTransitionItems };
        dispatch(ItemActions.item_update(newStateMachine));
    }
};

const StateMachineTransitionsAttributeQuery = `
query StateMachineQueryRead($id: UUID!, $where: TransitionInputFilter, $skip: Int, $limit: Int) {
    result: statemachineById(id: $id) {
        __typename
        id
        transitions(skip: $skip, limit: $limit, where: $where) {
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

const StateMachineTransitionsAttributeAsyncAction = createAsyncGraphQLAction(
    StateMachineTransitionsAttributeQuery,
    processVectorAttributeFromGraphQLResult("transitions")
)

/**
 * A component for displaying the `transitions` attribute of an statemachine entity.
 *
 * This component checks if the `transitions` attribute exists on the `statemachine` object. If `transitions` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `transitions` array and
 * displays a placeholder message and a JSON representation for each item in the `transitions`.
 *
 * @component
 * @param {Object} props - The props for the StateMachineTransitionsAttribute component.
 * @param {Object} props.statemachine - The object representing the statemachine entity.
 * @param {Array} [props.statemachine.transitions] - An array of transitions items associated with the statemachine entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `transitions` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const statemachineEntity = { 
 *   transitions: [
 *     { id: 1, name: "Transition Item 1" }, 
 *     { id: 2, name: "Transition Item 2" }
 *   ] 
 * };
 *
 * <StateMachineTransitionsAttribute statemachine={statemachineEntity} />
 */
export const StateMachineTransitionsAttribute = ({statemachine, filter=Boolean}) => {
    const { transitions: unfiltered } = statemachine
    if (typeof unfiltered === 'undefined') return null
    const transitions = unfiltered.filter(filter)
    if (transitions.length === 0) return null
    return (
        <>
            {transitions.map(
                transition => <div id={transition.id} key={transition.id}>
                    {/* <TransitionMediumCard transition={transition} /> */}
                    {/* <TransitionLink transition={transition} /> */}
                    Probably {'<TransitionMediumCard transition=\{transition\} />'} <br />
                    <pre>{JSON.stringify(transition, null, 4)}</pre>
                </div>
            )}
        </>
    )
}


export const StateMachineTransitionsAttributeInfinite = ({statemachine}) => { 
    const {transitions} = statemachine

    return (
        <InfiniteScroll 
            Visualiser={'TransitionMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={StateMachineTransitionsAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `transitions` from a `statemachine` entity.
 *
 * This component uses the `StateMachineTransitionsAttributeAsyncAction` to asynchronously fetch
 * the `statemachine.transitions` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each transition item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.statemachine - The statemachine entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `transitions` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered transitions or a loading/error placeholder.
 *
 * @example
 * <StateMachineTransitionsAttributeLazy statemachine={{ id: "abc123" }} />
 *
 * 
 * @example
 * <StateMachineTransitionsAttributeLazy
 *   statemachine={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const StateMachineTransitionsAttributeLazy = ({statemachine, filter=Boolean}) => {
    const {loading, error, entity, fetch} = useAsyncAction(StateMachineTransitionsAttributeAsyncAction, statemachine, {deferred: true})
    useEffect(() => {
        fetch(statemachine)
    }, [statemachine])

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    return <StateMachineTransitionsAttribute statemachine={entity} filter={filter} />    
}