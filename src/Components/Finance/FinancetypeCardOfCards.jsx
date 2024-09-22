// field financetype
// targeting to FinanceType
// going from Finance
import { FinanceCardCapsule } from "./FinanceCardCapsule";
import { FinancetypesCards } from "../Financetype/FinancetypesCards";
import { FinanceFinancetypeLoadMoreButton as LoadMoreButton} from "../Finance/FinancetypeLoadMoreButton";

export const FinanceFinancetypeCardOfCards = ({ finance, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <FinanceCardCapsule finance={ finance } label={"Financetype"}>
            <FinancetypesCards financetypes={ finance?.financetype } {...props} >
                <LoadMoreButton finance={ finance } skip={skip} limit={limit} orderby={orderby} where={where} />
            </FinancetypesCards>
        </FinanceCardCapsule>
    )
}