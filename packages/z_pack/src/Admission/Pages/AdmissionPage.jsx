import { useState } from "react"
import { useParams } from "react-router"

import { CreateDelayer, ErrorHandler, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared"
import { AdmissionButton, AdmissionLargeCard } from "../Components"
import { AdmissionReadAsyncAction } from "../Queries"
import { AdmissionPageNavbar } from "./AdmissionPageNavbar"
import { StudentReadPageAsyncAction } from "../../Student/Queries"

/**
 * A page content component for displaying detailed information about an admission entity.
 *
 * This component utilizes `AdmissionLargeCard` to create a structured layout and displays 
 * the serialized representation of the `admission` object within the card's content.
 *
 * @component
 * @param {Object} props - The properties for the AdmissionPageContent component.
 * @param {Object} props.admission - The object representing the admission entity.
 * @param {string|number} props.admission.id - The unique identifier for the admission entity.
 * @param {string} props.admission.name - The name or label of the admission entity.
 *
 * @returns {JSX.Element} A JSX element rendering the page content for an admission entity.
 *
 * @example
 * // Example usage:
 * const admissionEntity = { id: 123, name: "Sample Entity" };
 * 
 * <AdmissionPageContent admission={admissionEntity} />
 */
const AdmissionPageContent = ({ admission, children, onChange, onBlur }) => {
    return (
        <>
            <AdmissionPageNavbar admission={admission} />
            <AdmissionLargeCard admission={admission}>
                <AdmissionButton className = "btn btn-outline-success" operation="U" admission={admission} onDone={(admission) => console.log("AdmissionPageContent.onDone", admission)}>
                    Upravit
                </AdmissionButton>

                {children}
            </AdmissionLargeCard>
        </>
    )
}

/**
 * A lazy-loading component for displaying a list of students filtered by program ID.
 *
 * @component
 * @param {Object} props - The props for the StudentListLazy component.
 * @param {string|number} props.programId - The ID of the program to filter students by.
 * @returns {JSX.Element} A component that fetches and displays students for the given program.
 */
const StudentListLazy = ({ programId, admission }) => {
    const { error, loading, dispatchResult } = useAsyncAction(StudentReadPageAsyncAction, {
        where: { program_id: { _eq: programId } }
    })

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    console.log("StudentListLazy.admission", admission)
    console.log("StudentListLazy.programId", programId)
    console.log("StudentListLazy.dispatchResult", dispatchResult)
    const students = dispatchResult?.data?.result.filter(student => student.payment?.paymentInfo?.admission?.id === admission.id) || []

    return (
        <>
            {students.length > 0 ? (
                <>
                    <div className="mt-4">
                        <h4>Podane prihlasky:</h4>
                        <ul className="list-group">
                            {students.map(student => (
                                <li key={student.id} className="list-group-item">
                                    {student.student?.fullname || "Student without name"}
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <div className="mt-4">
                    <h4>Žádné přihlášky</h4>
                </div>
            )}
        </>
    )

}

/**
 * A lazy-loading component for displaying content of an admission entity.
 *
 * This component is created using `createLazyComponent` and wraps `AdmissionPageContent` to provide
 * automatic data fetching for the `admission` entity. It uses the `AdmissionReadAsyncAction` to fetch
 * the entity data and dynamically injects it into the wrapped component as the `admission` prop.
 *
 * @constant
 * @type {React.Component}
 *
 * @param {Object} props - The props for the lazy-loading component.
 * @param {string|number} props.admission - The identifier of the admission entity to fetch and display.
 *
 * @returns {JSX.Element} A component that fetches the `admission` entity data and displays it
 * using `AdmissionPageContent`, or shows loading and error states as appropriate.
 *
 * @example
 * // Example usage:
 * const admissionId = "12345";
 *
 * <AdmissionPageContentLazy admission={admissionId} />
 */
const AdmissionPageContentLazy = ({ admission }) => {
    const { error, loading, entity, fetch } = useAsyncAction(AdmissionReadAsyncAction, admission)
    const [delayer] = useState(() => CreateDelayer())

    const handleChange = async (e) => {
        const data = e.target.value
        const serverResponse = await delayer(() => fetch(data))
    }
    const handleBlur = async (e) => {
        const data = e.target.value
        const serverResponse = await delayer(() => fetch(data))
    }

    return (<>
        {loading && <LoadingSpinner />}
        {error && <ErrorHandler errors={error} />}
        {entity && <AdmissionPageContent
            admission={entity}
            onChange={handleChange}
            onBlur={handleBlur}
        >
            {entity.programId && <StudentListLazy programId={entity.programId} admission={entity} />}
        </AdmissionPageContent>}
    </>)
}

/**
 * A page component for displaying lazy-loaded content of an admission entity.
 *
 * This component extracts the `id` parameter from the route using `useParams`,
 * constructs an `admission` object, and passes it to the `AdmissionPageContentLazy` component.
 * The `AdmissionPageContentLazy` component handles the lazy-loading and rendering of the entity's content.
 *
 * @component
 * @returns {JSX.Element} The rendered page component displaying the lazy-loaded content for the admission entity.
 *
 * @example
 * // Example route setup:
 * <Route path="/admission/:id" element={<AdmissionPage />} />
 *
 * // Navigating to "/admission/12345" will render the page for the admission entity with ID 12345.
 */
export const AdmissionPage = () => {
    const { id } = useParams()
    const admission = { id }
    return <AdmissionPageContentLazy admission={admission} />
}

//   http://localhost:5173/pataszdenda/user/view/51d101a0-81f1-44ca-8366-6cf51432e8d6