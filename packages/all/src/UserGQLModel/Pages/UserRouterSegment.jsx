import { UserURI } from "../Components/UserLink"
import { UserPage } from "./UserPage"

/**
 * An array of route segment definitions for the User pages.
 *
 * Each route object in the array defines a `path` and its associated React `element`.
 * The `path` includes a dynamic `:id` parameter, used to load and display a specific user entity.
 * The `element` property specifies the React component to render when the route matches.
 *
 * Any React `children` elements passed through this route will be injected into the page and 
 * receive `user`, `onChange`, and `onBlur` as props from the `UserPageContentLazy` component.
 *
 * @constant
 * @type {Array<{ path: string, element: JSX.Element }>}
 *
 * @example
 * // This route matches URLs like "/user/123":
 * {
 *   path: "/user/:id",
 *   element: <UserPage />
 * }
 */

export const UserRouterSegments = [
    {
        path: `/${UserURI}:id`,
        element: (<UserPage />),
    }
]