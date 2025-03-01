import { AdmissionprocessURI } from "../AdmissionprocessLink"
import { AdmissionprocessPage } from "./AdmissionprocessPage"

/**
 * A router segment definition for the Admissionprocess page.
 *
 * This object defines a route path and its associated React element.
 * The `path` property is constructed using a base URI stored in `AdmissionprocessURI`
 * and expects an `id` parameter. The `element` property specifies the React
 * component to render when the route matches.
 *
 * @constant {Object} AdmissionprocessRouterSegment
 * @property {string} path - The URL path pattern for the route, e.g., "/admissionprocess/:id".
 * @property {JSX.Element} element - The React element (component) to render, in this case, <AdmissionprocessPage />.
 */
export const AdmissionprocessRouterSegment = {
    path: `/${AdmissionprocessURI}/:id`,
    element: <AdmissionprocessPage />,
}