import { useState } from "react"
import { useParams } from "react-router"

import { CreateDelayer, ErrorHandler, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared"
import { EvalutaionLargeCard } from "../Components"
import { EvalutaionReadAsyncAction } from "../Queries"
import { EvalutaionPageNavbar } from "./EvalutaionPageNavbar"

/**
 * A page content component for displaying detailed information about an evalutaion entity.
 *
 * This component utilizes `EvalutaionLargeCard` to create a structured layout and displays 
 * the serialized representation of the `evalutaion` object within the card's content.
 *
 * @component
 * @param {Object} props - The properties for the EvalutaionPageContent component.
 * @param {Object} props.evalutaion - The object representing the evalutaion entity.
 * @param {string|number} props.evalutaion.id - The unique identifier for the evalutaion entity.
 * @param {string} props.evalutaion.name - The name or label of the evalutaion entity.
 *
 * @returns {JSX.Element} A JSX element rendering the page content for an evalutaion entity.
 *
 * @example
 * // Example usage:
 * const evalutaionEntity = { id: 123, name: "Sample Entity" };
 * 
 * <EvalutaionPageContent evalutaion={evalutaionEntity} />
 */
const EvalutaionPageContent = ({evalutaion}) => {
    return (<>
        <EvalutaionPageNavbar evalutaion={evalutaion} />
        <EvalutaionLargeCard evalutaion={evalutaion}>
            Evalutaion {JSON.stringify(evalutaion)}
        </EvalutaionLargeCard>
    </>)
}

/**
 * A lazy-loading component for displaying content of an evalutaion entity.
 *
 * This component is created using `createLazyComponent` and wraps `EvalutaionPageContent` to provide
 * automatic data fetching for the `evalutaion` entity. It uses the `EvalutaionReadAsyncAction` to fetch
 * the entity data and dynamically injects it into the wrapped component as the `evalutaion` prop.
 *
 * @constant
 * @type {React.Component}
 *
 * @param {Object} props - The props for the lazy-loading component.
 * @param {string|number} props.evalutaion - The identifier of the evalutaion entity to fetch and display.
 *
 * @returns {JSX.Element} A component that fetches the `evalutaion` entity data and displays it
 * using `EvalutaionPageContent`, or shows loading and error states as appropriate.
 *
 * @example
 * // Example usage:
 * const evalutaionId = "12345";
 *
 * <EvalutaionPageContentLazy evalutaion={evalutaionId} />
 */
const EvalutaionPageContentLazy = ({evalutaion}) => {
    const { error, loading, entity, fetch } = useAsyncAction(EvalutaionReadAsyncAction, evalutaion)
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
        {entity && <EvalutaionPageContent evalutaion={entity}  onChange={handleChange} onBlur={handleBlur} />}
    </>)
}

/**
 * A page component for displaying lazy-loaded content of an evalutaion entity.
 *
 * This component extracts the `id` parameter from the route using `useParams`,
 * constructs an `evalutaion` object, and passes it to the `EvalutaionPageContentLazy` component.
 * The `EvalutaionPageContentLazy` component handles the lazy-loading and rendering of the entity's content.
 *
 * @component
 * @returns {JSX.Element} The rendered page component displaying the lazy-loaded content for the evalutaion entity.
 *
 * @example
 * // Example route setup:
 * <Route path="/evalutaion/:id" element={<EvalutaionPage />} />
 *
 * // Navigating to "/evalutaion/12345" will render the page for the evalutaion entity with ID 12345.
 */
export const EvalutaionPage = () => {
    const {id} = useParams()
    const evalutaion = {id}
    return <EvalutaionPageContentLazy evalutaion={evalutaion} />
}