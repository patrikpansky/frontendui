
import { StatementofworkTableDefinition as TableDefinition} from './StatementofworkTableDefinition';

import { StatementofworkTableRow as TableRow} from './StatementofworkTableRow';
import { StatementofworkTableHeaderRow as TableHeaderRow} from './StatementofworkTableHeaderRow';
import { StatementofworkTableRowSpan as TableRowSpan} from './StatementofworkTableRowSpan';
//import { StatementofworkLoadMoreButton as LoadMoreButton} from './StatementofworkLoadMoreButton';

export const StatementofworksTable = ({ statementofworks, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { statementofworks.map(
                    statementofwork => <TableRow key={ statementofwork.id } statementofwork={ statementofwork } tabledefinition={tabledefinition}/>
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

