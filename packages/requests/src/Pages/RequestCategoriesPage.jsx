import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ButtonWithDialog, createLazyComponent, DeleteButton, ErrorHandler, LeftColumn, LoadingSpinner, MiddleColumn, SimpleCardCapsule } from "@hrbolek/uoisfrontend-shared"
import { useParams } from "react-router"
import { RequestCategoryReadAsyncAction } from "./Queries/RequestCategoryReadAsyncAction"
import { RequestCategoryPageReadAsyncAction } from "./Queries/RequestCategoryPageReadAsyncAction"
import { RequestPageNavbar } from "./RequestPageNavbar"
import { RequestCategoriesTable } from "../Components/RequestCategory"
import { useAsyncAction } from '@hrbolek/uoisfrontend-gql-shared'
import { RequestCategoryInsertAsyncAction } from './Queries/RequestCategoryInsertMutation'
import { RequestTypeInsertAsyncAction } from './Queries/RequestTypeInsertMutation'
import { RequestTypeMediumCard } from '../Components/RequestType/RequestTypeMediumCard'
import { RequestCategoryTypesAttribute } from '../Components/RequestCategory/Vectors/RequestCategoryTypesAttribute'
import { RequestCategoryMediumCard } from '../Components/RequestCategory/RequestCategoryMediumCard'
import { RequestCategoryCardCapsule } from '../Components/RequestCategory/RequestCategoryCardCapsule'
import { RequestTypeCardCapsule } from '../Components/RequestType/RequestTypeCardCapsule'
import { InsertRequestTypeButton } from '../Components/RequestType/InsertRequestTypeButton'
import { InsertRequestCategoryButton } from '../Components/RequestCategory/InsertRequestCategoryButton'


const RequestTypeMediumCardCol = ({requestcategory, ...props}) => {
    const {requesttype} = props
    return (
        <Col>
            <RequestTypeMediumCard {...props}/>
        </Col>
    )
}
/**
 * A page content component for displaying detailed information about an requestcategory entity.
 *
 * This component utilizes `RequestCategoryLargeCard` to create a structured layout and displays 
 * the serialized representation of the `requestcategory` object within the card's content.
 *
 * @component
 * @param {Object} props - The properties for the RequestCategoryPageContent component.
 * @param {Array} props.requestcategories - The object representing the requestcategory entity.
 *
 * @returns {JSX.Element} A JSX element rendering the page content for an requestcategory entity.
 *
 * @example
 * // Example usage:
 * const requestcategoryEntity = { id: 123, name: "Sample Entity" };
 * 
 * <RequestCategoryPageContent requestcategory={requestcategoryEntity} />
 */
const RequestCategoriesPageContent = ({requestcategories = [], onContentChange = ()=>null}) => {
    const items = useSelector(state => state.items)
    requestcategories = Object.values(items).filter(
        item => item?.__typename === "RequestCategoryGQLModel"
    )
    // const [data, setData] = useState(requestcategories || [])
    // const addRow = (newRow) => {
    //     setData(prev => [...prev, newRow])
    // }

    const addRow = () => null
    const onNewRequestType = async (requestType) => {
        console.log("onNewRequestType", requestType)
        onContentChange(requestType)
    }
    // useEffect(() => {
    //     if (requestcategories.length !== requestcategories.length) {
    //         setData(requestcategories)
    //     }
    // }, [requestcategories])
    return (
        <>
            <RequestPageNavbar />
            <Row>
                <LeftColumn>
                </LeftColumn>
                <MiddleColumn>
                    <Row>
                    {requestcategories.map(requestcategory => 
                        <Col key={requestcategory.id}>
                            <RequestCategoryCardCapsule requestcategory={requestcategory}>
                                <Row>
                                    <RequestCategoryTypesAttribute requestcategory={requestcategory}>
                                        <RequestTypeMediumCardCol>
                                            
                                        </RequestTypeMediumCardCol>
                                    </RequestCategoryTypesAttribute>
                                </Row>
                                <Row>
                                    <Col>
                                        <InsertRequestTypeButton 
                                            // params={requestcategory} 
                                            className='btn btn-outline-primary form-control'
                                            params={{category_id: requestcategory.id}}
                                            onDone={onNewRequestType}
                                        >
                                            Vložit nový typ
                                        </InsertRequestTypeButton>
                                    </Col>
                                </Row>
                            </RequestCategoryCardCapsule>
                        </Col>
                    )}   
                    </Row>             
                    <InsertRequestCategoryButton className='btn btn-outline-primary form-control' onDone={addRow}>
                        Vložit novou kategorii
                    </InsertRequestCategoryButton>
                </MiddleColumn>
            </Row>
        </>
    )
}

