
import { GroupconnectionTableDefinition as TableDefinition} from './GroupconnectionTableDefinition';

import { GroupconnectionTableRow as TableRow} from './GroupconnectionTableRow';
import { GroupconnectionTableHeaderRow as TableHeaderRow} from './GroupconnectionTableHeaderRow';
import { GroupconnectionTableRowSpan as TableRowSpan} from './GroupconnectionTableRowSpan';
//import { GroupconnectionLoadMoreButton as LoadMoreButton} from './GroupconnectionLoadMoreButton';

export const GroupconnectionsTable = ({ groupconnections, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { groupconnections.map(
                    groupconnection => <TableRow key={ groupconnection.id } groupconnection={ groupconnection } tabledefinition={tabledefinition}/>
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

