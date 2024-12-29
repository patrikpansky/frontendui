import { useState, useMemo } from 'react'
import { ItemInsertAsyncAction } from "../Item/Queries/ItemInsertAsyncAction"
import { DragDropContext } from '@hello-pangea/dnd'
import { LeftColumn, MiddleColumn, SimpleCardCapsule } from '@hrbolek/uoisfrontend-shared'
import { DragableEnvelop, DroppableContainer } from '../DragAndDrop/dad'
import { PencilFill, PlusLg, TrashFill } from 'react-bootstrap-icons'
import { UpdateSectionButton } from '../Section/UpdateSectionButton'
import { DeleteSectionButton } from '../Section/DeleteSectionButton'
import { UpdatePartButton } from '../Part/UpdatePartButton'
import { DeletePartButton } from '../Part/DeletePartButton'
import { Item } from '../Item/Item'
import { UpdateItemButton } from '../Item/UpdateItemButton'
import { DeleteItemButton } from '../Item/DeleteItemButton'
import { HorizontalLine } from '../Part'
import { InsertPartButton } from '../Part/InsertPartButton'
import { InsertSectionButton } from '../Section/InsertSectionButton'

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
                order: destination.index,
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
                                                        name_en: 'New part',
                                                        order: (section?.parts || []).length + 1
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
                                    params={{
                                        form_id: form.id,
                                        order: (formCopy?.sections || []).length + 1
                                    }} 
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

