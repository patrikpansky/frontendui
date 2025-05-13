import { StudentURI } from "../Components/StudentLink"
import { StudentPage } from "./StudentPage"

/**
 * An array of route segment definitions for the Student pages.
 *
 * Each route object in the array defines a `path` and its associated React `element`.
 * The `path` includes a dynamic `:id` parameter, used to load and display a specific student entity.
 * The `element` property specifies the React component to render when the route matches.
 *
 * Any React `children` elements passed through this route will be injected into the page and 
 * receive `student`, `onChange`, and `onBlur` as props from the `StudentPageContentLazy` component.
 *
 * @constant
 * @type {Array<{ path: string, element: JSX.Element }>}
 *
 * @example
 * // This route matches URLs like "/student/123":
 * {
 *   path: "/student/:id",
 *   element: <StudentPage />
 * }
 */

export const StudentRouterSegments = [
    {
        path: `/${StudentURI}:id`,
        element: (<StudentPage />),
    }
]