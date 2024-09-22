
import { FinancetypeTableDefinition as TableDefinition} from './FinancetypeTableDefinition';

import { FinancetypeTableRow as TableRow} from './FinancetypeTableRow';
import { FinancetypeTableHeaderRow as TableHeaderRow} from './FinancetypeTableHeaderRow';
import { FinancetypeTableRowSpan as TableRowSpan} from './FinancetypeTableRowSpan';
//import { FinancetypeLoadMoreButton as LoadMoreButton} from './FinancetypeLoadMoreButton';

export const FinancetypesTable = ({ financetypes, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { financetypes.map(
                    financetype => <TableRow key={ financetype.id } financetype={ financetype } tabledefinition={tabledefinition}/>
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

