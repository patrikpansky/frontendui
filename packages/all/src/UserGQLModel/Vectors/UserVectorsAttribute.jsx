import { createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { InfiniteScroll } from "@hrbolek/uoisfrontend-shared"


/**
 * Inserts a VectorGQLModel item into a user’s vectors array and dispatches an update.
 *
 * @param {Object} user - The current user object containing a `vectors` array.
 * @param {Object} vectorItem - The item to insert; must have `__typename === "VectorGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpUserVectorItemInsert = (user, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = user;
        const newUserVectorItems = [...vectors, vectorItem];
        const newUser = { ...others, vectors: newUserVectorItems };
        dispatch(ItemActions.item_update(newUser));
    }
};

/**
 * Replaces an existing VectorGQLModel item in a user’s vectors array and dispatches an update.
 *
 * @param {Object} user - The current user object containing a `vectors` array.
 * @param {Object} vectorItem - The updated item; must have `__typename === "VectorGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpUserVectorItemUpdate = (user, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = user;
        const newUserVectorItems = vectors.map(item =>
            item.id === vectorItem.id ? vectorItem : item
        );
        const newUser = { ...others, vectors: newUserVectorItems };
        dispatch(ItemActions.item_update(newUser));
    }
};

/**
 * Removes a VectorGQLModel item from a user’s vectors array by its `id` and dispatches an update.
 *
 * @param {Object} user - The current user object containing a `vectors` array.
 * @param {Object} vectorItem - The item to delete; must have `__typename === "VectorGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpUserVectorItemDelete = (user, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = user;
        const newUserVectorItems = vectors.filter(
            item => item.id !== vectorItem.id
        );
        const newUser = { ...others, vectors: newUserVectorItems };
        dispatch(ItemActions.item_update(newUser));
    }
};


/**
 * A component for displaying the `vectors` attribute of an user entity.
 *
 * This component checks if the `vectors` attribute exists on the `user` object. If `vectors` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `vectors` array and
 * displays a placeholder message and a JSON representation for each item in the `vectors`.
 *
 * @component
 * @param {Object} props - The props for the UserVectorsAttribute component.
 * @param {Object} props.user - The object representing the user entity.
 * @param {Array} [props.user.vectors] - An array of vectors items associated with the user entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `vectors` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const userEntity = { 
 *   vectors: [
 *     { id: 1, name: "Vector Item 1" }, 
 *     { id: 2, name: "Vector Item 2" }
 *   ] 
 * };
 *
 * <UserVectorsAttribute user={userEntity} />
 */
export const UserVectorsAttribute = ({user}) => {
    const { vectors } = user
    if (typeof vectors === 'undefined') return null
    return (
        <>
            {vectors.map(
                vector => <div id={vector.id} key={vector.id}>
                    Probably {'<VectorMediumCard vector=\{vector\} />'} <br />
                    <pre>{JSON.stringify(vector, null, 4)}</pre>
                </div>
            )}
        </>
    )
}

const UserVectorsAttributeQuery = `
query UserQueryRead($id: id, $where: VectorInputFilter, $skip: Int, $limit: Int) {
    result: userById(id: $id) {
        __typename
        id
        vectors(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
        }
    }
}
`

const UserVectorsAttributeAsyncAction = createAsyncGraphQLAction(
    UserVectorsAttributeQuery,
    processVectorAttributeFromGraphQLResult("vectors")
)

export const UserVectorsAttributeInfinite = ({user}) => { 
    const {vectors} = user

    return (
        <InfiniteScroll 
            Visualiser={'VectorMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={UserVectorsAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `vectors` from a `user` entity.
 *
 * This component uses the `UserVectorsAttributeAsyncAction` to asynchronously fetch
 * the `user.vectors` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each vector item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.user - The user entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `vectors` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered vectors or a loading/error placeholder.
 *
 * @example
 * <UserVectorsAttributeLazy user={{ id: "abc123" }} />
 *
 * 
 * @example
 * <UserVectorsAttributeLazy
 *   user={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const UserVectorsAttributeLazy = ({user, filter=Boolean}) => {
    const {loading, error, entity} = useAsyncAction(UserVectorsAttributeAsyncAction, user)
    const values = entity?.vectors || []
    
    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    const valuesToDisplay = values.filter(filter)
    return (<>
        {valuesToDisplay.map(value => <div key={value.id} id={value.id}>
            <pre>{JSON.stringify(value, null, 4)}</pre>
        </div>)}
    </>)
}