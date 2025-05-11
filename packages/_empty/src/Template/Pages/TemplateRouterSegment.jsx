import { TemplateURI } from "../Components/TemplateLink"
import { TemplatePage } from "./TemplatePage"

/**
 * An array of route segment definitions for the Template pages.
 *
 * Each route object in the array defines a `path` and its associated React `element`.
 * The `path` includes a dynamic `:id` parameter, used to load and display a specific template entity.
 * The `element` property specifies the React component to render when the route matches.
 *
 * Any React `children` elements passed through this route will be injected into the page and 
 * receive `template`, `onChange`, and `onBlur` as props from the `TemplatePageContentLazy` component.
 *
 * @constant
 * @type {Array<{ path: string, element: JSX.Element }>}
 *
 * @example
 * // This route matches URLs like "/template/123":
 * {
 *   path: "/template/:id",
 *   element: <TemplatePage />
 * }
 */

export const TemplateRouterSegments = [
    {
        path: `/${TemplateURI}:id`,
        element: (<TemplatePage />),
    }
]