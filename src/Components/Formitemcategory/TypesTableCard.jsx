// field types
// targeting to FormItemType
// going from Formitemcategory
import { FormitemcategoryCardCapsule } from "./FormitemcategoryCardCapsule";
import { FormitemtypesTable } from "../Formitemtype/FormitemtypesTable";
export const FormitemcategoryTypesTableCard = ({ formitemcategory , ...props}) => {
    return (
        <FormitemcategoryCardCapsule formitemcategory={ formitemcategory } >
            <FormitemtypesTable formitemtypes={ formitemcategory?.types } {...props}>
            </FormitemtypesTable>
        </FormitemcategoryCardCapsule>
    )
}