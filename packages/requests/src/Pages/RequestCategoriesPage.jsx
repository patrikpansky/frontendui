import { createLazyComponent } from "@hrbolek/uoisfrontend-shared"
import { useParams } from "react-router"
import { RequestCategoryReadAsyncAction } from "./Queries/RequestCategoryReadAsyncAction"
import { RequestCategoryPageReadAsyncAction } from "./Queries/RequestCategoryPageReadAsyncAction"
import { RequestPageNavbar } from "./RequestPageNavbar"

/**
 * A page content component for displaying detailed information about an requestcategory entity.
 *
 * This component utilizes `RequestCategoryLargeCard` to create a structured layout and displays 
 * the serialized representation of the `requestcategory` object within the card's content.
 *
 * @component
 * @param {Object} props - The properties for the RequestCategoryPageContent component.
 * @param {Object} props.requestcategory - The object representing the requestcategory entity.
 * @param {string|number} props.requestcategory.id - The unique identifier for the requestcategory entity.
 * @param {string} props.requestcategory.name - The name or label of the requestcategory entity.
 *
 * @returns {JSX.Element} A JSX element rendering the page content for an requestcategory entity.
 *
 * @example
 * // Example usage:
 * const requestcategoryEntity = { id: 123, name: "Sample Entity" };
 * 
 * <RequestCategoryPageContent requestcategory={requestcategoryEntity} />
 */
const RequestCategoryPageContent = ({requestcategory}) => {
    return (
        <>
            RequestCategory {JSON.stringify(requestcategory)}
        </>
    )
}


/**
 * A page content component for displaying detailed information about an requestcategory entity.
 *
 * This component utilizes `RequestCategoryLargeCard` to create a structured layout and displays 
 * the serialized representation of the `requestcategory` object within the card's content.
 *
 * @component
 * @param {Object} props - The properties for the RequestCategoryPageContent component.
 * @param {Array} props.requestcategories - The object representing the requestcategory entity.
 *
 * @returns {JSX.Element} A JSX element rendering the page content for an requestcategory entity.
 *
 * @example
 * // Example usage:
 * const requestcategoryEntity = { id: 123, name: "Sample Entity" };
 * 
 * <RequestCategoryPageContent requestcategory={requestcategoryEntity} />
 */
const RequestCategoriesPageContent = ({requestcategories}) => {
    return (
        <>
            <RequestPageNavbar />
            RequestCategory {JSON.stringify(requestcategories)}
        </>
    )
}

/**
 * A lazy-loading component for displaying the content of a `requestcategory` entity.
 *
 * This component is created using `createLazyComponent` and wraps `RequestCategoryPageContent` to provide
 * automatic data fetching for the `requestcategory` entity. It uses the `RequestCategoryReadAsyncAction` to fetch
 * the entity data and dynamically injects it into the wrapped component as the `requestcategory` prop.
 *
 * @constant
 * @type {React.ComponentType}
 *
 * @param {Object} props - The props for the lazy-loading component.
 * @param {Object} props.requestcategory - An object representing the `requestcategory` entity.
 * @param {string|number} props.requestcategory.id - The unique identifier of the `requestcategory` entity to fetch and display.
 *
 * @returns {JSX.Element} A lazy-loading component that fetches the `requestcategory` entity data and displays it
 * using `RequestCategoryPageContent`. The component manages loading and error states as appropriate.
 *
 * @example
 * // Example usage:
 * const requestcategoryId = "12345";
 *
 * <RequestCategoryPageContentLazy requestcategory={{ id: requestcategoryId }} />
 */
const RequestCategoryPageContentLazy = createLazyComponent(RequestCategoryPageContent, "requestcategory", RequestCategoryReadAsyncAction)

/**
 * A lazy-loading component for displaying the content of multiple `requestcategories` entities.
 *
 * This component is created using `createLazyComponent` and wraps `RequestCategoriesPageContent` to provide
 * automatic data fetching for the `requestcategories` entities. It uses the `RequestCategoryPageReadAsyncAction` to fetch
 * paginated data and dynamically injects it into the wrapped component as the `requestcategories` prop.
 *
 * @constant
 * @type {React.ComponentType}
 *
 * @param {Object} props - The props for the lazy-loading component.
 * @param {Object} props.requestcategories - An object containing pagination and filtering options.
 * @param {number} [props.requestcategories.skip] - The number of records to skip (used for pagination).
 * @param {number} [props.requestcategories.limit] - The maximum number of records to fetch (used for pagination).
 * @param {Object} [props.requestcategories.where] - Filtering options to apply to the query, matching the `RequestCategoryInputFilter` type in the GraphQL schema.
 *
 * @returns {JSX.Element} A lazy-loading component that fetches the `requestcategories` entities data and displays it
 * using `RequestCategoriesPageContent`. The component manages loading and error states as appropriate.
 *
 * @example
 * // Example usage:
 * const queryOptions = {
 *   skip: 0,
 *   limit: 10,
 *   where: { name: "Example Category" },
 * };
 *
 * <RequestCategoriesPageContentLazy requestcategories={queryOptions} />
 */
const RequestCategoriesPageContentLazy = createLazyComponent(RequestCategoriesPageContent, "requestcategories", RequestCategoryPageReadAsyncAction)

/**
 * A page component for displaying lazy-loaded content of an requestcategory entity.
 *
 * This component extracts the `id` parameter from the route using `useParams`,
 * constructs an `requestcategory` object, and passes it to the `RequestCategoryPageContentLazy` component.
 * The `RequestCategoryPageContentLazy` component handles the lazy-loading and rendering of the entity's content.
 *
 * @component
 * @returns {JSX.Element} The rendered page component displaying the lazy-loaded content for the requestcategory entity.
 *
 * @example
 * // Example route setup:
 * <Route path="/requestcategory/:id" element={<RequestCategoryPage />} />
 *
 * // Navigating to "/requestcategory/12345" will render the page for the requestcategory entity with ID 12345.
 */
export const RequestCategoryPage = () => {
    const {id, where} = useParams()
    const requestcategory = {id}

    if (id) return <RequestCategoryPageContentLazy requestcategory={requestcategory} />
    return <RequestCategoriesPageContentLazy requestcategories={{where: where, skip: 0, limit: 0}} />
}