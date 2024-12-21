import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared"
import { createLazyComponent } from "@hrbolek/uoisfrontend-shared"
import { useParams } from "react-router"
import { EmptyLargeCard } from "../Components/Empty/EmptyLargeCard"

const EmptyQueryRead = `
query EmptyQueryRead($id: UUID!) {
    result: emptyById(id: $id) {
        __typename
        id
    }
}
`

/**
 * An async action for executing a GraphQL query to read empty entities.
 *
 * This action is created using `createAsyncGraphQLAction` with a predefined `EmptyQueryRead` query.
 * It can be dispatched with query variables to fetch data related to empty entities from the GraphQL API.
 *
 * @constant
 * @type {Function}
 *
 * @param {Object} query_variables - The variables for the GraphQL query.
 * @param {string|number} query_variables.id - The unique identifier for the empty entity to fetch.
 *
 * @returns {Function} A dispatchable async action that performs the GraphQL query, applies middleware, and dispatches the result.
 *
 * @throws {Error} If `query_variables` is not a valid JSON object.
 *
 * @example
 * // Example usage:
 * const queryVariables = { id: "12345" };
 *
 * dispatch(EmptyReadAsyncAction(queryVariables))
 *   .then((result) => {
 *     console.log("Fetched data:", result);
 *   })
 *   .catch((error) => {
 *     console.error("Error fetching data:", error);
 *   });
 */
const EmptyReadAsyncAction = createAsyncGraphQLAction(EmptyQueryRead)

/**
 * A page content component for displaying detailed information about an empty entity.
 *
 * This component utilizes `EmptyLargeCard` to create a structured layout and displays 
 * the serialized representation of the `empty` object within the card's content.
 *
 * @component
 * @param {Object} props - The properties for the EmptyPageContent component.
 * @param {Object} props.empty - The object representing the empty entity.
 * @param {string|number} props.empty.id - The unique identifier for the empty entity.
 * @param {string} props.empty.name - The name or label of the empty entity.
 *
 * @returns {JSX.Element} A JSX element rendering the page content for an empty entity.
 *
 * @example
 * // Example usage:
 * const emptyEntity = { id: 123, name: "Sample Entity" };
 * 
 * <EmptyPageContent empty={emptyEntity} />
 */
const EmptyPageContent = ({empty}) => {
    return (
        <EmptyLargeCard empty={empty}>
            Empty {JSON.stringify(empty)}
        </EmptyLargeCard>
    )
}

/**
 * A lazy-loading component for displaying content of an empty entity.
 *
 * This component is created using `createLazyComponent` and wraps `EmptyPageContent` to provide
 * automatic data fetching for the `empty` entity. It uses the `EmptyReadAsyncAction` to fetch
 * the entity data and dynamically injects it into the wrapped component as the `empty` prop.
 *
 * @constant
 * @type {React.Component}
 *
 * @param {Object} props - The props for the lazy-loading component.
 * @param {string|number} props.empty - The identifier of the empty entity to fetch and display.
 *
 * @returns {JSX.Element} A component that fetches the `empty` entity data and displays it
 * using `EmptyPageContent`, or shows loading and error states as appropriate.
 *
 * @example
 * // Example usage:
 * const emptyId = "12345";
 *
 * <EmptyPageContentLazy empty={emptyId} />
 */
const EmptyPageContentLazy = createLazyComponent(EmptyPageContent, "empty", EmptyReadAsyncAction)

/**
 * A page component for displaying lazy-loaded content of an empty entity.
 *
 * This component extracts the `id` parameter from the route using `useParams`,
 * constructs an `empty` object, and passes it to the `EmptyPageContentLazy` component.
 * The `EmptyPageContentLazy` component handles the lazy-loading and rendering of the entity's content.
 *
 * @component
 * @returns {JSX.Element} The rendered page component displaying the lazy-loaded content for the empty entity.
 *
 * @example
 * // Example route setup:
 * <Route path="/empty/:id" element={<EmptyPage />} />
 *
 * // Navigating to "/empty/12345" will render the page for the empty entity with ID 12345.
 */
export const EmptyPage = () => {
    const {id} = useParams()
    const empty = {id}
    return <EmptyPageContentLazy empty={empty} />
}