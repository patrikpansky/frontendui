import { ProgramTypeURI } from "../Components/ProgramTypeLink"
import { ProgramTypePage } from "./ProgramTypePage"

/**
 * An array of route segment definitions for the ProgramType pages.
 *
 * Each route object in the array defines a `path` and its associated React `element`.
 * The `path` includes a dynamic `:id` parameter, used to load and display a specific programtype entity.
 * The `element` property specifies the React component to render when the route matches.
 *
 * Any React `children` elements passed through this route will be injected into the page and 
 * receive `programtype`, `onChange`, and `onBlur` as props from the `ProgramTypePageContentLazy` component.
 *
 * @constant
 * @type {Array<{ path: string, element: JSX.Element }>}
 *
 * @example
 * // This route matches URLs like "/programtype/123":
 * {
 *   path: "/programtype/:id",
 *   element: <ProgramTypePage />
 * }
 */

export const ProgramTypeRouterSegments = [
    {
        path: `/${ProgramTypeURI}:id`,
        element: (<ProgramTypePage />),
    }
]