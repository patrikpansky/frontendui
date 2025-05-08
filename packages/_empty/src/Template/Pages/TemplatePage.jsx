import { useState } from "react"
import { useParams } from "react-router"

import { CreateDelayer, ErrorHandler, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared"
import { TemplateLargeCard } from "../Components"
import { TemplateReadAsyncAction } from "../Queries"
import { TemplatePageNavbar } from "./TemplatePageNavbar"

/**
 * A page content component for displaying detailed information about an template entity.
 *
 * This component utilizes `TemplateLargeCard` to create a structured layout and displays 
 * the serialized representation of the `template` object within the card's content.
 *
 * @component
 * @param {Object} props - The properties for the TemplatePageContent component.
 * @param {Object} props.template - The object representing the template entity.
 * @param {string|number} props.template.id - The unique identifier for the template entity.
 * @param {string} props.template.name - The name or label of the template entity.
 *
 * @returns {JSX.Element} A JSX element rendering the page content for an template entity.
 *
 * @example
 * // Example usage:
 * const templateEntity = { id: 123, name: "Sample Entity" };
 * 
 * <TemplatePageContent template={templateEntity} />
 */
const TemplatePageContent = ({template, onChange, onBlur}) => {
    return (<>
        <TemplatePageNavbar template={template} />
        <TemplateLargeCard template={template}>
            Template {JSON.stringify(template)}
        </TemplateLargeCard>
    </>)
}

/**
 * A lazy-loading component for displaying content of an template entity.
 *
 * This component is created using `createLazyComponent` and wraps `TemplatePageContent` to provide
 * automatic data fetching for the `template` entity. It uses the `TemplateReadAsyncAction` to fetch
 * the entity data and dynamically injects it into the wrapped component as the `template` prop.
 *
 * @constant
 * @type {React.Component}
 *
 * @param {Object} props - The props for the lazy-loading component.
 * @param {string|number} props.template - The identifier of the template entity to fetch and display.
 *
 * @returns {JSX.Element} A component that fetches the `template` entity data and displays it
 * using `TemplatePageContent`, or shows loading and error states as appropriate.
 *
 * @example
 * // Example usage:
 * const templateId = "12345";
 *
 * <TemplatePageContentLazy template={templateId} />
 */
const TemplatePageContentLazy = ({template}) => {
    const { error, loading, entity, fetch } = useAsyncAction(TemplateReadAsyncAction, template)
    const [delayer] = useState(() => CreateDelayer())

    const handleChange = async(e) => {
        // console.log("TemplatePageContentLazy.handleChange.e", e)
        const data = e.target.value
        const serverResponse = await delayer(() => fetch(data))
        // console.log("TemplatePageContentLazy.serverResponse", serverResponse)
    }
    const handleBlur = async(e) => {
        // console.log("TemplatePageContentLazy.handleBlur.e", e)
        const data = e.target.value
        const serverResponse = await delayer(() => fetch(data))
        // console.log("TemplatePageContentLazy.serverResponse", serverResponse)
    }

    return (<>
        {loading && <LoadingSpinner />}
        {error && <ErrorHandler errors={error} />}
        {entity && <TemplatePageContent template={entity} onChange={handleChange} onBlur={handleBlur} />}
    </>)
}

/**
 * A page component for displaying lazy-loaded content of an template entity.
 *
 * This component extracts the `id` parameter from the route using `useParams`,
 * constructs an `template` object, and passes it to the `TemplatePageContentLazy` component.
 * The `TemplatePageContentLazy` component handles the lazy-loading and rendering of the entity's content.
 *
 * @component
 * @returns {JSX.Element} The rendered page component displaying the lazy-loaded content for the template entity.
 *
 * @example
 * // Example route setup:
 * <Route path="/template/:id" element={<TemplatePage />} />
 *
 * // Navigating to "/template/12345" will render the page for the template entity with ID 12345.
 */
export const TemplatePage = () => {
    const {id} = useParams()
    const template = {id}
    return <TemplatePageContentLazy template={template} />
}