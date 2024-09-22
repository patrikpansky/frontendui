// field finances
// targeting to Finance
// going from Financetype
import { FinancetypeCardCapsule } from "./FinancetypeCardCapsule";
import { FinancesCards } from "../Finance/FinancesCards";
import { FinancetypeFinancesLoadMoreButton as LoadMoreButton} from "../Financetype/FinancesLoadMoreButton";

export const FinancetypeFinancesCardOfCards = ({ financetype, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <FinancetypeCardCapsule financetype={ financetype } label={"Finances"}>
            <FinancesCards finances={ financetype?.finances } {...props} >
                <LoadMoreButton financetype={ financetype } skip={skip} limit={limit} orderby={orderby} where={where} />
            </FinancesCards>
        </FinancetypeCardCapsule>
    )
}