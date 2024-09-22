
import { UserconnectionedgeTableDefinition as TableDefinition} from './UserconnectionedgeTableDefinition';

import { UserconnectionedgeTableRow as TableRow} from './UserconnectionedgeTableRow';
import { UserconnectionedgeTableHeaderRow as TableHeaderRow} from './UserconnectionedgeTableHeaderRow';
import { UserconnectionedgeTableRowSpan as TableRowSpan} from './UserconnectionedgeTableRowSpan';
//import { UserconnectionedgeLoadMoreButton as LoadMoreButton} from './UserconnectionedgeLoadMoreButton';

export const UserconnectionedgesTable = ({ userconnectionedges, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { userconnectionedges.map(
                    userconnectionedge => <TableRow key={ userconnectionedge.id } userconnectionedge={ userconnectionedge } tabledefinition={tabledefinition}/>
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

