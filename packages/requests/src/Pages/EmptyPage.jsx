import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared"
import { createLazyComponent } from "@hrbolek/uoisfrontend-shared"
import { useParams } from "react-router"
import { requestLargeCard } from "../Components/request/requestLargeCard"

const requestQueryRead = `
query requestQueryRead($id: id) {
    result: requestById(id: $id) {
        __typename
        id
    }
}
`

/**
 * An async action for executing a GraphQL query to read request entities.
 *
 * This action is created using `createAsyncGraphQLAction` with a predefined `requestQueryRead` query.
 * It can be dispatched with query variables to fetch data related to request entities from the GraphQL API.
 *
 * @constant
 * @type {Function}
 *
 * @param {Object} query_variables - The variables for the GraphQL query.
 * @param {string|number} query_variables.id - The unique identifier for the request entity to fetch.
 *
 * @returns {Function} A dispatchable async action that performs the GraphQL query, applies middleware, and dispatches the result.
 *
 * @throws {Error} If `query_variables` is not a valid JSON object.
 *
 * @example
 * // Example usage:
 * const queryVariables = { id: "12345" };
 *
 * dispatch(requestReadAsyncAction(queryVariables))
 *   .then((result) => {
 *     console.log("Fetched data:", result);
 *   })
 *   .catch((error) => {
 *     console.error("Error fetching data:", error);
 *   });
 */
const requestReadAsyncAction = createAsyncGraphQLAction(requestQueryRead)

/**
 * A page content component for displaying detailed information about an request entity.
 *
 * This component utilizes `requestLargeCard` to create a structured layout and displays 
 * the serialized representation of the `request` object within the card's content.
 *
 * @component
 * @param {Object} props - The properties for the requestPageContent component.
 * @param {Object} props.request - The object representing the request entity.
 * @param {string|number} props.request.id - The unique identifier for the request entity.
 * @param {string} props.request.name - The name or label of the request entity.
 *
 * @returns {JSX.Element} A JSX element rendering the page content for an request entity.
 *
 * @example
 * // Example usage:
 * const requestEntity = { id: 123, name: "Sample Entity" };
 * 
 * <requestPageContent request={requestEntity} />
 */
const requestPageContent = ({request}) => {
    return (
        <requestLargeCard request={request}>
            request {JSON.stringify(request)}
        </requestLargeCard>
    )
}

/**
 * A lazy-loading component for displaying content of an request entity.
 *
 * This component is created using `createLazyComponent` and wraps `requestPageContent` to provide
 * automatic data fetching for the `request` entity. It uses the `requestReadAsyncAction` to fetch
 * the entity data and dynamically injects it into the wrapped component as the `request` prop.
 *
 * @constant
 * @type {React.Component}
 *
 * @param {Object} props - The props for the lazy-loading component.
 * @param {string|number} props.request - The identifier of the request entity to fetch and display.
 *
 * @returns {JSX.Element} A component that fetches the `request` entity data and displays it
 * using `requestPageContent`, or shows loading and error states as appropriate.
 *
 * @example
 * // Example usage:
 * const requestId = "12345";
 *
 * <requestPageContentLazy request={requestId} />
 */
const requestPageContentLazy = createLazyComponent(requestPageContent, "request", requestReadAsyncAction)

/**
 * A page component for displaying lazy-loaded content of an request entity.
 *
 * This component extracts the `id` parameter from the route using `useParams`,
 * constructs an `request` object, and passes it to the `requestPageContentLazy` component.
 * The `requestPageContentLazy` component handles the lazy-loading and rendering of the entity's content.
 *
 * @component
 * @returns {JSX.Element} The rendered page component displaying the lazy-loaded content for the request entity.
 *
 * @example
 * // Example route setup:
 * <Route path="/request/:id" element={<requestPage />} />
 *
 * // Navigating to "/request/12345" will render the page for the request entity with ID 12345.
 */
export const requestPage = () => {
    const {id} = useParams()
    const request = {id}
    return <requestPageContentLazy request={request} />
}