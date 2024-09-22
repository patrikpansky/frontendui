// field sections
// targeting to FormSection
// going from Form
import { FormCardCapsule } from "./FormCardCapsule";
import { FormsectionsCards } from "../Formsection/FormsectionsCards";
import { FormSectionsLoadMoreButton as LoadMoreButton} from "../Form/SectionsLoadMoreButton";

export const FormSectionsCardOfCards = ({ form, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <FormCardCapsule form={ form } label={"Sections"}>
            <FormsectionsCards formsections={ form?.sections } {...props} >
                <LoadMoreButton form={ form } skip={skip} limit={limit} orderby={orderby} where={where} />
            </FormsectionsCards>
        </FormCardCapsule>
    )
}