import { createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { InfiniteScroll } from "@hrbolek/uoisfrontend-shared"
import { UserLink } from "@hrbolek/uoisfrontend-ug"

/**
 * A component for displaying the `history` attribute of an request entity.
 *
 * This component checks if the `history` attribute exists on the `request` object. If `history` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `history` array and
 * displays a placeholder message and a JSON representation for each item in the `history`.
 *
 * @component
 * @param {Object} props - The props for the RequestHistoryAttribute component.
 * @param {Object} props.request - The object representing the request entity.
 * @param {Array} [props.request.histories] - An array of history items associated with the request entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `history` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const requestEntity = { 
 *   history: [
 *     { id: 1, name: "History Item 1" }, 
 *     { id: 2, name: "History Item 2" }
 *   ] 
 * };
 *
 * <RequestHistoryAttribute request={requestEntity} />
 */
export const RequestHistoryAttribute = ({request}) => {
    const {histories} = request
    if (typeof histories === 'undefined') return null
    return (
        <>
            {histories.map(
                item => <div key={item.id}>
                    {item?.form?.name}, <UserLink user={item?.createdby} /> <br />
                    {JSON.stringify(item?.createdby)}<br />
                    {JSON.stringify(item?.state)}<br />
                </div>
            )}
        </>
    )
}

const HistoryAttributeQuery = `
query RequestQueryRead($id: id, $where: HistoryInputFilter, $skip: Int, $limit: Int) {
    result: requestById(id: $id) {
        __typename
        id
        histories(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
        }
    }
}
`

const HistoryAttributeAsyncAction = createAsyncGraphQLAction(
    HistoryAttributeQuery,
    processVectorAttributeFromGraphQLResult("history")
)

export const RequestHistoryAttributeInifite = ({request}) => { 
    const {history} = request

    return (
        <InfiniteScroll 
            Visualiser={'HistoryMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={HistoryAttributeAsyncAction}
        />
    )
}