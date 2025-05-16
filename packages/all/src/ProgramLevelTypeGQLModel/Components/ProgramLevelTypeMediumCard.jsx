import { PersonFill } from "react-bootstrap-icons"
import { ProgramLevelTypeLink } from "./ProgramLevelTypeLink"
import { ProgramLevelTypeCardCapsule } from "./ProgramLevelTypeCardCapsule"
import { ProgramLevelTypeMediumContent } from "./ProgramLevelTypeMediumContent"

/**
 * A card component that displays detailed content for an programleveltype entity.
 *
 * This component combines `ProgramLevelTypeCardCapsule` and `ProgramLevelTypeMediumContent` to create a card layout
 * with a title and medium-level content. The title includes a `PersonFill` icon and a link to
 * the programleveltype entity's details, while the body displays serialized details of the entity along
 * with any additional children passed to the component.
 *
 * @component
 * @param {Object} props - The properties for the ProgramLevelTypeMediumCard component.
 * @param {Object} props.programleveltype - The object representing the programleveltype entity.
 * @param {string|number} props.programleveltype.id - The unique identifier for the programleveltype entity.
 * @param {string} props.programleveltype.name - The name or label of the programleveltype entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render inside the card body.
 *
 * @returns {JSX.Element} A JSX element combining a card with a title and detailed content.
 *
 * @example
 * // Example usage:
 * const programleveltypeEntity = { id: 123, name: "Sample Entity" };
 * 
 * <ProgramLevelTypeMediumCard programleveltype={programleveltypeEntity}>
 *   <p>Additional details or actions for the entity.</p>
 * </ProgramLevelTypeMediumCard>
 */
export const ProgramLevelTypeMediumCard = ({programleveltype, children}) => {
    return (
        <ProgramLevelTypeCardCapsule title={<><PersonFill /> <ProgramLevelTypeLink programleveltype={programleveltype} /></>}>
            <ProgramLevelTypeMediumContent programleveltype={programleveltype}>
                {children}
            </ProgramLevelTypeMediumContent>
        </ProgramLevelTypeCardCapsule>
    )
}
