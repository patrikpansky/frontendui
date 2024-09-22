// field formtypes
// targeting to FormType
// going from Formcategory
import { FormcategoryCardCapsule } from "./FormcategoryCardCapsule";
import { FormtypesTable } from "../Formtype/FormtypesTable";
export const FormcategoryFormtypesTableCard = ({ formcategory , ...props}) => {
    return (
        <FormcategoryCardCapsule formcategory={ formcategory } >
            <FormtypesTable formtypes={ formcategory?.formtypes } {...props}>
            </FormtypesTable>
        </FormcategoryCardCapsule>
    )
}