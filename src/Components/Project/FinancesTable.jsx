// field finances
// targeting to Finance
// going from Project
import { FinancesTable } from "../Finance/FinancesTable";
import { FinanceLoadMoreButton } from "../Finance/FinanceLoadMoreButton";

export const ProjectFinancesTableCard = ({ project, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <FinancesTable finance={ project?.finances } {...props}>
            <FinanceLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </FinancesTable>
    )
}