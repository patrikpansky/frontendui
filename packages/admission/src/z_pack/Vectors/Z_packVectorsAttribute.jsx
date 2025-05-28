import { createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { InfiniteScroll } from "@hrbolek/uoisfrontend-shared"

/**
 * A component for displaying the `vectors` attribute of an z_pack entity.
 *
 * This component checks if the `vectors` attribute exists on the `z_pack` object. If `vectors` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `vectors` array and
 * displays a placeholder message and a JSON representation for each item in the `vectors`.
 *
 * @component
 * @param {Object} props - The props for the Z_packVectorsAttribute component.
 * @param {Object} props.z_pack - The object representing the z_pack entity.
 * @param {Array} [props.z_pack.vectors] - An array of vectors items associated with the z_pack entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `vectors` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const z_packEntity = { 
 *   vectors: [
 *     { id: 1, name: "Vector Item 1" }, 
 *     { id: 2, name: "Vector Item 2" }
 *   ] 
 * };
 *
 * <Z_packVectorsAttribute z_pack={z_packEntity} />
 */
export const Z_packVectorsAttribute = ({z_pack}) => {
    const { vectors } = z_pack
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

const Z_packVectorsAttributeQuery = `
query Z_packQueryRead($id: id, $where: VectorInputFilter, $skip: Int, $limit: Int) {
    result: z_packById(id: $id) {
        __typename
        id
        vectors(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
        }
    }
}
`

const Z_packVectorsAttributeAsyncAction = createAsyncGraphQLAction(
    Z_packVectorsAttributeQuery,
    processVectorAttributeFromGraphQLResult("vectors")
)

export const Z_packVectorsAttributeInfinite = ({z_pack}) => { 
    const {vectors} = z_pack

    return (
        <InfiniteScroll 
            Visualiser={'VectorMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={Z_packVectorsAttributeAsyncAction}
        />
    )
}