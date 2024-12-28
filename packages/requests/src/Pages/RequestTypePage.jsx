import { useMemo, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { createLazyComponent, DeleteButton, ErrorHandler, LeftColumn, LoadingSpinner, MiddleColumn, SimpleCardCapsule } from "@hrbolek/uoisfrontend-shared"
import { useParams } from "react-router"
import { RequestPageNavbar } from "./RequestPageNavbar"
import { RequestTypeReadAsyncAction } from './Queries/RequestTypeReadAsyncAction'
import { FormCreateButtonDialog } from '../Components/Form/FormCreateButtonDialog'
import { useAsyncAction } from '@hrbolek/uoisfrontend-gql-shared'
import { RequestTypeUpdateAsyncAction } from './Queries/RequestTypeUpdateAsyncAction'
import { HorizontalLine } from '../Components/Part'
import { Item } from '../Components/Item/Item'
import { ItemIndex } from '../Components/Item/Visualisers'
import { DragableEnvelop, DragDropContext, DroppableContainer } from '../Components/DragAndDrop/dad'
import { ItemInsertAsyncAction } from '../Components/Item/Queries/ItemInsertAsyncAction'
import { PencilFill, PlusLg, TrashFill } from 'react-bootstrap-icons'
import { InsertSectionButton } from '../Components/Section/InsertSectionButton'
import { InsertPartButton } from '../Components/Part/InsertPartButton'
import { DeletePartButton } from '../Components/Part/DeletePartButton'
import { UpdatePartButton } from '../Components/Part/UpdatePartButton'
import { UpdateSectionButton } from '../Components/Section/UpdateSectionButton'
import { DeleteSectionButton } from '../Components/Section/DeleteSectionButton'
import { UpdateItemButton } from '../Components/Item/UpdateItemButton'
import { DeleteItemButton } from '../Components/Item/DeleteItemButton'

/**
 * A page content component for displaying detailed information about an requesttype entity.
 *
 * This component utilizes `RequestTypeLargeCard` to create a structured layout and displays 
 * the serialized representation of the `requesttype` object within the card's content.
 *
 * @component
 * @param {Object} props - The properties for the RequestTypePageContent component.
 * @param {Object} props.requesttype - The object representing the requesttype entity.
 * @param {string|number} props.requesttype.id - The unique identifier for the requesttype entity.
 * @param {string} props.requesttype.name - The name or label of the requesttype entity.
 *
 * @returns {JSX.Element} A JSX element rendering the page content for an requesttype entity.
 *
 * @example
 * // Example usage:
 * const requesttypeEntity = { id: 123, name: "Sample Entity" };
 * 
 * <RequestTypePageContent requesttype={requesttypeEntity} />
 */
const RequestTypePageContent = ({requesttype}) => {
    const { groupId, templateFormId, templateForm } = requesttype
    const { fetch: updateRequestType, loading, error } = useAsyncAction(RequestTypeUpdateAsyncAction, {...requesttype}, {deferred: true})
    const {
        error: request_type_error, 
        loading: request_type_loading, 
        // entity: request_type, 
        // dispatchResult: request_type_dispatch_result,
        fetch: request_type_refresh
    } = useAsyncAction(RequestTypeReadAsyncAction, {}, {deferred: true})


    const onCreateForm = (form) => {
        updateRequestType({...requesttype, template_form_id: form.id})
    }
    const onUpdateForm = () => {
        request_type_refresh({...requesttype})
    }
    return (
        <>
            <RequestPageNavbar />
            <Row>
                {/* <LeftColumn></LeftColumn> */}
                <Col>
                    RequestType {JSON.stringify(requesttype)}<br />
                    {!templateFormId && <>
                        "Není nastaven formulář"
                        <FormCreateButtonDialog 
                            className="btn btn-outline-primary"
                            onCreate={onCreateForm}
                        >
                            Vytvořit formulář
                        </FormCreateButtonDialog>
                    </>}
                    {/* {templateFormId && <FormSectionAttribute form={templateForm} />} */}
                    {templateFormId && <FormDesigner form={templateForm} onUpdate={onUpdateForm}/>}
                    <br />
                    {!groupId && <>
                        "Není nastavena skupina"
                    </>}
                    {(loading || request_type_loading) && <LoadingSpinner text='Ukládám' />}
                    {(error || request_type_error) && <ErrorHandler errors={error || request_type_error} />}
                </Col>
            </Row>
        </>
    )
}


const grid = 8
const getListStyleDefault = (provided, snapshot) => {
    const result = {
        // display: "flex",
        // flexDirection: snapshot.isDraggingOver ?"column":"row", // Stack items horizontaly
        // flexDirection: "row", // Stack items horizontaly
        gap: `${grid}px`, // Add consistent spacing
        background: "transparent",
        // padding: `${grid}px`,
        borderRadius: "4px",
        // minHeight: "100px", // Ensure droppable area has a minimum height
        transition: "background-color 0.3s ease",
    }
    
    if (snapshot.isDraggingOver) {
        const modification = {
            background: "lightblue",
        }
        return {...result, ...modification}
    }
    return result
}


export const FormDesigner = ({ form, onUpdate=()=>null }) => {
    const {
        error: item_error, 
        loading: item_loading, 
        entity: item, 
        dispatchResult: item_dispatch_result,
        fetch: item_insert
    } = useAsyncAction(ItemInsertAsyncAction, {}, {deferred: true})
    
    const createItem = async (newItem) => {
        const item_from_server = await item_insert(newItem)
        onUpdate()
    }

    const [{ 
        formDisabled, 
        sectionDisabled, 
        partDisabled,
    }, setDropAllowed] = useState({
        formDisabled: true,
        sectionDisabled: true,
        partDisabled: true
    });

    const formCopy = useMemo(() => {
        const formCopy = {
            ...form, 
            sections: (form?.sections || []).toSorted((a, b) => (a?.order || 0) - (b?.order || 0)).map(
                (section, iindex) => ({
                    ...section,
                    order: iindex,
                    parts: (section?.parts || []).toSorted((a, b) => (a?.order || 0) - (b?.order || 0)).map(
                        (part, jindex) => ({
                            ...part,
                            order: jindex,
                            items: (part?.items || []).toSorted((a, b) => (a?.order || 0) - (b?.order || 0)).map(
                                (item, kindex) => ({
                                    ...item,
                                    order: kindex
                                })
                            )
                        })
                    )
                })
            )
        }
        return formCopy
    }, [form])

    const index = useMemo(() => {
        const result = { [formCopy.id]: formCopy };
        formCopy?.sections.forEach((section) => {
            result[section.id] = { ...section, form: formCopy };
            section?.parts.forEach((part) => {
                result[part.id] = { ...part, section };
                part?.items.forEach((item) => {
                    result[item.id] = { ...item, part };
                });
            });
        });
        return result;
    }, [form]);

    const onDragStart = (start) => {
        const { source } = start;
        const sourceObject = index[source.droppableId];
        if (sourceObject) {
            const map = {
                ItemGQLModel: { formDisabled: true, sectionDisabled: true, partDisabled: false },
                PartGQLModel: { formDisabled: true, sectionDisabled: false, partDisabled: true },
                SectionGQLModel: { formDisabled: false, sectionDisabled: true, partDisabled: true },
            };
            const __typename = sourceObject.__typename
            if (__typename) {
                const allowedSetup = map[sourceObject.__typename];
                setDropAllowed(allowedSetup);
                console.log("onDragStart", start, allowedSetup);
            }
            return
        } 
        
        if (source.droppableId === "library") {
            const allowedSetup = { formDisabled: true, sectionDisabled: true, partDisabled: false };
            setDropAllowed(allowedSetup);
            console.log("onDragStart", start, allowedSetup);
            return
        }      
        // Default fallback
        setDropAllowed({ formDisabled: true, sectionDisabled: true, partDisabled: true });
        console.log("WTF onDragStart (default)", start);
    };

    // console.log("allowedSetup", { formDisabled, sectionDisabled, partDisabled });
    const onDragEnd = (result) => {
        console.log("onDragEnd", result);
        setDropAllowed(prev => ({ formDisabled: false, sectionDisabled: false, partDisabled: false }));

        if (!result.destination) return;

        const { source, destination, draggableId } = result;
        const sourceParentId = source.droppableId;
        const destinationParentId = destination.droppableId;
        console.log("onDragEnd.sourceParentId", sourceParentId);
        if (sourceParentId === "library") {
            const targetPartId = destination.droppableId
            const itemTypeId = draggableId
            const item = {
                id: crypto.randomUUID(),
                name: "Nova polozka",
                type_id: itemTypeId,
                part_id: targetPartId,
                state_id: crypto.randomUUID()
            }
            createItem(item)

            return
        }

        const map = {
            FormGQLModel: "sections",
            PartGQLModel: "items",
            SectionGQLModel: "parts",
        };

        if (sourceParentId === destinationParentId) {
            // Same parent: reorder
            const parent = index[sourceParentId];
            const itemsName = map[parent.__typename];
            const parentItems = [...parent[itemsName]];
            const [movedItem] = parentItems.splice(source.index, 1);
            parentItems.splice(destination.index, 0, movedItem);
            parent[itemsName] = parentItems;
        } else {
            // Move between parents
            const sourceParent = index[sourceParentId];
            const destinationParent = index[destinationParentId];
            const itemsName = map[sourceParent.__typename];
            const [movedItem] = sourceParent[itemsName].splice(source.index, 1);
            destinationParent[itemsName].splice(destination.index, 0, movedItem);
        }
    };

    return (
        <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
            <div className="row">
                <LeftColumn>
                    <SimpleCardCapsule title="Library">
                        <DroppableContainer droppableId="library" isDropDisabled={true} getListStyle={getListStyleDefault}>
                        
                            {Object.entries(ItemIndex).map(
                                ([id, Visualiser], i) => <DragableEnvelop draggableId={id} index={i} key={id}>
                                    <SimpleCardCapsule key={id}>
                                        <Visualiser key={id} item={{}} />
                                    </SimpleCardCapsule>
                                </DragableEnvelop>
                            )}
                            <p>Drag items here</p>
                        </DroppableContainer>
                    </SimpleCardCapsule>
                </LeftColumn>
                <MiddleColumn>
                <SimpleCardCapsule title={form.name}>
                    <div type="DroppableContainer" droppableId={form.id} isDropDisabled={formDisabled} getListStyle={getListStyleDefault}>
                            {formCopy?.sections.map((section, i) => (
                                <div type="DragableEnvelop" draggableId={section.id} index={i}>
                                    <SimpleCardCapsule title={
                                            <>
                                            {section.name}{'\u00A0'}{'\u00A0'}
                                            <UpdateSectionButton section={{...section, parts: null}} className="btn btn-sm btn-outline-secondary" onDone={onUpdate} >
                                                <PencilFill />
                                            </UpdateSectionButton>
                                            <DeleteSectionButton section={section} className="btn btn-sm btn-outline-secondary" onDone={onUpdate}>
                                                <TrashFill />
                                            </DeleteSectionButton>
                                            </>}
                                    >
                                        <div type="DroppableContainer" key={section.id} droppableId={section.id} isDropDisabled={sectionDisabled} getListStyle={getListStyleDefault}>
                                        
                                            {section?.parts.map((part, j) => (
                                                <div type="DragableEnvelop" draggableId={part.id} index={j}>
                                                    <SimpleCardCapsule 
                                                        title={
                                                            <>
                                                            {part.name}{'\u00A0'}{'\u00A0'}
                                                            <UpdatePartButton part={{...part, items: null}} className="btn btn-sm btn-outline-secondary" onDone={onUpdate} >
                                                                <PencilFill />
                                                            </UpdatePartButton>
                                                            <DeletePartButton part={part} className="btn btn-sm btn-outline-secondary" onDone={onUpdate}>
                                                                <TrashFill /> 
                                                            </DeletePartButton>
                                                            </>
                                                        }
                                                    >
                                                        <DroppableContainer key={part.id} droppableId={part.id} isDropDisabled={partDisabled} getListStyle={getListStyleDefault}>
                                                            {part?.items.map((item, k) => (
                                                                <DragableEnvelop
                                                                    key={item.id}
                                                                    draggableId={item.id}
                                                                    index={k}
                                                                >
                                                                    <Item item={item} title={
                                                                        <>{item.name}{'\u00A0'}{'\u00A0'}
                                                                        <UpdateItemButton item={item} className="btn btn-sm btn-outline-secondary" onDone={onUpdate}>
                                                                            <PencilFill />
                                                                        </UpdateItemButton>
                                                                        <DeleteItemButton item={item} className="btn btn-sm btn-outline-secondary" onDone={onUpdate}>
                                                                            <TrashFill />
                                                                        </DeleteItemButton>
                                                                        {/* <DeleteButton className="btn btn-sm btn-outline-secondary"><TrashFill /></DeleteButton> */}
                                                                        </>
                                                                    }>
                                                                        
                                                                    </Item>
                                                                </DragableEnvelop>
                                                            ))}
                                                            {/* <DeleteButton className="btn btn-sm btn-warning"><TrashFill /> Odstranit část</DeleteButton> */}
                                                            
                                                        </DroppableContainer>
                                                    </SimpleCardCapsule>
                                                </div>
                                            ))}
                                            <HorizontalLine>
                                                <InsertPartButton 
                                                    className="btn btn-sm btn-outline-secondary" 
                                                    params={{
                                                        section_id: section.id,
                                                        name: 'Nová část',
                                                        name_en: 'New part'
                                                    }} 
                                                    onDone={onUpdate}
                                                >
                                                    <PlusLg /> Vložit část
                                                </InsertPartButton>
                                            </HorizontalLine>
                                            
                                        </div>
                                    </SimpleCardCapsule>
                                    
                                </div>
                            ))}
                            <HorizontalLine>
                                <InsertSectionButton 
                                    className="btn btn-sm btn-outline-secondary" 
                                    params={{form_id: form.id}} 
                                    confirmationDialog={true} 
                                    onDone={onUpdate}
                                >
                                    <PlusLg /> Vložit sekci
                                </InsertSectionButton>
                            </HorizontalLine>
                        </div>
                    </SimpleCardCapsule>
                </MiddleColumn>
            </div>
        </DragDropContext>
    );
};



/**
 * A lazy-loading component for displaying the content of a `requesttype` entity.
 *
 * This component is created using `createLazyComponent` and wraps `RequestTypePageContent` to provide
 * automatic data fetching for the `requesttype` entity. It uses the `RequestTypeReadAsyncAction` to fetch
 * the entity data and dynamically injects it into the wrapped component as the `requesttype` prop.
 *
 * @constant
 * @type {React.ComponentType}
 *
 * @param {Object} props - The props for the lazy-loading component.
 * @param {Object} props.requesttype - An object representing the `requesttype` entity.
 * @param {string|number} props.requesttype.id - The unique identifier of the `requesttype` entity to fetch and display.
 *
 * @returns {JSX.Element} A lazy-loading component that fetches the `requesttype` entity data and displays it
 * using `RequestTypePageContent`. The component manages loading and error states as appropriate.
 *
 * @example
 * // Example usage:
 * const requesttypeId = "12345";
 *
 * <RequestTypePageContentLazy requesttype={{ id: requesttypeId }} />
 */
const RequestTypePageContentLazy = createLazyComponent(RequestTypePageContent, "requesttype", RequestTypeReadAsyncAction)

/**
 * A page component for displaying lazy-loaded content of an requesttype entity.
 *
 * This component extracts the `id` parameter from the route using `useParams`,
 * constructs an `requesttype` object, and passes it to the `RequestTypePageContentLazy` component.
 * The `RequestTypePageContentLazy` component handles the lazy-loading and rendering of the entity's content.
 *
 * @component
 * @returns {JSX.Element} The rendered page component displaying the lazy-loaded content for the requesttype entity.
 *
 * @example
 * // Example route setup:
 * <Route path="/requesttype/:id" element={<RequestTypePage />} />
 *
 * // Navigating to "/requesttype/12345" will render the page for the requesttype entity with ID 12345.
 */
export const RequestTypePage = () => {
    const { id } = useParams()
    const requesttype = {id}
    if (id) return <RequestTypePageContentLazy requesttype={requesttype} />
}
