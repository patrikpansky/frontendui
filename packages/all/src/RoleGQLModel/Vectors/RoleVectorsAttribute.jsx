import { useAsyncAction, createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, InfiniteScroll, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { use, useEffect } from "react";


/**
 * Inserts a VectorGQLModel item into a role’s vectors array and dispatches an update.
 *
 * @param {Object} role - The current role object containing a `vectors` array.
 * @param {Object} vectorItem - The item to insert; must have `__typename === "VectorGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpRoleVectorItemInsert = (role, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = role;
        const newRoleVectorItems = [...vectors, vectorItem];
        const newRole = { ...others, vectors: newRoleVectorItems };
        dispatch(ItemActions.item_update(newRole));
    }
};

/**
 * Replaces an existing VectorGQLModel item in a role’s vectors array and dispatches an update.
 *
 * @param {Object} role - The current role object containing a `vectors` array.
 * @param {Object} vectorItem - The updated item; must have `__typename === "VectorGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpRoleVectorItemUpdate = (role, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = role;
        const newRoleVectorItems = vectors.map(item =>
            item.id === vectorItem.id ? vectorItem : item
        );
        const newRole = { ...others, vectors: newRoleVectorItems };
        dispatch(ItemActions.item_update(newRole));
    }
};

/**
 * Removes a VectorGQLModel item from a role’s vectors array by its `id` and dispatches an update.
 *
 * @param {Object} role - The current role object containing a `vectors` array.
 * @param {Object} vectorItem - The item to delete; must have `__typename === "VectorGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpRoleVectorItemDelete = (role, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = role;
        const newRoleVectorItems = vectors.filter(
            item => item.id !== vectorItem.id
        );
        const newRole = { ...others, vectors: newRoleVectorItems };
        dispatch(ItemActions.item_update(newRole));
    }
};

const RoleVectorsAttributeQuery = `
query RoleQueryRead($id: UUID!, $where: VectorInputFilter, $skip: Int, $limit: Int) {
    result: roleById(id: $id) {
        __typename
        id
        vectors(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
        }
    }
}
`

const RoleVectorsAttributeAsyncAction = createAsyncGraphQLAction(
    RoleVectorsAttributeQuery,
    processVectorAttributeFromGraphQLResult("vectors")
)

/**
 * A component for displaying the `vectors` attribute of an role entity.
 *
 * This component checks if the `vectors` attribute exists on the `role` object. If `vectors` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `vectors` array and
 * displays a placeholder message and a JSON representation for each item in the `vectors`.
 *
 * @component
 * @param {Object} props - The props for the RoleVectorsAttribute component.
 * @param {Object} props.role - The object representing the role entity.
 * @param {Array} [props.role.vectors] - An array of vectors items associated with the role entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `vectors` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const roleEntity = { 
 *   vectors: [
 *     { id: 1, name: "Vector Item 1" }, 
 *     { id: 2, name: "Vector Item 2" }
 *   ] 
 * };
 *
 * <RoleVectorsAttribute role={roleEntity} />
 */
export const RoleVectorsAttribute = ({role, filter=Boolean}) => {
    const { vectors: unfiltered } = role
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


export const RoleVectorsAttributeInfinite = ({role}) => { 
    const {vectors} = role

    return (
        <InfiniteScroll 
            Visualiser={'VectorMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={RoleVectorsAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `vectors` from a `role` entity.
 *
 * This component uses the `RoleVectorsAttributeAsyncAction` to asynchronously fetch
 * the `role.vectors` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each vector item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.role - The role entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `vectors` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered vectors or a loading/error placeholder.
 *
 * @example
 * <RoleVectorsAttributeLazy role={{ id: "abc123" }} />
 *
 * 
 * @example
 * <RoleVectorsAttributeLazy
 *   role={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const RoleVectorsAttributeLazy = ({role, filter=Boolean}) => {
    const {loading, error, entity, fetch} = useAsyncAction(RoleVectorsAttributeAsyncAction, role, {deferred: true})
    useEffect(() => {
        fetch(role)
    }, [role])

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    return <RoleVectorsAttribute role={entity} filter={filter} />    
}