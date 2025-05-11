import { createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { InfiniteScroll } from "@hrbolek/uoisfrontend-shared"


/**
 * Inserts a RoleGQLModel item into a user’s roles array and dispatches an update.
 *
 * @param {Object} user - The current user object containing a `roles` array.
 * @param {Object} roleItem - The item to insert; must have `__typename === "RoleGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpUserRoleItemInsert = (user, roleItem, dispatch) => {
    const { __typename } = roleItem;
    if (__typename === "RoleGQLModel") {
        const { roles, ...others } = user;
        const newUserRoleItems = [...roles, roleItem];
        const newUser = { ...others, roles: newUserRoleItems };
        dispatch(ItemActions.item_update(newUser));
    }
};

/**
 * Replaces an existing RoleGQLModel item in a user’s roles array and dispatches an update.
 *
 * @param {Object} user - The current user object containing a `roles` array.
 * @param {Object} roleItem - The updated item; must have `__typename === "RoleGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpUserRoleItemUpdate = (user, roleItem, dispatch) => {
    const { __typename } = roleItem;
    if (__typename === "RoleGQLModel") {
        const { roles, ...others } = user;
        const newUserRoleItems = roles.map(item =>
            item.id === roleItem.id ? roleItem : item
        );
        const newUser = { ...others, roles: newUserRoleItems };
        dispatch(ItemActions.item_update(newUser));
    }
};

/**
 * Removes a RoleGQLModel item from a user’s roles array by its `id` and dispatches an update.
 *
 * @param {Object} user - The current user object containing a `roles` array.
 * @param {Object} roleItem - The item to delete; must have `__typename === "RoleGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpUserRoleItemDelete = (user, roleItem, dispatch) => {
    const { __typename } = roleItem;
    if (__typename === "RoleGQLModel") {
        const { roles, ...others } = user;
        const newUserRoleItems = roles.filter(
            item => item.id !== roleItem.id
        );
        const newUser = { ...others, roles: newUserRoleItems };
        dispatch(ItemActions.item_update(newUser));
    }
};


/**
 * A component for displaying the `roles` attribute of an user entity.
 *
 * This component checks if the `roles` attribute exists on the `user` object. If `roles` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `roles` array and
 * displays a placeholder message and a JSON representation for each item in the `roles`.
 *
 * @component
 * @param {Object} props - The props for the UserRolesAttribute component.
 * @param {Object} props.user - The object representing the user entity.
 * @param {Array} [props.user.roles] - An array of roles items associated with the user entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `roles` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const userEntity = { 
 *   roles: [
 *     { id: 1, name: "Role Item 1" }, 
 *     { id: 2, name: "Role Item 2" }
 *   ] 
 * };
 *
 * <UserRolesAttribute user={userEntity} />
 */
export const UserRolesAttribute = ({user}) => {
    const { roles } = user
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

const UserRolesAttributeQuery = `
query UserQueryRead($id: id, $where: RoleInputFilter, $skip: Int, $limit: Int) {
    result: userById(id: $id) {
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

const UserRolesAttributeAsyncAction = createAsyncGraphQLAction(
    UserRolesAttributeQuery,
    processVectorAttributeFromGraphQLResult("roles")
)

export const UserRolesAttributeInfinite = ({user}) => { 
    const {roles} = user

    return (
        <InfiniteScroll 
            Visualiser={'RoleMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={UserRolesAttributeAsyncAction}
        />
    )
}