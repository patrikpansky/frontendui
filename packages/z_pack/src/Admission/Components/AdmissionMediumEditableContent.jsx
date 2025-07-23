import { Input, useReadOnly } from "@hrbolek/uoisfrontend-shared"

/**
 * A component that displays medium-level content for an admission entity.
 *
 * This component renders a label "AdmissionMediumContent" followed by a serialized representation of the `admission` object
 * and any additional child content. It is designed to handle and display information about an admission entity object.
 *
 * @component
 * @param {Object} props - The properties for the AdmissionMediumContent component.
 * @param {Object} props.admission - The object representing the admission entity.
 * @param {string|number} props.admission.id - The unique identifier for the admission entity.
 * @param {string} props.admission.name - The name or label of the admission entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render after the serialized `admission` object.
 *
 * @returns {JSX.Element} A JSX element displaying the entity's details and optional content.
 *
 * @example
 * // Example usage:
 * const admissionEntity = { id: 123, name: "Sample Entity" };
 * 
 * <AdmissionMediumContent admission={admissionEntity}>
 *   <p>Additional information about the entity.</p>
 * </AdmissionMediumContent>
 */
export const AdmissionMediumEditableContent = ({ admission, onChange = (e) => null, onBlur = (e) => null, children, readOnly }) => {
    const { isReadOnly } = useReadOnly();
    const effectiveReadOnly = readOnly || isReadOnly;
    
    return (
        <>
            <Input 
                id={"name"} 
                label={"Název"} 
                className="form-control" 
                defaultValue={admission?.name || "Název"} 
                onChange={effectiveReadOnly ? undefined : onChange} 
                onBlur={effectiveReadOnly ? undefined : onBlur}
                disabled={effectiveReadOnly}
                readOnly={effectiveReadOnly}
            />
            <Input 
                id={"studentEntryDate"} 
                label={"Datum vstupu studenta"} 
                className="form-control" 
                defaultValue={new Date(admission?.studentEntryDate).toLocaleDateString() || new Date().toLocaleDateString()} 
                onChange={effectiveReadOnly ? undefined : onChange} 
                onBlur={effectiveReadOnly ? undefined : onBlur}
                disabled={effectiveReadOnly}
                readOnly={effectiveReadOnly}
            />
            <Input 
                id={"examStartDate"} 
                label={"První zkouška"} 
                className="form-control" 
                defaultValue={new Date(admission?.examStartDate).toLocaleDateString() || new Date().toLocaleDateString()} 
                onChange={effectiveReadOnly ? undefined : onChange} 
                onBlur={effectiveReadOnly ? undefined : onBlur}
                disabled={effectiveReadOnly}
                readOnly={effectiveReadOnly}
            />
            <Input 
                id={"examLastDate"} 
                label={"Poslední zkouška"} 
                className="form-control" 
                defaultValue={new Date(admission?.examLastDate).toLocaleDateString() || new Date().toLocaleDateString()} 
                onChange={effectiveReadOnly ? undefined : onChange} 
                onBlur={effectiveReadOnly ? undefined : onBlur}
                disabled={effectiveReadOnly}
                readOnly={effectiveReadOnly}
            />
            <Input 
                id={"paymentDate"} 
                label={"Datum do kdy lze provést platbu"} 
                className="form-control" 
                defaultValue={new Date(admission?.paymentDate).toLocaleDateString() || new Date().toLocaleDateString()} 
                onChange={effectiveReadOnly ? undefined : onChange} 
                onBlur={effectiveReadOnly ? undefined : onBlur}
                disabled={effectiveReadOnly}
                readOnly={effectiveReadOnly}
            />
            <Input 
                id={"requestConditionExtendDate"} 
                label={"Datum do kdy lze podat žádost o prodloužení podmínek"} 
                className="form-control" 
                defaultValue={new Date(admission?.requestConditionExtendDate).toLocaleDateString() || new Date().toLocaleDateString()} 
                onChange={effectiveReadOnly ? undefined : onChange} 
                onBlur={effectiveReadOnly ? undefined : onBlur}
                disabled={effectiveReadOnly}
                readOnly={effectiveReadOnly}
            />
            <Input 
                id={"requestExtraConditionsDate"} 
                label={"Datum do kdy lze podat žádost o dodatečné podmínky"} 
                className="form-control" 
                defaultValue={new Date(admission?.requestExtraConditionsDate).toLocaleDateString() || new Date().toLocaleDateString()} 
                onChange={effectiveReadOnly ? undefined : onChange} 
                onBlur={effectiveReadOnly ? undefined : onBlur}
                disabled={effectiveReadOnly}
                readOnly={effectiveReadOnly}
            />

            {children}
        </>
    )
}
