import { Input, useReadOnly } from "@hrbolek/uoisfrontend-shared"

// Utility function to get default date for 2025 with proper month handling (months are 0-indexed)
const getDefaultDate = (year = 2025, month = 0, day = 1) => {
    return new Date(year, month, day).toISOString().slice(0, 10);
};

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
                type="date"
                id={"studentEntryDate"} 
                label={"Datum vstupu studenta"} 
                className="form-control" 
                defaultValue={admission?.studentEntryDate?.slice(0, 10) || getDefaultDate(2025, 8, 1)} 
                onChange={effectiveReadOnly ? undefined : onChange} 
                onBlur={effectiveReadOnly ? undefined : onBlur}
                disabled={effectiveReadOnly}
                readOnly={effectiveReadOnly}
            />
            <Input 
                type="date"
                id={"examStartDate"} 
                label={"První zkouška"} 
                className="form-control" 
                defaultValue={admission?.examStartDate?.slice(0, 10) || getDefaultDate(2025, 5, 1)} 
                onChange={effectiveReadOnly ? undefined : onChange} 
                onBlur={effectiveReadOnly ? undefined : onBlur}
                disabled={effectiveReadOnly}
                readOnly={effectiveReadOnly}
            />
            <Input 
                type="date"
                id={"examLastDate"} 
                label={"Poslední zkouška"} 
                className="form-control" 
                defaultValue={admission?.examLastDate?.slice(0, 10) || getDefaultDate(2025, 6, 31)} 
                onChange={effectiveReadOnly ? undefined : onChange} 
                onBlur={effectiveReadOnly ? undefined : onBlur}
                disabled={effectiveReadOnly}
                readOnly={effectiveReadOnly}
            />
            <Input 
                type="date"
                id={"paymentDate"} 
                label={"Datum do kdy lze provést platbu"} 
                className="form-control" 
                defaultValue={admission?.paymentDate?.slice(0, 10) || getDefaultDate(2025, 7, 31)} 
                onChange={effectiveReadOnly ? undefined : onChange} 
                onBlur={effectiveReadOnly ? undefined : onBlur}
                disabled={effectiveReadOnly}
                readOnly={effectiveReadOnly}
            />
            <Input 
                type="date"
                id={"requestConditionExtendDate"} 
                label={"Datum do kdy lze podat žádost o prodloužení podmínek"} 
                className="form-control" 
                defaultValue={admission?.requestConditionExtendDate?.slice(0, 10) || getDefaultDate(2025, 7, 31)} 
                onChange={effectiveReadOnly ? undefined : onChange} 
                onBlur={effectiveReadOnly ? undefined : onBlur}
                disabled={effectiveReadOnly}
                readOnly={effectiveReadOnly}
            />
            <Input 
                type="date"
                id={"requestExtraConditionsDate"} 
                label={"Datum do kdy lze podat žádost o dodatečné podmínky"} 
                className="form-control" 
                defaultValue={admission?.requestExtraConditionsDate?.slice(0, 10) || getDefaultDate(2025, 7, 31)} 
                onChange={effectiveReadOnly ? undefined : onChange} 
                onBlur={effectiveReadOnly ? undefined : onBlur}
                disabled={effectiveReadOnly}
                readOnly={effectiveReadOnly}
            />

            {children}
        </>
    )
}
