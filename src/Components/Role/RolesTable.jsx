
import { RoleTableDefinition as TableDefinition} from './RoleTableDefinition';

import { RoleTableRow as TableRow} from './RoleTableRow';
import { RoleTableHeaderRow as TableHeaderRow} from './RoleTableHeaderRow';
import { RoleTableRowSpan as TableRowSpan} from './RoleTableRowSpan';
//import { RoleLoadMoreButton as LoadMoreButton} from './RoleLoadMoreButton';

export const RolesTable = ({ roles, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { roles.map(
                    role => <TableRow key={ role.id } role={ role } tabledefinition={tabledefinition}/>
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

