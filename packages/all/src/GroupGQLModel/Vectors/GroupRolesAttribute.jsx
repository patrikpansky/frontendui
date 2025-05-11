import { createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { InfiniteScroll } from "@hrbolek/uoisfrontend-shared"


/**
 * Inserts a RoleGQLModel item into a group’s roles array and dispatches an update.
 *
 * @param {Object} group - The current group object containing a `roles` array.
 * @param {Object} roleItem - The item to insert; must have `__typename === "RoleGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpGroupRoleItemInsert = (group, roleItem, dispatch) => {
    const { __typename } = roleItem;
    if (__typename === "RoleGQLModel") {
        const { roles, ...others } = group;
        const newGroupRoleItems = [...roles, roleItem];
        const newGroup = { ...others, roles: newGroupRoleItems };
        dispatch(ItemActions.item_update(newGroup));
    }
};

/**
 * Replaces an existing RoleGQLModel item in a group’s roles array and dispatches an update.
 *
 * @param {Object} group - The current group object containing a `roles` array.
 * @param {Object} roleItem - The updated item; must have `__typename === "RoleGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpGroupRoleItemUpdate = (group, roleItem, dispatch) => {
    const { __typename } = roleItem;
    if (__typename === "RoleGQLModel") {
        const { roles, ...others } = group;
        const newGroupRoleItems = roles.map(item =>
            item.id === roleItem.id ? roleItem : item
        );
        const newGroup = { ...others, roles: newGroupRoleItems };
        dispatch(ItemActions.item_update(newGroup));
    }
};

/**
 * Removes a RoleGQLModel item from a group’s roles array by its `id` and dispatches an update.
 *
 * @param {Object} group - The current group object containing a `roles` array.
 * @param {Object} roleItem - The item to delete; must have `__typename === "RoleGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpGroupRoleItemDelete = (group, roleItem, dispatch) => {
    const { __typename } = roleItem;
    if (__typename === "RoleGQLModel") {
        const { roles, ...others } = group;
        const newGroupRoleItems = roles.filter(
            item => item.id !== roleItem.id
        );
        const newGroup = { ...others, roles: newGroupRoleItems };
        dispatch(ItemActions.item_update(newGroup));
    }
};


/**
 * A component for displaying the `roles` attribute of an group entity.
 *
 * This component checks if the `roles` attribute exists on the `group` object. If `roles` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `roles` array and
 * displays a placeholder message and a JSON representation for each item in the `roles`.
 *
 * @component
 * @param {Object} props - The props for the GroupRolesAttribute component.
 * @param {Object} props.group - The object representing the group entity.
 * @param {Array} [props.group.roles] - An array of roles items associated with the group entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `roles` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const groupEntity = { 
 *   roles: [
 *     { id: 1, name: "Role Item 1" }, 
 *     { id: 2, name: "Role Item 2" }
 *   ] 
 * };
 *
 * <GroupRolesAttribute group={groupEntity} />
 */
export const GroupRolesAttribute = ({group}) => {
    const { roles } = group
    if (typeof roles === 'undefined') return null
    return (
        <>
            {roles.map(
                role => <div id={role.id} key={role.id}>
                    Probably {'<RoleMediumCard role=\{role\} />'} <br />
                    <pre>{JSON.stringify(role, null, 4)}</pre>
                </div>
            )}
        </>
    )
}

const GroupRolesAttributeQuery = `
query GroupQueryRead($id: id, $where: RoleInputFilter, $skip: Int, $limit: Int) {
    result: groupById(id: $id) {
        __typename
        id
        roles(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
            lastchange
            created
            createdbyId
            changedbyId
            rbacobjectId
            startdate
            enddate
            roletypeId
            userId
            groupId
        }
    }
}
`

const GroupRolesAttributeAsyncAction = createAsyncGraphQLAction(
    GroupRolesAttributeQuery,
    processVectorAttributeFromGraphQLResult("roles")
)

export const GroupRolesAttributeInfinite = ({group}) => { 
    const {roles} = group

    return (
        <InfiniteScroll 
            Visualiser={'RoleMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={GroupRolesAttributeAsyncAction}
        />
    )
}