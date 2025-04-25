import { UserURI } from "../Components/UserLink"
import { UserPage } from "./UserPage"

/**
 * A router segment definition for the User page.
 *
 * This object defines a route path and its associated React element.
 * The `path` property is constructed using a base URI stored in `UserURI`
 * and expects an `id` parameter. The `element` property specifies the React
 * component to render when the route matches.
 *
 * @constant {Object} UserRouterSegment
 * @property {string} path - The URL path pattern for the route, e.g., "/user/user/view/:id".
 * @property {JSX.Element} element - The React element (component) to render, in this case, <UserPage />.
 */
export const UserRouterSegment = {
    path: `/${UserURI}:id`,
    element: <UserPage />,
}