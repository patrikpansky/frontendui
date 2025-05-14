import { Input } from "@hrbolek/uoisfrontend-shared"

/**
 * A component that displays medium-level content for an evalutaion entity.
 *
 * This component renders a label "EvalutaionMediumContent" followed by a serialized representation of the `evalutaion` object
 * and any additional child content. It is designed to handle and display information about an evalutaion entity object.
 *
 * @component
 * @param {Object} props - The properties for the EvalutaionMediumContent component.
 * @param {Object} props.evalutaion - The object representing the evalutaion entity.
 * @param {string|number} props.evalutaion.id - The unique identifier for the evalutaion entity.
 * @param {string} props.evalutaion.name - The name or label of the evalutaion entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render after the serialized `evalutaion` object.
 *
 * @returns {JSX.Element} A JSX element displaying the entity's details and optional content.
 *
 * @example
 * // Example usage:
 * const evalutaionEntity = { id: 123, name: "Sample Entity" };
 * 
 * <EvalutaionMediumContent evalutaion={evalutaionEntity}>
 *   <p>Additional information about the entity.</p>
 * </EvalutaionMediumContent>
 */
export const EvalutaionMediumEditableContent = ({evalutaion, onChange=(e)=>null, onBlur=(e)=>null, children}) => {
    return (
        <>           
            <Input id={"name"} label={"Název"} className="form-control" defaultValue={evalutaion?.name|| "Název"} onChange={onChange} onBlur={onBlur} />
            <Input id={"name_en"} label={"Anglický název"} className="form-control" defaultValue={evalutaion?.name_en|| "Anglický název"} onChange={onChange} onBlur={onBlur} />
            {children}
        </>
    )
}
