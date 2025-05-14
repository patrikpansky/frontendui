import { EvalutaionURI } from "../Components/EvalutaionLink"
import { EvalutaionPage } from "./EvalutaionPage"

/**
 * A router segment definition for the Evalutaion page.
 *
 * This object defines a route path and its associated React element.
 * The `path` property is constructed using a base URI stored in `EvalutaionURI`
 * and expects an `id` parameter. The `element` property specifies the React
 * component to render when the route matches.
 *
 * @constant {Object} EvalutaionRouterSegment
 * @property {string} path - The URL path pattern for the route, e.g., "/evalutaion/evalutaion/view/:id".
 * @property {JSX.Element} element - The React element (component) to render, in this case, <EvalutaionPage />.
 */
export const EvalutaionRouterSegment = {
    path: `/${EvalutaionURI}:id`,
    element: <EvalutaionPage />,
}