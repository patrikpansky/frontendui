// field forms
// targeting to Form
// going from Formtype
import { FormtypeCardCapsule } from "./FormtypeCardCapsule";
import { FormsCards } from "../Form/FormsCards";
import { FormtypeFormsLoadMoreButton as LoadMoreButton} from "../Formtype/FormsLoadMoreButton";

export const FormtypeFormsCardOfCards = ({ formtype, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <FormtypeCardCapsule formtype={ formtype } label={"Forms"}>
            <FormsCards forms={ formtype?.forms } {...props} >
                <LoadMoreButton formtype={ formtype } skip={skip} limit={limit} orderby={orderby} where={where} />
            </FormsCards>
        </FormtypeCardCapsule>
    )
}