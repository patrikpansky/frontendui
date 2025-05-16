import { HashContainer } from "@hrbolek/uoisfrontend-shared"
import { ProgramCardCapsule, ProgramLargeCard, ProgramMediumEditableContent } from "../Components"
import { ProgramPageNavbar } from "./ProgramPageNavbar"
import { ProgramSubjectsAttributeLazy } from "../Vectors/ProgramSubjectsAttribute"
import { ProgramStudentsAttributeLazy } from "../Vectors/ProgramStudentsAttribute"
import { ProgramAdmissionsAttributeLazy } from "../Vectors/ProgramAdmissionsAttribute"
import { AdmissionButton } from "../../AdmissionGQLModel"

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
    const { onBlur, onChange } = props
    return (<>
        <ProgramPageNavbar program={program} />
        <ProgramLargeCard program={program} {...props} >
            
            {/* <HashContainer firstAsDefault={true}>
                <ProgramCardCapsule id="education" program={program}>
                    <ProgramSubjectsAttributeLazy id="education" program={program} {...props}/>
                </ProgramCardCapsule>
            </HashContainer> */}
            {/* <ProgramCardCapsule program={program}>
                <ProgramMediumEditableContent program={program} {...props} />
            </ProgramCardCapsule>
            <ProgramCardCapsule program={program} title="Předměty">
                <ProgramSubjectsAttributeLazy program={program} />    
            </ProgramCardCapsule>
            <ProgramCardCapsule program={program} title="Studenti">
                <ProgramStudentsAttributeLazy program={program} />    
            </ProgramCardCapsule> */}
            <ProgramCardCapsule program={program} title="Přijímací řízení">
                <ProgramAdmissionsAttributeLazy program={program} />
                <AdmissionButton operation="C" className="btn btn-success" onDone={onBlur} admission={{programId: program.id}}>Vytvořit přijímací řízení</AdmissionButton>
            </ProgramCardCapsule>
            
            
            
            {/* Program {JSON.stringify(program)} */}
            {children}
        </ProgramLargeCard>
    </>)
}