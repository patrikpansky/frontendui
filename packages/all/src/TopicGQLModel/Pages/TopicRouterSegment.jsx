import { TopicURI } from "../Components/TopicLink"
import { TopicPage } from "./TopicPage"

/**
 * An array of route segment definitions for the Topic pages.
 *
 * Each route object in the array defines a `path` and its associated React `element`.
 * The `path` includes a dynamic `:id` parameter, used to load and display a specific topic entity.
 * The `element` property specifies the React component to render when the route matches.
 *
 * Any React `children` elements passed through this route will be injected into the page and 
 * receive `topic`, `onChange`, and `onBlur` as props from the `TopicPageContentLazy` component.
 *
 * @constant
 * @type {Array<{ path: string, element: JSX.Element }>}
 *
 * @example
 * // This route matches URLs like "/topic/123":
 * {
 *   path: "/topic/:id",
 *   element: <TopicPage />
 * }
 */

export const TopicRouterSegments = [
    {
        path: `/${TopicURI}:id`,
        element: (<TopicPage />),
    }
]