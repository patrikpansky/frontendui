
import { FinanceTableDefinition as TableDefinition} from './FinanceTableDefinition';

import { FinanceTableRow as TableRow} from './FinanceTableRow';
import { FinanceTableHeaderRow as TableHeaderRow} from './FinanceTableHeaderRow';
import { FinanceTableRowSpan as TableRowSpan} from './FinanceTableRowSpan';
//import { FinanceLoadMoreButton as LoadMoreButton} from './FinanceLoadMoreButton';

export const FinancesTable = ({ finances, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { finances.map(
                    finance => <TableRow key={ finance.id } finance={ finance } tabledefinition={tabledefinition}/>
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

