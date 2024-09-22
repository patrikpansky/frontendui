// field financetype
// targeting to FinanceType
// going from Finance
import { FinancetypesTable } from "../Financetype/FinancetypesTable";
import { FinancetypeLoadMoreButton } from "../Financetype/FinancetypeLoadMoreButton";

export const FinanceFinancetypeTableCard = ({ finance, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <FinancetypesTable financetype={ finance?.financetype } {...props}>
            <FinancetypeLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </FinancetypesTable>
    )
}