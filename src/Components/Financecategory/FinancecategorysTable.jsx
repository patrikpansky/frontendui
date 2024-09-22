
import { FinancecategoryTableDefinition as TableDefinition} from './FinancecategoryTableDefinition';

import { FinancecategoryTableRow as TableRow} from './FinancecategoryTableRow';
import { FinancecategoryTableHeaderRow as TableHeaderRow} from './FinancecategoryTableHeaderRow';
import { FinancecategoryTableRowSpan as TableRowSpan} from './FinancecategoryTableRowSpan';
//import { FinancecategoryLoadMoreButton as LoadMoreButton} from './FinancecategoryLoadMoreButton';

export const FinancecategorysTable = ({ financecategorys, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { financecategorys.map(
                    financecategory => <TableRow key={ financecategory.id } financecategory={ financecategory } tabledefinition={tabledefinition}/>
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

