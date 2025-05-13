import { Input } from "@hrbolek/uoisfrontend-shared"

/**
 * A component that displays medium-level content for an subject entity.
 *
 * This component renders a label "SubjectMediumContent" followed by a serialized representation of the `subject` object
 * and any additional child content. It is designed to handle and display information about an subject entity object.
 *
 * @component
 * @param {Object} props - The properties for the SubjectMediumContent component.
 * @param {Object} props.subject - The object representing the subject entity.
 * @param {string|number} props.subject.id - The unique identifier for the subject entity.
 * @param {string} props.subject.name - The name or label of the subject entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render after the serialized `subject` object.
 *
 * @returns {JSX.Element} A JSX element displaying the entity's details and optional content.
 *
 * @example
 * // Example usage:
 * const subjectEntity = { id: 123, name: "Sample Entity" };
 * 
 * <SubjectMediumContent subject={subjectEntity}>
 *   <p>Additional information about the entity.</p>
 * </SubjectMediumContent>
 */
export const SubjectMediumEditableContent = ({subject, onChange=(e)=>null, onBlur=(e)=>null, children}) => {
    return (
        <>           
            <Input id={"name"} label={"Název"} className="form-control" defaultValue={subject?.name|| "Název"} onChange={onChange} onBlur={onBlur} />
            <Input id={"name_en"} label={"Anglický název"} className="form-control" defaultValue={subject?.name_en|| "Anglický název"} onChange={onChange} onBlur={onBlur} />
            {children}
        </>
    )
}
