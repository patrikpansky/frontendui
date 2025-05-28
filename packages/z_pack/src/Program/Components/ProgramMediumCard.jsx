import { PersonFill } from "react-bootstrap-icons"
import { ProgramLink } from "./ProgramLink"
import { ProgramCardCapsule } from "./ProgramCardCapsule"
import { ProgramMediumContent } from "./ProgramMediumContent"

/**
 * A card component that displays detailed content for an program entity.
 *
 * This component combines `ProgramCardCapsule` and `ProgramMediumContent` to create a card layout
 * with a customizable title and content. The title can include a custom icon and text,
 * while the body can display any content passed as children.
 *
 * @component
 * @param {Object} props - The properties for the ProgramMediumCard component.
 * @param {Object} props.program - The object representing the program entity.
 * @param {string|number} props.program.id - The unique identifier for the program entity.
 * @param {string} props.program.name - The name or label of the program entity.
 * @param {React.ReactNode} [props.icon] - Custom icon component to display in the title
 * @param {string} [props.title] - Custom title text to display
 * @param {React.ReactNode} [props.children=null] - Content to render inside the card body.
 *
 * @returns {JSX.Element} A JSX element combining a card with a title and detailed content.
 *
 * @example
 * // Example usage with custom title and icon:
 * import { BookFill } from "react-bootstrap-icons"
 * 
 * <ProgramMediumCard 
 *   program={programEntity}
 *   icon={<BookFill />}
 *   title="Study Materials"
 * >
 *   <p>Course materials and resources</p>
 * </ProgramMediumCard>
 */
export const ProgramMediumCard = ({program, icon = <PersonFill />, title, children}) => {
    return (
        <ProgramCardCapsule title={<>{icon} {title || <ProgramLink program={program} />}</>}>
            <ProgramMediumContent program={program}>
                {children}
            </ProgramMediumContent>
        </ProgramCardCapsule>
    )
}
