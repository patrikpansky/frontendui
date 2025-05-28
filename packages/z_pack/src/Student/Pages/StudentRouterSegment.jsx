import { StudentURI } from "../Components/StudentLink"
import { StudentPage } from "./StudentPage"

/**
 * A router segment definition for the Student page.
 *
 * This object defines a route path and its associated React element.
 * The `path` property is constructed using a base URI stored in `StudentURI`
 * and expects an `id` parameter. The `element` property specifies the React
 * component to render when the route matches.
 *
 * @constant {Object} StudentRouterSegment
 * @property {string} path - The URL path pattern for the route, e.g., "/student/student/view/:id".
 * @property {JSX.Element} element - The React element (component) to render, in this case, <StudentPage />.
 */
export const StudentRouterSegment = {
    path: `/${StudentURI}:id`,
    element: <StudentPage />,
}