import { AdmissionURI } from "../Components/AdmissionLink"
import { AdmissionPage } from "./AdmissionPage"

/**
 * An array of route segment definitions for the Admission pages.
 *
 * Each route object in the array defines a `path` and its associated React `element`.
 * The `path` includes a dynamic `:id` parameter, used to load and display a specific admission entity.
 * The `element` property specifies the React component to render when the route matches.
 *
 * Any React `children` elements passed through this route will be injected into the page and 
 * receive `admission`, `onChange`, and `onBlur` as props from the `AdmissionPageContentLazy` component.
 *
 * @constant
 * @type {Array<{ path: string, element: JSX.Element }>}
 *
 * @example
 * // This route matches URLs like "/admission/123":
 * {
 *   path: "/admission/:id",
 *   element: <AdmissionPage />
 * }
 */

export const AdmissionRouterSegments = [
    {
        path: `/${AdmissionURI}:id`,
        element: (<AdmissionPage />),
    }
]