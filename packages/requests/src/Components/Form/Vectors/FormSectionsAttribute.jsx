import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { InfiniteScroll, LazyRender } from "@hrbolek/uoisfrontend-shared"
import { SectionMediumContent } from "../../Section/SectionMediumContent"
import { SectionPartsAttribute } from "../../Section/Vectors/SectionPartsAttribute"

/**
 * A component for displaying the `section` attribute of an form entity.
 *
 * This component checks if the `section` attribute exists on the `form` object. If `section` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `section` array and
 * displays a placeholder message and a JSON representation for each item in the `section`.
 *
 * @component
 * @param {Object} props - The props for the FormSectionAttribute component.
 * @param {Object} props.form - The object representing the form entity.
 * @param {Array} [props.form.section] - An array of section items associated with the form entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `section` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const formEntity = { 
 *   section: [
 *     { id: 1, name: "Section Item 1" }, 
 *     { id: 2, name: "Section Item 2" }
 *   ] 
 * };
 *
 * <FormSectionAttribute form={formEntity} />
 */
export const FormSectionAttributeView = ({form}) => {
    const sections = ([...form?.sections || []]).sort((a,b) => a?.order - b?.order)
    if (typeof sections === 'undefined') return null
    const [index, setIndex] = useState(0)
    const sectionToRender = sections[index]
    return (
        <>  

            <div className='btn-group' role='group' aria-label="Sekce formuláře">
            {sections.map(
                (section, _index) => 
                    <button key={section.id}
                        type={"button"} 
                        onClick={() => setIndex(_index)}
                        className={"btn btn-lg " + (index === _index? "btn-primary": "btn-outline-success")} 
                        >
                            {section?.name}
                    </button>
            )}
            </div>
            <LazyRender>
                <SectionPartsAttribute section={sectionToRender} />
            </LazyRender>
        </>
    )
}


const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    // padding: grid,
    // margin: `0 0 ${grid}px 0`, // Add space below each item
    background: isDragging ? "lightgreen" : "white", // Highlight dragging item
    // border: isDragging ? "1px solid lightgrey": "none", // Add a border for clarity
    border: "none", // Add a border for clarity
    borderRadius: "4px", // Rounded corners
    // boxShadow: isDragging ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none", // Subtle shadow on drag
    ...draggableStyle, // Apply Draggable styles
});

const getListStyle = (snapshot) => ({
    display: "flex",
    // flexDirection: snapshot.isDraggingOver ?"column":"row", // Stack items horizontaly
    flexDirection: "row", // Stack items horizontaly
    gap: `${grid}px`, // Add consistent spacing
    background: snapshot.isDraggingOver ? "lightblue" : "transparent",
    // padding: `${grid}px`,
    borderRadius: "4px",
    // minHeight: "100px", // Ensure droppable area has a minimum height
    transition: "background-color 0.3s ease",
});


const DragableEnvelopContent = ({provided, snapshot, children, getItemStyle=getItemStyle}) => {
    return (
        <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style,
            )}
        >
            {children}
        </div>                
    )
}

const DragableEnvelop = ({draggableId, index, children}) => {
    return (
        <Draggable draggableId={draggableId} index={index}>
            {(provided, snapshot) => 
                <DragableEnvelopContent provided={provided} snapshot={snapshot}>
                    {children}
                </DragableEnvelopContent>
            }
        </Draggable>
    )
}

const DroppableContainerContent = ({provided, snapshot, children, getListStyle=getListStyle}) => {
    console.log("DroppableContainer.Content", snapshot)

    return (
        <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot)}
        >
            {children}
            {snapshot.isUsingPlaceholder? provided.placeholder: ""}
        </div>
    )
}

const DroppableContainer = ({droppableId, children, direction="horizontal"}) => { 
    return (
        <Droppable key={droppableId} droppableId={droppableId} direction={direction}>
            {(provided, snapshot) => <DroppableContainerContent provided={provided} snapshot={snapshot}>
                    {children}
                </DroppableContainerContent>
            }
        </Droppable>
    )
}

export const FormSectionAttribute = ({ form }) => {
    // Sort and initialize sections
    const [sections, setSections] = useState(
        [...(form?.sections || [])].sort((a, b) => a?.order - b?.order)
    );
    const [index, setIndex] = useState(0);

    const onDragEnd = (result) => {       
        if (!result.destination) return;

        const reorderedSections = Array.from(sections);
        const [movedSection] = reorderedSections.splice(result.source.index, 1);
        reorderedSections.splice(result.destination.index, 0, movedSection);

        // Optionally update the "order" field if it's needed
        // reorderedSections.forEach((section, idx) => (section.order = idx + 1));

        setSections(reorderedSections);

        // Adjust active index if the dragged item is the currently selected section
        if (index === result.source.index) {
            setIndex(result.destination.index);
        }
    }  

    const sectionToRender = sections[index];

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <DroppableContainer droppableId="library">
                        {sections.map((section, _index) => (
                            <DragableEnvelop key={section.id} index={_index} draggableId={section.id} >
                                <div
                                    className={`btn ${_index === index ? "btn-primary" : "btn-outline-secondary"}`}
                                    onClick={() => setIndex(_index)}
                                    style={{
                                        padding: "8px 16px",
                                        cursor: "pointer",
                                        userSelect: "none",
                                        textAlign: "center",
                                        minWidth: "100px",
                                    }}
                                >
                                    {section.name}
                                </div>
                            </DragableEnvelop>
                        ))}
                </DroppableContainer>
            </DragDropContext>
            {/* Render the currently selected section */}
            <LazyRender>
                <SectionPartsAttribute section={sectionToRender} />
            </LazyRender>
        </>
    );
};


const SectionAttributeQuery = `
query FormQueryRead($id: id, $where: SectionInputFilter, $skip: Int, $limit: Int) {
    result: formById(id: $id) {
        __typename
        id
        section(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
        }
    }
}
`

const SectionAttributeAsyncAction = createAsyncGraphQLAction(
    SectionAttributeQuery,
    processVectorAttributeFromGraphQLResult("section")
)

export const FormSectionAttributeInifite = ({form}) => { 
    const {section} = form

    return (
        <InfiniteScroll 
            Visualiser={'SectionMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={SectionAttributeAsyncAction}
        />
    )
}