import { createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { InfiniteScroll } from "@hrbolek/uoisfrontend-shared"


/**
 * Inserts a MemberofGQLModel item into a user’s memberofs array and dispatches an update.
 *
 * @param {Object} user - The current user object containing a `memberofs` array.
 * @param {Object} memberofItem - The item to insert; must have `__typename === "MemberofGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpUserMemberofItemInsert = (user, memberofItem, dispatch) => {
    const { __typename } = memberofItem;
    if (__typename === "MemberofGQLModel") {
        const { memberofs, ...others } = user;
        const newUserMemberofItems = [...memberofs, memberofItem];
        const newUser = { ...others, memberofs: newUserMemberofItems };
        dispatch(ItemActions.item_update(newUser));
    }
};

/**
 * Replaces an existing MemberofGQLModel item in a user’s memberofs array and dispatches an update.
 *
 * @param {Object} user - The current user object containing a `memberofs` array.
 * @param {Object} memberofItem - The updated item; must have `__typename === "MemberofGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpUserMemberofItemUpdate = (user, memberofItem, dispatch) => {
    const { __typename } = memberofItem;
    if (__typename === "MemberofGQLModel") {
        const { memberofs, ...others } = user;
        const newUserMemberofItems = memberofs.map(item =>
            item.id === memberofItem.id ? memberofItem : item
        );
        const newUser = { ...others, memberofs: newUserMemberofItems };
        dispatch(ItemActions.item_update(newUser));
    }
};

/**
 * Removes a MemberofGQLModel item from a user’s memberofs array by its `id` and dispatches an update.
 *
 * @param {Object} user - The current user object containing a `memberofs` array.
 * @param {Object} memberofItem - The item to delete; must have `__typename === "MemberofGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpUserMemberofItemDelete = (user, memberofItem, dispatch) => {
    const { __typename } = memberofItem;
    if (__typename === "MemberofGQLModel") {
        const { memberofs, ...others } = user;
        const newUserMemberofItems = memberofs.filter(
            item => item.id !== memberofItem.id
        );
        const newUser = { ...others, memberofs: newUserMemberofItems };
        dispatch(ItemActions.item_update(newUser));
    }
};


/**
 * A component for displaying the `memberofs` attribute of an user entity.
 *
 * This component checks if the `memberofs` attribute exists on the `user` object. If `memberofs` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `memberofs` array and
 * displays a placeholder message and a JSON representation for each item in the `memberofs`.
 *
 * @component
 * @param {Object} props - The props for the UserMemberofsAttribute component.
 * @param {Object} props.user - The object representing the user entity.
 * @param {Array} [props.user.memberofs] - An array of memberofs items associated with the user entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `memberofs` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const userEntity = { 
 *   memberofs: [
 *     { id: 1, name: "Memberof Item 1" }, 
 *     { id: 2, name: "Memberof Item 2" }
 *   ] 
 * };
 *
 * <UserMemberofsAttribute user={userEntity} />
 */
export const UserMemberofsAttribute = ({user}) => {
    const { memberofs } = user
    if (typeof memberofs === 'undefined') return null
    return (
        <>
            {memberofs.map(
                memberof => <div id={memberof.id} key={memberof.id}>
                    Probably {'<MemberofMediumCard memberof=\{memberof\} />'} <br />
                    <pre>{JSON.stringify(memberof, null, 4)}</pre>
                </div>
            )}
        </>
    )
}

const UserMemberofsAttributeQuery = `
query UserQueryRead($id: id, $where: MemberofInputFilter, $skip: Int, $limit: Int) {
    result: userById(id: $id) {
        __typename
        id
        memberofs(skip: $skip, limit: $limit, where: $where) {
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

const UserMemberofsAttributeAsyncAction = createAsyncGraphQLAction(
    UserMemberofsAttributeQuery,
    processVectorAttributeFromGraphQLResult("memberofs")
)

export const UserMemberofsAttributeInfinite = ({user}) => { 
    const {memberofs} = user

    return (
        <InfiniteScroll 
            Visualiser={'MemberofMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={UserMemberofsAttributeAsyncAction}
        />
    )
}