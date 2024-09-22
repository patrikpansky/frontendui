
import { EventtypeTableDefinition as TableDefinition} from './EventtypeTableDefinition';

import { EventtypeTableRow as TableRow} from './EventtypeTableRow';
import { EventtypeTableHeaderRow as TableHeaderRow} from './EventtypeTableHeaderRow';
import { EventtypeTableRowSpan as TableRowSpan} from './EventtypeTableRowSpan';
//import { EventtypeLoadMoreButton as LoadMoreButton} from './EventtypeLoadMoreButton';

export const EventtypesTable = ({ eventtypes, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { eventtypes.map(
                    eventtype => <TableRow key={ eventtype.id } eventtype={ eventtype } tabledefinition={tabledefinition}/>
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

