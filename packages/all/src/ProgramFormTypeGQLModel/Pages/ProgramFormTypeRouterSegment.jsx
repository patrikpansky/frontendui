import { ProgramFormTypeURI } from "../Components/ProgramFormTypeLink"
import { ProgramFormTypePage } from "./ProgramFormTypePage"

/**
 * An array of route segment definitions for the ProgramFormType pages.
 *
 * Each route object in the array defines a `path` and its associated React `element`.
 * The `path` includes a dynamic `:id` parameter, used to load and display a specific programformtype entity.
 * The `element` property specifies the React component to render when the route matches.
 *
 * Any React `children` elements passed through this route will be injected into the page and 
 * receive `programformtype`, `onChange`, and `onBlur` as props from the `ProgramFormTypePageContentLazy` component.
 *
 * @constant
 * @type {Array<{ path: string, element: JSX.Element }>}
 *
 * @example
 * // This route matches URLs like "/programformtype/123":
 * {
 *   path: "/programformtype/:id",
 *   element: <ProgramFormTypePage />
 * }
 */

export const ProgramFormTypeRouterSegments = [
    {
        path: `/${ProgramFormTypeURI}:id`,
        element: (<ProgramFormTypePage />),
    }
]