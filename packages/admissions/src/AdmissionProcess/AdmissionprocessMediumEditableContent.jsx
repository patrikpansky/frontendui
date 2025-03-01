import { Input } from "@hrbolek/uoisfrontend-shared"

/**
 * A component that displays medium-level content for an admissionprocess entity.
 *
 * This component renders a label "AdmissionprocessMediumContent" followed by a serialized representation of the `admissionprocess` object
 * and any additional child content. It is designed to handle and display information about an admissionprocess entity object.
 *
 * @component
 * @param {Object} props - The properties for the AdmissionprocessMediumContent component.
 * @param {Object} props.admissionprocess - The object representing the admissionprocess entity.
 * @param {string|number} props.admissionprocess.id - The unique identifier for the admissionprocess entity.
 * @param {string} props.admissionprocess.name - The name or label of the admissionprocess entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render after the serialized `admissionprocess` object.
 *
 * @returns {JSX.Element} A JSX element displaying the entity's details and optional content.
 *
 * @example
 * // Example usage:
 * const admissionprocessEntity = { id: 123, name: "Sample Entity" };
 * 
 * <AdmissionprocessMediumContent admissionprocess={admissionprocessEntity}>
 *   <p>Additional information about the entity.</p>
 * </AdmissionprocessMediumContent>
 */
export const AdmissionprocessMediumEditableContent = ({admissionprocess, onChange=(e)=>null, onBlur=(e)=>null, children}) => {
    return (
        <>           
            <Input id={"name"} label={"Název"} className="form-control" defaultValue={admissionprocess?.name|| "Název"} onChange={onChange} onBlur={onBlur} />
            <Input id={"name_en"} label={"Anglický název"} className="form-control" defaultValue={admissionprocess?.name_en|| "Anglický název"} onChange={onChange} onBlur={onBlur} />
            {children}
        </>
    )
}
