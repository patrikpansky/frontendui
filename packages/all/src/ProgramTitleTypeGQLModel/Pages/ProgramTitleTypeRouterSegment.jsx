import { ProgramTitleTypeURI } from "../Components/ProgramTitleTypeLink"
import { ProgramTitleTypePage } from "./ProgramTitleTypePage"

/**
 * An array of route segment definitions for the ProgramTitleType pages.
 *
 * Each route object in the array defines a `path` and its associated React `element`.
 * The `path` includes a dynamic `:id` parameter, used to load and display a specific programtitletype entity.
 * The `element` property specifies the React component to render when the route matches.
 *
 * Any React `children` elements passed through this route will be injected into the page and 
 * receive `programtitletype`, `onChange`, and `onBlur` as props from the `ProgramTitleTypePageContentLazy` component.
 *
 * @constant
 * @type {Array<{ path: string, element: JSX.Element }>}
 *
 * @example
 * // This route matches URLs like "/programtitletype/123":
 * {
 *   path: "/programtitletype/:id",
 *   element: <ProgramTitleTypePage />
 * }
 */

export const ProgramTitleTypeRouterSegments = [
    {
        path: `/${ProgramTitleTypeURI}:id`,
        element: (<ProgramTitleTypePage />),
    }
]