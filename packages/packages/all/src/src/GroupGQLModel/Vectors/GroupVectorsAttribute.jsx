import { createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { InfiniteScroll } from "@hrbolek/uoisfrontend-shared"


/**
 * Inserts a VectorGQLModel item into a group’s vectors array and dispatches an update.
 *
 * @param {Object} group - The current group object containing a `vectors` array.
 * @param {Object} vectorItem - The item to insert; must have `__typename === "VectorGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpGroupVectorItemInsert = (group, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = group;
        const newGroupVectorItems = [...vectors, vectorItem];
        const newGroup = { ...others, vectors: newGroupVectorItems };
        dispatch(ItemActions.item_update(newGroup));
    }
};

/**
 * Replaces an existing VectorGQLModel item in a group’s vectors array and dispatches an update.
 *
 * @param {Object} group - The current group object containing a `vectors` array.
 * @param {Object} vectorItem - The updated item; must have `__typename === "VectorGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpGroupVectorItemUpdate = (group, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = group;
        const newGroupVectorItems = vectors.map(item =>
            item.id === vectorItem.id ? vectorItem : item
        );
        const newGroup = { ...others, vectors: newGroupVectorItems };
        dispatch(ItemActions.item_update(newGroup));
    }
};

/**
 * Removes a VectorGQLModel item from a group’s vectors array by its `id` and dispatches an update.
 *
 * @param {Object} group - The current group object containing a `vectors` array.
 * @param {Object} vectorItem - The item to delete; must have `__typename === "VectorGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpGroupVectorItemDelete = (group, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = group;
        const newGroupVectorItems = vectors.filter(
            item => item.id !== vectorItem.id
        );
        const newGroup = { ...others, vectors: newGroupVectorItems };
        dispatch(ItemActions.item_update(newGroup));
    }
};


/**
 * A component for displaying the `vectors` attribute of an group entity.
 *
 * This component checks if the `vectors` attribute exists on the `group` object. If `vectors` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `vectors` array and
 * displays a placeholder message and a JSON representation for each item in the `vectors`.
 *
 * @component
 * @param {Object} props - The props for the GroupVectorsAttribute component.
 * @param {Object} props.group - The object representing the group entity.
 * @param {Array} [props.group.vectors] - An array of vectors items associated with the group entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `vectors` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const groupEntity = { 
 *   vectors: [
 *     { id: 1, name: "Vector Item 1" }, 
 *     { id: 2, name: "Vector Item 2" }
 *   ] 
 * };
 *
 * <GroupVectorsAttribute group={groupEntity} />
 */
export const GroupVectorsAttribute = ({group}) => {
    const { vectors } = group
    if (typeof vectors === 'undefined') return null
    return (
        <>
            {vectors.map(
                vector => <div id={vector.id} key={vector.id}>
                    Probably {'<VectorMediumCard vector=\{vector\} />'} <br />
                    {JSON.stringify(vector)}
                </div>
            )}
        </>
    )
}

const GroupVectorsAttributeQuery = `
query GroupQueryRead($id: id, $where: VectorInputFilter, $skip: Int, $limit: Int) {
    result: groupById(id: $id) {
        __typename
        id
        vectors(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
        }
    }
}
`

const GroupVectorsAttributeAsyncAction = createAsyncGraphQLAction(
    GroupVectorsAttributeQuery,
    processVectorAttributeFromGraphQLResult("vectors")
)

export const GroupVectorsAttributeInfinite = ({group}) => { 
    const {vectors} = group

    return (
        <InfiniteScroll 
            Visualiser={'VectorMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={GroupVectorsAttributeAsyncAction}
        />
    )
}