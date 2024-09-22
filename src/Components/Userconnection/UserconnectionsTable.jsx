
import { UserconnectionTableDefinition as TableDefinition} from './UserconnectionTableDefinition';

import { UserconnectionTableRow as TableRow} from './UserconnectionTableRow';
import { UserconnectionTableHeaderRow as TableHeaderRow} from './UserconnectionTableHeaderRow';
import { UserconnectionTableRowSpan as TableRowSpan} from './UserconnectionTableRowSpan';
//import { UserconnectionLoadMoreButton as LoadMoreButton} from './UserconnectionLoadMoreButton';

export const UserconnectionsTable = ({ userconnections, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { userconnections.map(
                    userconnection => <TableRow key={ userconnection.id } userconnection={ userconnection } tabledefinition={tabledefinition}/>
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

