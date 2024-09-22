
import { AcclassificationTableDefinition as TableDefinition} from './AcclassificationTableDefinition';

import { AcclassificationTableRow as TableRow} from './AcclassificationTableRow';
import { AcclassificationTableHeaderRow as TableHeaderRow} from './AcclassificationTableHeaderRow';
import { AcclassificationTableRowSpan as TableRowSpan} from './AcclassificationTableRowSpan';
//import { AcclassificationLoadMoreButton as LoadMoreButton} from './AcclassificationLoadMoreButton';

export const AcclassificationsTable = ({ acclassifications, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { acclassifications.map(
                    acclassification => <TableRow key={ acclassification.id } acclassification={ acclassification } tabledefinition={tabledefinition}/>
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

