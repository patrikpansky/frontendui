// field types
// targeting to FormItemType
// going from Formitemcategory
import { FormitemtypesTable } from "../Formitemtype/FormitemtypesTable";
import { FormitemtypeLoadMoreButton } from "../Formitemtype/FormitemtypeLoadMoreButton";

export const FormitemcategoryTypesTableCard = ({ formitemcategory, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <FormitemtypesTable formitemtype={ formitemcategory?.types } {...props}>
            <FormitemtypeLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </FormitemtypesTable>
    )
}