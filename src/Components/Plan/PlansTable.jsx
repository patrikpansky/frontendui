
import { PlanTableDefinition as TableDefinition} from './PlanTableDefinition';

import { PlanTableRow as TableRow} from './PlanTableRow';
import { PlanTableHeaderRow as TableHeaderRow} from './PlanTableHeaderRow';
import { PlanTableRowSpan as TableRowSpan} from './PlanTableRowSpan';
//import { PlanLoadMoreButton as LoadMoreButton} from './PlanLoadMoreButton';

export const PlansTable = ({ plans, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { plans.map(
                    plan => <TableRow key={ plan.id } plan={ plan } tabledefinition={tabledefinition}/>
                )}
            </tbody>
            <tfoot>
                <TableRowSpan>
                    {children}
                </TableRowSpan>
            </tfoot>
        </table>
    )
}

