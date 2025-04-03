import { Input } from "@hrbolek/uoisfrontend-shared"

/**
 * A component that displays medium-level content for an applicant entity.
 *
 * This component renders a label "ApplicantMediumContent" followed by a serialized representation of the `applicant` object
 * and any additional child content. It is designed to handle and display information about an applicant entity object.
 *
 * @component
 * @param {Object} props - The properties for the ApplicantMediumContent component.
 * @param {Object} props.applicant - The object representing the applicant entity.
 * @param {string|number} props.applicant.id - The unique identifier for the applicant entity.
 * @param {string} props.applicant.name - The name or label of the applicant entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render after the serialized `applicant` object.
 *
 * @returns {JSX.Element} A JSX element displaying the entity's details and optional content.
 *
 * @example
 * // Example usage:
 * const applicantEntity = { id: 123, name: "Sample Entity" };
 * 
 * <ApplicantMediumContent applicant={applicantEntity}>
 *   <p>Additional information about the entity.</p>
 * </ApplicantMediumContent>
 */
export const ApplicantMediumEditableContent = ({applicant, onChange=(e)=>null, onBlur=(e)=>null, children}) => {
    return (
        <>           
            <Input id={"name"} label={"Název"} className="form-control" defaultValue={applicant?.name|| "Název"} onChange={onChange} onBlur={onBlur} />
            <Input id={"name_en"} label={"Anglický název"} className="form-control" defaultValue={applicant?.name_en|| "Anglický název"} onChange={onChange} onBlur={onBlur} />
            {children}
        </>
    )
}
