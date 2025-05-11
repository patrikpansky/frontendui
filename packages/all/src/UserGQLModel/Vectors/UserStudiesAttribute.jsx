import { createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { InfiniteScroll } from "@hrbolek/uoisfrontend-shared"


/**
 * Inserts a StudieGQLModel item into a user’s studies array and dispatches an update.
 *
 * @param {Object} user - The current user object containing a `studies` array.
 * @param {Object} studieItem - The item to insert; must have `__typename === "StudieGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpUserStudieItemInsert = (user, studieItem, dispatch) => {
    const { __typename } = studieItem;
    if (__typename === "StudieGQLModel") {
        const { studies, ...others } = user;
        const newUserStudieItems = [...studies, studieItem];
        const newUser = { ...others, studies: newUserStudieItems };
        dispatch(ItemActions.item_update(newUser));
    }
};

/**
 * Replaces an existing StudieGQLModel item in a user’s studies array and dispatches an update.
 *
 * @param {Object} user - The current user object containing a `studies` array.
 * @param {Object} studieItem - The updated item; must have `__typename === "StudieGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpUserStudieItemUpdate = (user, studieItem, dispatch) => {
    const { __typename } = studieItem;
    if (__typename === "StudieGQLModel") {
        const { studies, ...others } = user;
        const newUserStudieItems = studies.map(item =>
            item.id === studieItem.id ? studieItem : item
        );
        const newUser = { ...others, studies: newUserStudieItems };
        dispatch(ItemActions.item_update(newUser));
    }
};

/**
 * Removes a StudieGQLModel item from a user’s studies array by its `id` and dispatches an update.
 *
 * @param {Object} user - The current user object containing a `studies` array.
 * @param {Object} studieItem - The item to delete; must have `__typename === "StudieGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpUserStudieItemDelete = (user, studieItem, dispatch) => {
    const { __typename } = studieItem;
    if (__typename === "StudieGQLModel") {
        const { studies, ...others } = user;
        const newUserStudieItems = studies.filter(
            item => item.id !== studieItem.id
        );
        const newUser = { ...others, studies: newUserStudieItems };
        dispatch(ItemActions.item_update(newUser));
    }
};


/**
 * A component for displaying the `studies` attribute of an user entity.
 *
 * This component checks if the `studies` attribute exists on the `user` object. If `studies` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `studies` array and
 * displays a placeholder message and a JSON representation for each item in the `studies`.
 *
 * @component
 * @param {Object} props - The props for the UserStudiesAttribute component.
 * @param {Object} props.user - The object representing the user entity.
 * @param {Array} [props.user.studies] - An array of studies items associated with the user entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `studies` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const userEntity = { 
 *   studies: [
 *     { id: 1, name: "Studie Item 1" }, 
 *     { id: 2, name: "Studie Item 2" }
 *   ] 
 * };
 *
 * <UserStudiesAttribute user={userEntity} />
 */
export const UserStudiesAttribute = ({user}) => {
    const { studies } = user
    if (typeof studies === 'undefined') return null
    return (
        <>
            {studies.map(
                studie => <div id={studie.id} key={studie.id}>
                    Probably {'<StudieMediumCard studie=\{studie\} />'} <br />
                    <pre>{JSON.stringify(studie, null, 4)}</pre>
                </div>
            )}
        </>
    )
}

const UserStudiesAttributeQuery = `
query UserQueryRead($id: id, $where: StudieInputFilter, $skip: Int, $limit: Int) {
    result: userById(id: $id) {
        __typename
        id
        studies(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
            myId
            lastchange
            created
            createdbyId
            changedbyId
            rbacobjectId
            userId
            programId
            stateId
        }
    }
}
`

const UserStudiesAttributeAsyncAction = createAsyncGraphQLAction(
    UserStudiesAttributeQuery,
    processVectorAttributeFromGraphQLResult("studies")
)

export const UserStudiesAttributeInfinite = ({user}) => { 
    const {studies} = user

    return (
        <InfiniteScroll 
            Visualiser={'StudieMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={UserStudiesAttributeAsyncAction}
        />
    )
}