// field finances
// targeting to Finance
// going from Financetype
import { FinancesTable } from "../Finance/FinancesTable";
import { FinanceLoadMoreButton } from "../Finance/FinanceLoadMoreButton";

export const FinancetypeFinancesTableCard = ({ financetype, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <FinancesTable finance={ financetype?.finances } {...props}>
            <FinanceLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </FinancesTable>
    )
}