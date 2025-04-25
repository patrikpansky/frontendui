import { TemplateURI } from "../Components/TemplateLink"
import { TemplatePage } from "./TemplatePage"

/**
 * A router segment definition for the Template page.
 *
 * This object defines a route path and its associated React element.
 * The `path` property is constructed using a base URI stored in `TemplateURI`
 * and expects an `id` parameter. The `element` property specifies the React
 * component to render when the route matches.
 *
 * @constant {Object} TemplateRouterSegment
 * @property {string} path - The URL path pattern for the route, e.g., "/template/template/view/:id".
 * @property {JSX.Element} element - The React element (component) to render, in this case, <TemplatePage />.
 */
export const TemplateRouterSegment = {
    path: `/${TemplateURI}:id`,
    element: <TemplatePage />,
}