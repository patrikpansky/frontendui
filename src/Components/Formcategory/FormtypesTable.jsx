// field formtypes
// targeting to FormType
// going from Formcategory
import { FormtypesTable } from "../Formtype/FormtypesTable";
import { FormtypeLoadMoreButton } from "../Formtype/FormtypeLoadMoreButton";

export const FormcategoryFormtypesTableCard = ({ formcategory, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <FormtypesTable formtype={ formcategory?.formtypes } {...props}>
            <FormtypeLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </FormtypesTable>
    )
}