import { useState } from "react"
import { useParams } from "react-router"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { CreateDelayer, ErrorHandler, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared"
import { SubjectLargeCard, SubjectMediumCard, SubjectLink } from "../Components"
import { SubjectReadAsyncAction } from "../Queries"
import { SubjectPageNavbar } from "./SubjectPageNavbar"

const mockSubjectData = {
    "subjectPage": [
      {
        "id": "3c0f46a2-f7ba-4ae5-9a07-2c21662db562",
        "name": "Teoretická matematika"
      },
      {
        "id": "0e2830aa-ff05-488d-8db3-25500d77e793",
        "name": "Aplikovaná matematika"
      },
      {
        "id": "1e52551a-d3c9-4c22-908b-2f121ed0d858",
        "name": "Praktická matematika"
      },
      {
        "id": "b02afed3-1faa-4816-8ee1-f7b3447bf9e5",
        "name": "Obranná matematika"
      },
      {
        "id": "52561501-0c7a-4ff8-93ae-20c39b9d13b1",
        "name": "Převratná matematika"
      },
      {
        "id": "f6979f0f-7608-4a4a-a37a-6eba7eda6dd6",
        "name": "Klasická matematika"
      },
      {
        "id": "2feb1e49-a309-42c7-90ee-638674508190",
        "name": "Královská matematika"
      },
      {
        "id": "6aba46f6-1d12-4f3a-9e58-33d1e8b8ae00",
        "name": "Teoretická fyzika"
      },
      {
        "id": "fe879294-51d7-47fa-8a35-76381f285ac9",
        "name": "Aplikovaná fyzika"
      },
      {
        "id": "640fdb74-02ab-4a98-be19-4b2062a637d4",
        "name": "Praktická fyzika"
      }
    ]
}

/**
 * A page content component for displaying detailed information about an subject entity.
 *
 * This component utilizes `SubjectLargeCard` to create a structured layout and displays 
 * the serialized representation of the `subject` object within the card's content.
 *
 * @component
 * @param {Object} props - The properties for the SubjectPageContent component.
 * @param {Object} props.subject - The object representing the subject entity.
 * @param {string|number} props.subject.id - The unique identifier for the subject entity.
 * @param {string} props.subject.name - The name or label of the subject entity.
 *
 * @returns {JSX.Element} A JSX element rendering the page content for an subject entity.
 *
 * @example
 * // Example usage:
 * const subjectEntity = { id: 123, name: "Sample Entity" };
 * 
 * <SubjectPageContent subject={subjectEntity} />
 */
const SubjectPageContent = ({subject}) => {
    return (<>
        <SubjectPageNavbar subject={subject} />
        <SubjectLargeCard subject={subject}>
            Subject {JSON.stringify(subject)}
        </SubjectLargeCard>
    </>)
}

/**
 * A lazy-loading component for displaying content of an subject entity.
 *
 * This component is created using `createLazyComponent` and wraps `SubjectPageContent` to provide
 * automatic data fetching for the `subject` entity. It uses the `SubjectReadAsyncAction` to fetch
 * the entity data and dynamically injects it into the wrapped component as the `subject` prop.
 *
 * @constant
 * @type {React.Component}
 *
 * @param {Object} props - The props for the lazy-loading component.
 * @param {string|number} props.subject - The identifier of the subject entity to fetch and display.
 *
 * @returns {JSX.Element} A component that fetches the `subject` entity data and displays it
 * using `SubjectPageContent`, or shows loading and error states as appropriate.
 *
 * @example
 * // Example usage:
 * const subjectId = "12345";
 *
 * <SubjectPageContentLazy subject={subjectId} />
 */
const SubjectPageContentLazy = ({subject}) => {
    const { error, loading, entity, fetch } = useAsyncAction(SubjectReadAsyncAction, subject)
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
        {error && <ErrorHandler errors={error} />}
        {entity && <SubjectPageContent subject={entity}  onChange={handleChange} onBlur={handleBlur} />}
    </>)
}

/**
 * A page component for displaying lazy-loaded content of an subject entity.
 *
 * This component extracts the `id` parameter from the route using `useParams`,
 * constructs an `subject` object, and passes it to the `SubjectPageContentLazy` component.
 * The `SubjectPageContentLazy` component handles the lazy-loading and rendering of the entity's content.
 *
 * @component
 * @returns {JSX.Element} The rendered page component displaying the lazy-loaded content for the subject entity.
 *
 * @example
 * // Example route setup:
 * <Route path="/subject/:id" element={<SubjectPage />} />
 *
 * // Navigating to "/subject/12345" will render the page for the subject entity with ID 12345.
 */
export const SubjectPage = () => {
    const {id} = useParams()
    // If no ID is provided, show the list of subjects
    if (!id) {
        return (
            <SubjectLargeCard>
                <Row>
                    {mockSubjectData.subjectPage.map((subject, index) => (
                        <Col key={subject.id} md={6} lg={4} className="mb-3">
                            <SubjectMediumCard 
                                subject={subject}
                                title={<SubjectLink subject={subject} />}
                            >
                                <div>
                                    <p>ID: {subject.id}</p>
                                    <p>Name: {subject.name}</p>
                                </div>
                            </SubjectMediumCard>
                        </Col>
                    ))}
                </Row>
            </SubjectLargeCard>
        )
    }
    // If ID is provided, show the specific subject
    const subject = {id}
    return <SubjectPageContentLazy subject={subject} />
}