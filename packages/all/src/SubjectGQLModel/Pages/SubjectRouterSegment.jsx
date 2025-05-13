import { SubjectURI } from "../Components/SubjectLink"
import { SubjectPage } from "./SubjectPage"

/**
 * An array of route segment definitions for the Subject pages.
 *
 * Each route object in the array defines a `path` and its associated React `element`.
 * The `path` includes a dynamic `:id` parameter, used to load and display a specific subject entity.
 * The `element` property specifies the React component to render when the route matches.
 *
 * Any React `children` elements passed through this route will be injected into the page and 
 * receive `subject`, `onChange`, and `onBlur` as props from the `SubjectPageContentLazy` component.
 *
 * @constant
 * @type {Array<{ path: string, element: JSX.Element }>}
 *
 * @example
 * // This route matches URLs like "/subject/123":
 * {
 *   path: "/subject/:id",
 *   element: <SubjectPage />
 * }
 */

export const SubjectRouterSegments = [
    {
        path: `/${SubjectURI}:id`,
        element: (<SubjectPage />),
    }
]