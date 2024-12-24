import { createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { InfiniteScroll } from "@hrbolek/uoisfrontend-shared"
import { PartItemsAttribute } from "../../Part/Vectors/PartItemsAttribute"
import { DragDropContext, DragableEnvelop, DroppableContainer } from '../../DragAndDrop/dad';
import { PartHeaderLine } from "../../Part";


  
/**
 * A component for displaying the `parts` attribute of an section entity.
 *
 * This component checks if the `parts` attribute exists on the `section` object. If `parts` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `parts` array and
 * displays a placeholder message and a JSON representation for each item in the `parts`.
 *
 * @component
 * @param {Object} props - The props for the SectionPartsAttribute component.
 * @param {Object} props.section - The object representing the section entity.
 * @param {Array} [props.section.parts] - An array of parts items associated with the section entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `parts` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const sectionEntity = { 
 *   parts: [
 *     { id: 1, name: "Part Item 1" }, 
 *     { id: 2, name: "Part Item 2" }
 *   ] 
 * };
 *
 * <SectionPartsAttribute section={sectionEntity} />
 */
export const SectionPartsAttributeView = ({section}) => {
    const parts = ([...section?.parts || []]).sort((a,b) => a?.order - b?.order)
    if (typeof parts === 'undefined') return null
    return (
        <>
            {parts.map(
                part => <div key={part.id}>
                    <PartHeaderLine type="text" text={part?.name || "Sekce"} />
                    <PartItemsAttribute part={part} />
                </div>
            )}
        </>
    )
}


const grid = 8
const getListStyleDefault = (provided, snapshot) => ({
    // display: "flex",
    // flexDirection: snapshot.isDraggingOver ?"column":"row", // Stack items horizontaly
    // flexDirection: "row", // Stack items horizontaly
    gap: `${grid}px`, // Add consistent spacing
    background: snapshot.isDraggingOver ? "lightblue" : "transparent",
    // padding: `${grid}px`,
    borderRadius: "4px",
    // minHeight: "100px", // Ensure droppable area has a minimum height
    transition: "background-color 0.3s ease",
});


export const SectionPartsAttribute = ({section}) => {
    const parts = ([...section?.parts || []]).sort((a,b) => a?.order - b?.order)
    if (typeof parts === 'undefined') return null

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const reorderedParts = Array.from(parts);
        const [movedPart] = reorderedParts.splice(result.source.index, 1);
        reorderedParts.splice(result.destination.index, 0, movedPart);

        // setParts(reorderedParts);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <DroppableContainer droppableId="parts" direction="vertical" getListStyle={getListStyleDefault}>
                {parts.map((part, index) => (
                    <DragableEnvelop key={part.id} index={index} draggableId={part.id}>
                        <div style={{ padding: "8px", borderRadius: "4px" }}>
                            <PartHeaderLine part={part} />
                            <PartItemsAttribute part={part} />
                        </div>
                    </DragableEnvelop>
                ))}
            </DroppableContainer>
        </DragDropContext>
    );
}




const PartsAttributeQuery = `
query SectionQueryRead($id: id, $where: PartInputFilter, $skip: Int, $limit: Int) {
    result: sectionById(id: $id) {
        __typename
        id
        parts(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
        }
    }
}
`

const PartsAttributeAsyncAction = createAsyncGraphQLAction(
    PartsAttributeQuery,
    processVectorAttributeFromGraphQLResult("parts")
)

export const SectionPartsAttributeInifite = ({section}) => { 
    const {parts} = section

    return (
        <InfiniteScroll 
            Visualiser={'PartMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={PartsAttributeAsyncAction}
        />
    )
}