import { createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { InfiniteScroll } from "@hrbolek/uoisfrontend-shared"

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
                    {JSON.stringify(vector)}
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