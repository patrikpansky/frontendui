import { ProgramURI } from "../Components/ProgramLink"
import { ProgramPage } from "./ProgramPage"

/**
 * An array of route segment definitions for the Program pages.
 *
 * Each route object in the array defines a `path` and its associated React `element`.
 * The `path` includes a dynamic `:id` parameter, used to load and display a specific program entity.
 * The `element` property specifies the React component to render when the route matches.
 *
 * Any React `children` elements passed through this route will be injected into the page and 
 * receive `program`, `onChange`, and `onBlur` as props from the `ProgramPageContentLazy` component.
 *
 * @constant
 * @type {Array<{ path: string, element: JSX.Element }>}
 *
 * @example
 * // This route matches URLs like "/program/123":
 * {
 *   path: "/program/:id",
 *   element: <ProgramPage />
 * }
 */

export const ProgramRouterSegments = [
    {
        path: `/${ProgramURI}:id`,
        element: (<ProgramPage />),
    }
]