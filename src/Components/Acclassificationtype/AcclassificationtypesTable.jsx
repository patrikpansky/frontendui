
import { AcclassificationtypeTableDefinition as TableDefinition} from './AcclassificationtypeTableDefinition';

import { AcclassificationtypeTableRow as TableRow} from './AcclassificationtypeTableRow';
import { AcclassificationtypeTableHeaderRow as TableHeaderRow} from './AcclassificationtypeTableHeaderRow';
import { AcclassificationtypeTableRowSpan as TableRowSpan} from './AcclassificationtypeTableRowSpan';
//import { AcclassificationtypeLoadMoreButton as LoadMoreButton} from './AcclassificationtypeLoadMoreButton';

export const AcclassificationtypesTable = ({ acclassificationtypes, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { acclassificationtypes.map(
                    acclassificationtype => <TableRow key={ acclassificationtype.id } acclassificationtype={ acclassificationtype } tabledefinition={tabledefinition}/>
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

