import { useMemo, useState } from 'react'
import Row from 'react-bootstrap/Row'
import { createLazyComponent, ErrorHandler, LeftColumn, LoadingSpinner, MiddleColumn, SimpleCardCapsule } from "@hrbolek/uoisfrontend-shared"
import { useParams } from "react-router"
import { RequestPageNavbar } from "./RequestPageNavbar"
import { RequestTypeReadAsyncAction } from './Queries/RequestTypeReadAsyncAction'
import { FormCreateButtonDialog } from '../Components/Form/FormCreateButtonDialog'
import { FormSectionAttribute, FormSectionAttributeView } from '../Components/Form/Vectors/FormSectionsAttribute'
import { useAsyncAction } from '@hrbolek/uoisfrontend-gql-shared'
import { RequestTypeInsertAsyncAction } from './Queries/RequestTypeInsertMutation'
import { RequestTypeUpdateAsyncAction } from './Queries/RequestTypeUpdateAsyncAction'
import { HorizontalLine } from '../Components/Part'
import { Item } from '../Components/Item/Item'
import { ItemIndex } from '../Components/Item/Visualisers'
import { DragableEnvelop, DragDropContext, DroppableContainer } from '../Components/DragAndDrop/dad'

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
    const onCreateForm = (form) => {
        updateRequestType({...requesttype, template_form_id: form.id})
    }
    return (
        <>
            <RequestPageNavbar />
            <Row>
                {/* <LeftColumn></LeftColumn> */}
                <MiddleColumn>
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
                    {templateFormId && <FormDesigner form={templateForm} />}
                    <br />
                    {!groupId && <>
                        "Není nastavena skupina"
                    </>}
                    {loading && <LoadingSpinner text='Ukládám' />}
                    {error && <ErrorHandler errors={error} />}
                </MiddleColumn>
            </Row>
        </>
    )
}

export const FormDesigner = ({ form }) => {
    const [enabledDroppableIds, setEnabledDroppableIds] = useState([]);
    const [{formDisabled, sectionDisabled, partDisabled}, setDropAllowed] = useState({formDisabled: true, sectionDisabled: true, partDisabled: true});

    const index = useMemo(() => {
        const result = { [form.id]: form };
        form?.sections.forEach((section) => {
            result[section.id] = { ...section, form };
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

        // Example: Enable droppable only for specific targets
        const sourceObject = index[source.droppableId]
        const map = {
            "ItemGQLModel": {formDisabled: true, sectionDisabled: true, partDisabled: false},
            "PartGQLModel": {formDisabled: true, sectionDisabled: false, partDisabled: true},
            "SectionGQLModel": {formDisabled: false, sectionDisabled: true, partDisabled: true}
        }
        const allowedSetup = map[sourceObject.__typename]
        console.log("onDragStart", start, allowedSetup);
        setDropAllowed(allowedSetup)
    };

    const onDragUpdate = (update) => {
        console.log("onDragUpdate", update);
        // const { destination } = update;

        // if (destination && destination.droppableId === "restricted") {
        //     setDropAllowed(false);
        // } else {
        //     setDropAllowed(true);
        // }
    };

    const onDragEnd = (result) => {
        console.log("onDragEnd", result);
        if (!result.destination) return;

        const { source, destination } = result;
        const sourceParentId = source.droppableId;
        const destinationParentId = destination.droppableId;

        const map = {
            "FormGQLModel": "sections",
            "PartGQLModel": "items",
            "SectionGQLModel": "parts"
        }

        if (sourceParentId === destinationParentId) {
            // Same parent: reorder
            const parent = index[sourceParentId];
            console.log(`moving ${parent.__typename}(${sourceParentId}) [${source.index}] => [${destination.index}]`)
            
            const itemsname = map[parent.__typename]
            const parentitems = parent[itemsname]
            const items = [...parentitems];
            const [movedItem] = items.splice(source.index, 1);
            items.splice(destination.index, 0, movedItem);
            parent[itemsname] = items;
        } else {
            // Move between parents
            const sourceParent = index[sourceParentId];
            const itemsname = map[sourceParent.__typename]
            const destinationParent = index[destinationParentId];
            console.log(`moving ${sourceParent.__typename}(${sourceParentId})[${source.index}] => ${destinationParent.__typename}(${destinationParentId})[${destination.index}]`)
            const sourceParentItems = sourceParent[itemsname]
            const destinationParentItems = destinationParent[itemsname]
            const [movedItem] = sourceParentItems.splice(source.index, 1);
            destinationParentItems.splice(destination.index, 0, movedItem);
        }
    };

    return (
        <DragDropContext
            onDragStart={onDragStart}
            onDragUpdate={onDragUpdate}
            onDragEnd={onDragEnd}
        >
            <div className="row">
                <div className="col">
                    <DroppableContainer droppableId="library" isDropDisabled={true}>
                        <SimpleCardCapsule title="Library">
                            <p>Drag items here</p>
                        </SimpleCardCapsule>
                    </DroppableContainer>
                </div>
                <div className="col">
                    <DroppableContainer droppableId={form.id} isDropDisabled={formDisabled}>
                        <SimpleCardCapsule title={form.name}>
                            {form?.sections.map((section, i) => (
                                <DroppableContainer key={section.id} droppableId={section.id} isDropDisabled={sectionDisabled}>
                                    <DragableEnvelop draggableId={section.id} index={i}>
                                        <SimpleCardCapsule title={section.name}>
                                            {section?.parts.map((part, j) => (
                                                <DroppableContainer key={part.id} droppableId={part.id} isDropDisabled={partDisabled}>
                                                    <DragableEnvelop draggableId={part.id} index={j}>
                                                    <SimpleCardCapsule title={part.name}>
                                                            {part?.items.map((item, k) => (
                                                                <DragableEnvelop
                                                                    key={item.id}
                                                                    draggableId={item.id}
                                                                    index={k}
                                                                >
                                                                    <SimpleCardCapsule title={item.name}>
                                                                        <p>Item Content</p>
                                                                    </SimpleCardCapsule>
                                                                </DragableEnvelop>
                                                            ))}
                                                    </SimpleCardCapsule>
                                                </DragableEnvelop>
                                            ))}
                                        </SimpleCardCapsule>
                                    </DragableEnvelop>
                                </DroppableContainer>
                            ))}
                        </SimpleCardCapsule>
                    </DroppableContainer>
                </div>
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
