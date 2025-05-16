import { ProgramLevelTypeURI } from "../Components/ProgramLevelTypeLink"
import { ProgramLevelTypePage } from "./ProgramLevelTypePage"

/**
 * An array of route segment definitions for the ProgramLevelType pages.
 *
 * Each route object in the array defines a `path` and its associated React `element`.
 * The `path` includes a dynamic `:id` parameter, used to load and display a specific programleveltype entity.
 * The `element` property specifies the React component to render when the route matches.
 *
 * Any React `children` elements passed through this route will be injected into the page and 
 * receive `programleveltype`, `onChange`, and `onBlur` as props from the `ProgramLevelTypePageContentLazy` component.
 *
 * @constant
 * @type {Array<{ path: string, element: JSX.Element }>}
 *
 * @example
 * // This route matches URLs like "/programleveltype/123":
 * {
 *   path: "/programleveltype/:id",
 *   element: <ProgramLevelTypePage />
 * }
 */

export const ProgramLevelTypeRouterSegments = [
    {
        path: `/${ProgramLevelTypeURI}:id`,
        element: (<ProgramLevelTypePage />),
    }
]