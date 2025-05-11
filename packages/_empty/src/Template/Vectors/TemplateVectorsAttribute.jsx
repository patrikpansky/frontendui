import { createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { InfiniteScroll } from "@hrbolek/uoisfrontend-shared"


/**
 * Inserts a VectorGQLModel item into a template’s vectors array and dispatches an update.
 *
 * @param {Object} template - The current template object containing a `vectors` array.
 * @param {Object} vectorItem - The item to insert; must have `__typename === "VectorGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpTemplateVectorItemInsert = (template, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = template;
        const newTemplateVectorItems = [...vectors, vectorItem];
        const newTemplate = { ...others, vectors: newTemplateVectorItems };
        dispatch(ItemActions.item_update(newTemplate));
    }
};

/**
 * Replaces an existing VectorGQLModel item in a template’s vectors array and dispatches an update.
 *
 * @param {Object} template - The current template object containing a `vectors` array.
 * @param {Object} vectorItem - The updated item; must have `__typename === "VectorGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpTemplateVectorItemUpdate = (template, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = template;
        const newTemplateVectorItems = vectors.map(item =>
            item.id === vectorItem.id ? vectorItem : item
        );
        const newTemplate = { ...others, vectors: newTemplateVectorItems };
        dispatch(ItemActions.item_update(newTemplate));
    }
};

/**
 * Removes a VectorGQLModel item from a template’s vectors array by its `id` and dispatches an update.
 *
 * @param {Object} template - The current template object containing a `vectors` array.
 * @param {Object} vectorItem - The item to delete; must have `__typename === "VectorGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpTemplateVectorItemDelete = (template, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = template;
        const newTemplateVectorItems = vectors.filter(
            item => item.id !== vectorItem.id
        );
        const newTemplate = { ...others, vectors: newTemplateVectorItems };
        dispatch(ItemActions.item_update(newTemplate));
    }
};


/**
 * A component for displaying the `vectors` attribute of an template entity.
 *
 * This component checks if the `vectors` attribute exists on the `template` object. If `vectors` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `vectors` array and
 * displays a placeholder message and a JSON representation for each item in the `vectors`.
 *
 * @component
 * @param {Object} props - The props for the TemplateVectorsAttribute component.
 * @param {Object} props.template - The object representing the template entity.
 * @param {Array} [props.template.vectors] - An array of vectors items associated with the template entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `vectors` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const templateEntity = { 
 *   vectors: [
 *     { id: 1, name: "Vector Item 1" }, 
 *     { id: 2, name: "Vector Item 2" }
 *   ] 
 * };
 *
 * <TemplateVectorsAttribute template={templateEntity} />
 */
export const TemplateVectorsAttribute = ({template}) => {
    const { vectors } = template
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

const TemplateVectorsAttributeQuery = `
query TemplateQueryRead($id: id, $where: VectorInputFilter, $skip: Int, $limit: Int) {
    result: templateById(id: $id) {
        __typename
        id
        vectors(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
        }
    }
}
`

const TemplateVectorsAttributeAsyncAction = createAsyncGraphQLAction(
    TemplateVectorsAttributeQuery,
    processVectorAttributeFromGraphQLResult("vectors")
)

export const TemplateVectorsAttributeInfinite = ({template}) => { 
    const {vectors} = template

    return (
        <InfiniteScroll 
            Visualiser={'VectorMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={TemplateVectorsAttributeAsyncAction}
        />
    )
}