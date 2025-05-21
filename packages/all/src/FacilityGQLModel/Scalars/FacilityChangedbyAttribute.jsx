import { createAsyncGraphQLAction, useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"

/**
 * A component for displaying the `changedby` attribute of an facility entity.
 *
 * This component checks if the `changedby` attribute exists on the `facility` object. If `changedby` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it displays a placeholder message
 * and a JSON representation of the `changedby` attribute.
 *
 * @component
 * @param {Object} props - The props for the FacilityChangedbyAttribute component.
 * @param {Object} props.facility - The object representing the facility entity.
 * @param {*} [props.facility.changedby] - The changedby attribute of the facility entity to be displayed, if defined.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `changedby` attribute or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const facilityEntity = { changedby: { id: 1, name: "Sample Changedby" } };
 *
 * <FacilityChangedbyAttribute facility={facilityEntity} />
 */
export const FacilityChangedbyAttribute = ({facility}) => {
    const {changedby} = facility
    if (typeof changedby === 'undefined') return null
    return (
        <>
            {/* <ChangedbyMediumCard changedby={changedby} /> */}
            {/* <ChangedbyLink changedby={changedby} /> */}
            Probably {'<ChangedbyMediumCard changedby={changedby} />'} <br />
            <pre>{JSON.stringify(changedby, null, 4)}</pre>
        </>
    )
}

const FacilityChangedbyAttributeQuery = `
query FacilityQueryRead($id: UUID!) {
    result: facilityById(id: $id) {
        __typename
        id
        changedby {
            __typename
            id
        }
    }
}
`

const FacilityChangedbyAttributeAsyncAction = createAsyncGraphQLAction(
    FacilityChangedbyAttributeQuery
)

/**
 * A lazy-loading component for displaying filtered `changedby` from a `facility` entity.
 *
 * This component uses the `FacilityChangedbyAttributeAsyncAction` to asynchronously fetch
 * the `facility.changedby` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each vector item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.facility - The facility entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `changedby` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered changedby or a loading/error placeholder.
 *
 * @example
 * <FacilityChangedbyAttributeLazy facility={{ id: "abc123" }} />
 *
 * 
 * @example
 * <FacilityChangedbyAttributeLazy
 *   facility={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const FacilityChangedbyAttributeLazy = ({facility}) => {
    const {loading, error, entity, fetch} = useAsyncAction(FacilityChangedbyAttributeAsyncAction, facility)

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    return <FacilityChangedbyAttribute facility={entity} />    
}