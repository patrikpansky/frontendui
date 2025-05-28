import { useState } from "react"
import { useParams } from "react-router"

import { CreateDelayer, ErrorHandler, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared"
import { Z_packLargeCard } from "../Components"
import { Z_packReadAsyncAction } from "../Queries"
import { Z_packPageNavbar } from "./Z_packPageNavbar"

/**
 * A page content component for displaying detailed information about an z_pack entity.
 *
 * This component utilizes `Z_packLargeCard` to create a structured layout and displays 
 * the serialized representation of the `z_pack` object within the card's content.
 *
 * @component
 * @param {Object} props - The properties for the Z_packPageContent component.
 * @param {Object} props.z_pack - The object representing the z_pack entity.
 * @param {string|number} props.z_pack.id - The unique identifier for the z_pack entity.
 * @param {string} props.z_pack.name - The name or label of the z_pack entity.
 *
 * @returns {JSX.Element} A JSX element rendering the page content for an z_pack entity.
 *
 * @example
 * // Example usage:
 * const z_packEntity = { id: 123, name: "Sample Entity" };
 * 
 * <Z_packPageContent z_pack={z_packEntity} />
 */
const Z_packPageContent = ({z_pack}) => {
    return (<>
        <Z_packPageNavbar z_pack={z_pack} />
        <Z_packLargeCard z_pack={z_pack}>
            Z_pack {JSON.stringify(z_pack)}
        </Z_packLargeCard>
    </>)
}

/**
 * A lazy-loading component for displaying content of an z_pack entity.
 *
 * This component is created using `createLazyComponent` and wraps `Z_packPageContent` to provide
 * automatic data fetching for the `z_pack` entity. It uses the `Z_packReadAsyncAction` to fetch
 * the entity data and dynamically injects it into the wrapped component as the `z_pack` prop.
 *
 * @constant
 * @type {React.Component}
 *
 * @param {Object} props - The props for the lazy-loading component.
 * @param {string|number} props.z_pack - The identifier of the z_pack entity to fetch and display.
 *
 * @returns {JSX.Element} A component that fetches the `z_pack` entity data and displays it
 * using `Z_packPageContent`, or shows loading and error states as appropriate.
 *
 * @example
 * // Example usage:
 * const z_packId = "12345";
 *
 * <Z_packPageContentLazy z_pack={z_packId} />
 */
const Z_packPageContentLazy = ({z_pack}) => {
    const { error, loading, entity, fetch } = useAsyncAction(Z_packReadAsyncAction, z_pack)
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
        {entity && <Z_packPageContent z_pack={entity}  onChange={handleChange} onBlur={handleBlur} />}
    </>)
}

/**
 * A page component for displaying lazy-loaded content of an z_pack entity.
 *
 * This component extracts the `id` parameter from the route using `useParams`,
 * constructs an `z_pack` object, and passes it to the `Z_packPageContentLazy` component.
 * The `Z_packPageContentLazy` component handles the lazy-loading and rendering of the entity's content.
 *
 * @component
 * @returns {JSX.Element} The rendered page component displaying the lazy-loaded content for the z_pack entity.
 *
 * @example
 * // Example route setup:
 * <Route path="/z_pack/:id" element={<Z_packPage />} />
 *
 * // Navigating to "/z_pack/12345" will render the page for the z_pack entity with ID 12345.
 */
export const Z_packPage = () => {
    const {id} = useParams()
    const z_pack = {id}
    return <Z_packPageContentLazy z_pack={z_pack} />
}