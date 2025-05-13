import { HashContainer } from "@hrbolek/uoisfrontend-shared"
import { ProgramCardCapsule, ProgramLargeCard } from "../Components"
import { ProgramPageNavbar } from "./ProgramPageNavbar"
import { ProgramSubjectsAttributeLazy } from "../Vectors/ProgramSubjectsAttribute"

/**
 * Renders a page layout for a single program entity, including navigation and detailed view.
 *
 * This component wraps `ProgramPageNavbar` and `ProgramLargeCard` to provide a consistent
 * interface for displaying an individual program. It also supports rendering children as 
 * nested content inside the card.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {{ id: string|number, name: string }} props.program - The program entity to display.
 * @param {React.ReactNode} [props.children] - Optional nested content rendered inside the card.
 * @returns {JSX.Element} Rendered page layout for a program.
 *
 * @example
 * const program = { id: 1, name: "Example Program" };
 * <ProgramPageContent program={program}>
 *   <p>Additional info here.</p>
 * </ProgramPageContent>
 */
export const ProgramPageContent = ({program, children, ...props}) => {
    return (<>
        <ProgramPageNavbar program={program} />
        <ProgramLargeCard program={program} {...props} >
            
            <HashContainer firstAsDefault={true}>
                <ProgramCardCapsule id="education" program={program}>
                    <ProgramSubjectsAttributeLazy id="education" program={program} {...props}/>
                </ProgramCardCapsule>
            </HashContainer>
            Program {JSON.stringify(program)}
            {children}
        </ProgramLargeCard>
    </>)
}