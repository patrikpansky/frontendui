import { LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { useParams } from "react-router"
import { AdmissionprocessLargeCard } from "../AdmissionprocessLargeCard"
import { AdmissionprocessReadAsyncAction } from "../Queries/AdmissionprocessReadAsyncAction"
import { AdmissionprocessPageNavbar } from "./AdmissionprocessPageNavbar"

/**
 * A page content component for displaying detailed information about an admissionprocess entity.
 *
 * This component utilizes `AdmissionprocessLargeCard` to create a structured layout and displays 
 * the serialized representation of the `admissionprocess` object within the card's content.
 *
 * @component
 * @param {Object} props - The properties for the AdmissionprocessPageContent component.
 * @param {Object} props.admissionprocess - The object representing the admissionprocess entity.
 * @param {string|number} props.admissionprocess.id - The unique identifier for the admissionprocess entity.
 * @param {string} props.admissionprocess.name - The name or label of the admissionprocess entity.
 *
 * @returns {JSX.Element} A JSX element rendering the page content for an admissionprocess entity.
 *
 * @example
 * // Example usage:
 * const admissionprocessEntity = { id: 123, name: "Sample Entity" };
 * 
 * <AdmissionprocessPageContent admissionprocess={admissionprocessEntity} />
 */
const AdmissionprocessPageContent = ({admissionprocess}) => {
    return (<>
        <AdmissionprocessPageNavbar admissionprocess={admissionprocess} />
        <AdmissionprocessLargeCard admissionprocess={admissionprocess}>
            Admissionprocess {JSON.stringify(admissionprocess)}
        </AdmissionprocessLargeCard>
    </>)
}

/**
 * A lazy-loading component for displaying content of an admissionprocess entity.
 *
 * This component is created using `createLazyComponent` and wraps `AdmissionprocessPageContent` to provide
 * automatic data fetching for the `admissionprocess` entity. It uses the `AdmissionprocessReadAsyncAction` to fetch
 * the entity data and dynamically injects it into the wrapped component as the `admissionprocess` prop.
 *
 * @constant
 * @type {React.Component}
 *
 * @param {Object} props - The props for the lazy-loading component.
 * @param {string|number} props.admissionprocess - The identifier of the admissionprocess entity to fetch and display.
 *
 * @returns {JSX.Element} A component that fetches the `admissionprocess` entity data and displays it
 * using `AdmissionprocessPageContent`, or shows loading and error states as appropriate.
 *
 * @example
 * // Example usage:
 * const admissionprocessId = "12345";
 *
 * <AdmissionprocessPageContentLazy admissionprocess={admissionprocessId} />
 */
const AdmissionprocessPageContentLazy = ({admissionprocess}) => {
    const { error, loading, entity, fetch } = useAsyncAction(AdmissionprocessReadAsyncAction, admissionprocess)
    const [delayer] = useState(() => CreateDelayer())

    const handleChange = async(e) => {
        // console.log("GroupCategoryPageContentLazy.handleChange.e", e)
        const data = e.target.value
        const serverResponse = await delayer(() => fetch(data))
        // console.log("GroupCategoryPageContentLazy.serverResponse", serverResponse)
    }
    const handleBlur = async(e) => {
        // console.log("GroupCategoryPageContentLazy.handleBlur.e", e)
        const data = e.target.value
        const serverResponse = await delayer(() => fetch(data))
        // console.log("GroupCategoryPageContentLazy.serverResponse", serverResponse)
    }

    return (<>
        {loading && <LoadingSpinner />}
        {error && <ErrorEvent errors={error} />}
        {entity && <AdmissionprocessPageContent admissionprocess={entity}  onChange={handleChange} onBlur={handleBlur} />}
    </>)
}

/**
 * A page component for displaying lazy-loaded content of an admissionprocess entity.
 *
 * This component extracts the `id` parameter from the route using `useParams`,
 * constructs an `admissionprocess` object, and passes it to the `AdmissionprocessPageContentLazy` component.
 * The `AdmissionprocessPageContentLazy` component handles the lazy-loading and rendering of the entity's content.
 *
 * @component
 * @returns {JSX.Element} The rendered page component displaying the lazy-loaded content for the admissionprocess entity.
 *
 * @example
 * // Example route setup:
 * <Route path="/admissionprocess/:id" element={<AdmissionprocessPage />} />
 *
 * // Navigating to "/admissionprocess/12345" will render the page for the admissionprocess entity with ID 12345.
 */
export const AdmissionprocessPage = () => {
    const {id} = useParams()
    const admissionprocess = {id}
    return <AdmissionprocessPageContentLazy admissionprocess={admissionprocess} />
}