/**
 * A lazy-loading component for displaying the content of multiple `requestcategories` entities.
 *
 * This component is created using `createLazyComponent` and wraps `RequestCategoriesPageContent` to provide
 * automatic data fetching for the `requestcategories` entities. It uses the `RequestCategoryPageReadAsyncAction` to fetch
 * paginated data and dynamically injects it into the wrapped component as the `requestcategories` prop.
 *
 * @constant
 * @type {React.ComponentType}
 *
 * @param {Object} props - The props for the lazy-loading component.
 * @param {Object} props.requestcategories - An object containing pagination and filtering options.
 * @param {number} [props.requestcategories.skip] - The number of records to skip (used for pagination).
 * @param {number} [props.requestcategories.limit] - The maximum number of records to fetch (used for pagination).
 * @param {Object} [props.requestcategories.where] - Filtering options to apply to the query, matching the `RequestCategoryInputFilter` type in the GraphQL schema.
 *
 * @returns {JSX.Element} A lazy-loading component that fetches the `requestcategories` entities data and displays it
 * using `RequestCategoriesPageContent`. The component manages loading and error states as appropriate.
 *
 * @example
 * // Example usage:
 * const queryOptions = {
 *   skip: 0,
 *   limit: 10,
 *   where: { name: "Example Category" },
 * };
 *
 * <RequestCategoriesPageContentLazy requestcategories={queryOptions} />
 */
const RequestCategoriesPageContentLazy_ = createLazyComponent(RequestCategoriesPageContent, "requestcategories", RequestCategoryPageReadAsyncAction)
const RequestCategoriesPageContentLazy = ({where}) => {
    const {fetch, error, loading, dispatchResult} = useAsyncAction(RequestCategoryPageReadAsyncAction, {where})
    const onContentChange = async ()=> {
        console.log("buble to RequestCategoriesPageContentLazy")
        const refresh = await fetch()
        console.log("refresh ", refresh)
    }
    if (error) return <ErrorHandler errors={error} />
    if (loading) return <LoadingSpinner text={"Nahrávám kategorie požadavků"}/>
    const requestcategories = dispatchResult?.data?.result
    if (!requestcategories) <ErrorHandler errors="Neočekáváně selhal dotaz na server" />
    return (
        <RequestCategoriesPageContent requestcategories= {requestcategories} onContentChange={onContentChange}/>
    )
}
/**
 * A page component for displaying lazy-loaded content of an requestcategory entity.
 *
 * This component extracts the `id` parameter from the route using `useParams`,
 * constructs an `requestcategory` object, and passes it to the `RequestCategoryPageContentLazy` component.
 * The `RequestCategoryPageContentLazy` component handles the lazy-loading and rendering of the entity's content.
 *
 * @component
 * @returns {JSX.Element} The rendered page component displaying the lazy-loaded content for the requestcategory entity.
 *
 * @example
 * // Example route setup:
 * <Route path="/requestcategory/:id" element={<RequestCategoryPage />} />
 *
 * // Navigating to "/requestcategory/12345" will render the page for the requestcategory entity with ID 12345.
 */
export const RequestCategoriesPage = () => {
    const {id, where} = useParams()
    return <RequestCategoriesPageContentLazy requestcategories={{where: where, skip: 0, limit: 10}} />
}
