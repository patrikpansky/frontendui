import { Z_packURI } from "../Components/Z_packLink"
import { Z_packPage } from "./Z_packPage"

/**
 * A router segment definition for the Z_pack page.
 *
 * This object defines a route path and its associated React element.
 * The `path` property is constructed using a base URI stored in `Z_packURI`
 * and expects an `id` parameter. The `element` property specifies the React
 * component to render when the route matches.
 *
 * @constant {Object} Z_packRouterSegment
 * @property {string} path - The URL path pattern for the route, e.g., "/z_pack/z_pack/view/:id".
 * @property {JSX.Element} element - The React element (component) to render, in this case, <Z_packPage />.
 */
export const Z_packRouterSegment = {
    path: `/${Z_packURI}:id`,
    element: <Z_packPage />,
}