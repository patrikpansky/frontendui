import { createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { InfiniteScroll } from "@hrbolek/uoisfrontend-shared"


/**
 * Inserts a MastergroupGQLModel item into a group’s mastergroups array and dispatches an update.
 *
 * @param {Object} group - The current group object containing a `mastergroups` array.
 * @param {Object} mastergroupItem - The item to insert; must have `__typename === "MastergroupGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpGroupMastergroupItemInsert = (group, mastergroupItem, dispatch) => {
    const { __typename } = mastergroupItem;
    if (__typename === "MastergroupGQLModel") {
        const { mastergroups, ...others } = group;
        const newGroupMastergroupItems = [...mastergroups, mastergroupItem];
        const newGroup = { ...others, mastergroups: newGroupMastergroupItems };
        dispatch(ItemActions.item_update(newGroup));
    }
};

/**
 * Replaces an existing MastergroupGQLModel item in a group’s mastergroups array and dispatches an update.
 *
 * @param {Object} group - The current group object containing a `mastergroups` array.
 * @param {Object} mastergroupItem - The updated item; must have `__typename === "MastergroupGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpGroupMastergroupItemUpdate = (group, mastergroupItem, dispatch) => {
    const { __typename } = mastergroupItem;
    if (__typename === "MastergroupGQLModel") {
        const { mastergroups, ...others } = group;
        const newGroupMastergroupItems = mastergroups.map(item =>
            item.id === mastergroupItem.id ? mastergroupItem : item
        );
        const newGroup = { ...others, mastergroups: newGroupMastergroupItems };
        dispatch(ItemActions.item_update(newGroup));
    }
};

/**
 * Removes a MastergroupGQLModel item from a group’s mastergroups array by its `id` and dispatches an update.
 *
 * @param {Object} group - The current group object containing a `mastergroups` array.
 * @param {Object} mastergroupItem - The item to delete; must have `__typename === "MastergroupGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpGroupMastergroupItemDelete = (group, mastergroupItem, dispatch) => {
    const { __typename } = mastergroupItem;
    if (__typename === "MastergroupGQLModel") {
        const { mastergroups, ...others } = group;
        const newGroupMastergroupItems = mastergroups.filter(
            item => item.id !== mastergroupItem.id
        );
        const newGroup = { ...others, mastergroups: newGroupMastergroupItems };
        dispatch(ItemActions.item_update(newGroup));
    }
};


/**
 * A component for displaying the `mastergroups` attribute of an group entity.
 *
 * This component checks if the `mastergroups` attribute exists on the `group` object. If `mastergroups` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `mastergroups` array and
 * displays a placeholder message and a JSON representation for each item in the `mastergroups`.
 *
 * @component
 * @param {Object} props - The props for the GroupMastergroupsAttribute component.
 * @param {Object} props.group - The object representing the group entity.
 * @param {Array} [props.group.mastergroups] - An array of mastergroups items associated with the group entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `mastergroups` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const groupEntity = { 
 *   mastergroups: [
 *     { id: 1, name: "Mastergroup Item 1" }, 
 *     { id: 2, name: "Mastergroup Item 2" }
 *   ] 
 * };
 *
 * <GroupMastergroupsAttribute group={groupEntity} />
 */
export const GroupMastergroupsAttribute = ({group}) => {
    const { mastergroups } = group
    if (typeof mastergroups === 'undefined') return null
    return (
        <>
            {mastergroups.map(
                mastergroup => <div id={mastergroup.id} key={mastergroup.id}>
                    Probably {'<MastergroupMediumCard mastergroup=\{mastergroup\} />'} <br />
                    <pre>{JSON.stringify(mastergroup, null, 4)}</pre>
                </div>
            )}
        </>
    )
}

const GroupMastergroupsAttributeQuery = `
query GroupQueryRead($id: id, $where: MastergroupInputFilter, $skip: Int, $limit: Int) {
    result: groupById(id: $id) {
        __typename
        id
        mastergroups(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
            lastchange
            created
            createdbyId
            changedbyId
            rbacobjectId
            startdate
            enddate
            grouptypeId
            mastergroupId
        }
    }
}
`

const GroupMastergroupsAttributeAsyncAction = createAsyncGraphQLAction(
    GroupMastergroupsAttributeQuery,
    processVectorAttributeFromGraphQLResult("mastergroups")
)

export const GroupMastergroupsAttributeInfinite = ({group}) => { 
    const {mastergroups} = group

    return (
        <InfiniteScroll 
            Visualiser={'MastergroupMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={GroupMastergroupsAttributeAsyncAction}
        />
    )
}