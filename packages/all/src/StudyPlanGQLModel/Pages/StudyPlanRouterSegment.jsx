import { StudyPlanURI } from "../Components/StudyPlanLink"
import { StudyPlanPage } from "./StudyPlanPage"

/**
 * An array of route segment definitions for the StudyPlan pages.
 *
 * Each route object in the array defines a `path` and its associated React `element`.
 * The `path` includes a dynamic `:id` parameter, used to load and display a specific studyplan entity.
 * The `element` property specifies the React component to render when the route matches.
 *
 * Any React `children` elements passed through this route will be injected into the page and 
 * receive `studyplan`, `onChange`, and `onBlur` as props from the `StudyPlanPageContentLazy` component.
 *
 * @constant
 * @type {Array<{ path: string, element: JSX.Element }>}
 *
 * @example
 * // This route matches URLs like "/studyplan/123":
 * {
 *   path: "/studyplan/:id",
 *   element: <StudyPlanPage />
 * }
 */

export const StudyPlanRouterSegments = [
    {
        path: `/${StudyPlanURI}:id`,
        element: (<StudyPlanPage />),
    }
]