import { LessonTypeURI } from "../Components/LessonTypeLink"
import { LessonTypePage } from "./LessonTypePage"

/**
 * An array of route segment definitions for the LessonType pages.
 *
 * Each route object in the array defines a `path` and its associated React `element`.
 * The `path` includes a dynamic `:id` parameter, used to load and display a specific lessontype entity.
 * The `element` property specifies the React component to render when the route matches.
 *
 * Any React `children` elements passed through this route will be injected into the page and 
 * receive `lessontype`, `onChange`, and `onBlur` as props from the `LessonTypePageContentLazy` component.
 *
 * @constant
 * @type {Array<{ path: string, element: JSX.Element }>}
 *
 * @example
 * // This route matches URLs like "/lessontype/123":
 * {
 *   path: "/lessontype/:id",
 *   element: <LessonTypePage />
 * }
 */

export const LessonTypeRouterSegments = [
    {
        path: `/${LessonTypeURI}:id`,
        element: (<LessonTypePage />),
    }
]