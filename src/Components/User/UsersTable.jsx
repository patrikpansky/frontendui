
import { UserTableDefinition as TableDefinition} from './UserTableDefinition';

import { UserTableRow as TableRow} from './UserTableRow';
import { UserTableHeaderRow as TableHeaderRow} from './UserTableHeaderRow';
import { UserTableRowSpan as TableRowSpan} from './UserTableRowSpan';
//import { UserLoadMoreButton as LoadMoreButton} from './UserLoadMoreButton';

export const UsersTable = ({ users, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { users.map(
                    user => <TableRow key={ user.id } user={ user } tabledefinition={tabledefinition}/>
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

