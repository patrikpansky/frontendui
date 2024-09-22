
import { EventTableDefinition as TableDefinition} from './EventTableDefinition';

import { EventTableRow as TableRow} from './EventTableRow';
import { EventTableHeaderRow as TableHeaderRow} from './EventTableHeaderRow';
import { EventTableRowSpan as TableRowSpan} from './EventTableRowSpan';
//import { EventLoadMoreButton as LoadMoreButton} from './EventLoadMoreButton';

export const EventsTable = ({ events, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { events.map(
                    event => <TableRow key={ event.id } event={ event } tabledefinition={tabledefinition}/>
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

