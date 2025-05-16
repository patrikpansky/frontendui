import { ProgramLanguageTypeURI } from "../Components/ProgramLanguageTypeLink"
import { ProgramLanguageTypePage } from "./ProgramLanguageTypePage"

/**
 * An array of route segment definitions for the ProgramLanguageType pages.
 *
 * Each route object in the array defines a `path` and its associated React `element`.
 * The `path` includes a dynamic `:id` parameter, used to load and display a specific programlanguagetype entity.
 * The `element` property specifies the React component to render when the route matches.
 *
 * Any React `children` elements passed through this route will be injected into the page and 
 * receive `programlanguagetype`, `onChange`, and `onBlur` as props from the `ProgramLanguageTypePageContentLazy` component.
 *
 * @constant
 * @type {Array<{ path: string, element: JSX.Element }>}
 *
 * @example
 * // This route matches URLs like "/programlanguagetype/123":
 * {
 *   path: "/programlanguagetype/:id",
 *   element: <ProgramLanguageTypePage />
 * }
 */

export const ProgramLanguageTypeRouterSegments = [
    {
        path: `/${ProgramLanguageTypeURI}:id`,
        element: (<ProgramLanguageTypePage />),
    }
]