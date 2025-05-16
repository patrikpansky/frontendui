import { StudyPlanLessonURI } from "../Components/StudyPlanLessonLink"
import { StudyPlanLessonPage } from "./StudyPlanLessonPage"

/**
 * An array of route segment definitions for the StudyPlanLesson pages.
 *
 * Each route object in the array defines a `path` and its associated React `element`.
 * The `path` includes a dynamic `:id` parameter, used to load and display a specific studyplanlesson entity.
 * The `element` property specifies the React component to render when the route matches.
 *
 * Any React `children` elements passed through this route will be injected into the page and 
 * receive `studyplanlesson`, `onChange`, and `onBlur` as props from the `StudyPlanLessonPageContentLazy` component.
 *
 * @constant
 * @type {Array<{ path: string, element: JSX.Element }>}
 *
 * @example
 * // This route matches URLs like "/studyplanlesson/123":
 * {
 *   path: "/studyplanlesson/:id",
 *   element: <StudyPlanLessonPage />
 * }
 */

export const StudyPlanLessonRouterSegments = [
    {
        path: `/${StudyPlanLessonURI}:id`,
        element: (<StudyPlanLessonPage />),
    }
]