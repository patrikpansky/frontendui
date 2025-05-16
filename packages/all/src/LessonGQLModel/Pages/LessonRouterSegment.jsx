import { LessonURI } from "../Components/LessonLink"
import { LessonPage } from "./LessonPage"

/**
 * An array of route segment definitions for the Lesson pages.
 *
 * Each route object in the array defines a `path` and its associated React `element`.
 * The `path` includes a dynamic `:id` parameter, used to load and display a specific lesson entity.
 * The `element` property specifies the React component to render when the route matches.
 *
 * Any React `children` elements passed through this route will be injected into the page and 
 * receive `lesson`, `onChange`, and `onBlur` as props from the `LessonPageContentLazy` component.
 *
 * @constant
 * @type {Array<{ path: string, element: JSX.Element }>}
 *
 * @example
 * // This route matches URLs like "/lesson/123":
 * {
 *   path: "/lesson/:id",
 *   element: <LessonPage />
 * }
 */

export const LessonRouterSegments = [
    {
        path: `/${LessonURI}:id`,
        element: (<LessonPage />),
    }
]