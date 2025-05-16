import { SemesterURI } from "../Components/SemesterLink"
import { SemesterPage } from "./SemesterPage"

/**
 * An array of route segment definitions for the Semester pages.
 *
 * Each route object in the array defines a `path` and its associated React `element`.
 * The `path` includes a dynamic `:id` parameter, used to load and display a specific semester entity.
 * The `element` property specifies the React component to render when the route matches.
 *
 * Any React `children` elements passed through this route will be injected into the page and 
 * receive `semester`, `onChange`, and `onBlur` as props from the `SemesterPageContentLazy` component.
 *
 * @constant
 * @type {Array<{ path: string, element: JSX.Element }>}
 *
 * @example
 * // This route matches URLs like "/semester/123":
 * {
 *   path: "/semester/:id",
 *   element: <SemesterPage />
 * }
 */

export const SemesterRouterSegments = [
    {
        path: `/${SemesterURI}:id`,
        element: (<SemesterPage />),
    }
]