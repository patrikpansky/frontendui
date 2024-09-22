// field parts
// targeting to FormPart
// going from Formsection
import { FormsectionCardCapsule } from "./FormsectionCardCapsule";
import { FormpartsCards } from "../Formpart/FormpartsCards";
import { FormsectionPartsLoadMoreButton as LoadMoreButton} from "../Formsection/PartsLoadMoreButton";

export const FormsectionPartsCardOfCards = ({ formsection, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <FormsectionCardCapsule formsection={ formsection } label={"Parts"}>
            <FormpartsCards formparts={ formsection?.parts } {...props} >
                <LoadMoreButton formsection={ formsection } skip={skip} limit={limit} orderby={orderby} where={where} />
            </FormpartsCards>
        </FormsectionCardCapsule>
    )
}