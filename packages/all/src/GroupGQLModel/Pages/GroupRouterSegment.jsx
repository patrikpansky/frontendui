import { GroupURI } from "../Components/GroupLink"
import { GroupPage } from "./GroupPage"

/**
 * An array of route segment definitions for the Group pages.
 *
 * Each route object in the array defines a `path` and its associated React `element`.
 * The `path` includes a dynamic `:id` parameter, used to load and display a specific group entity.
 * The `element` property specifies the React component to render when the route matches.
 *
 * Any React `children` elements passed through this route will be injected into the page and 
 * receive `group`, `onChange`, and `onBlur` as props from the `GroupPageContentLazy` component.
 *
 * @constant
 * @type {Array<{ path: string, element: JSX.Element }>}
 *
 * @example
 * // This route matches URLs like "/group/123":
 * {
 *   path: "/group/:id",
 *   element: <GroupPage />
 * }
 */

export const GroupRouterSegments = [
    {
        path: `/${GroupURI}:id`,
        element: (<GroupPage />),
    }
]