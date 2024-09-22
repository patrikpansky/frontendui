
import { GroupTableDefinition as TableDefinition} from './GroupTableDefinition';

import { GroupTableRow as TableRow} from './GroupTableRow';
import { GroupTableHeaderRow as TableHeaderRow} from './GroupTableHeaderRow';
import { GroupTableRowSpan as TableRowSpan} from './GroupTableRowSpan';
//import { GroupLoadMoreButton as LoadMoreButton} from './GroupLoadMoreButton';

export const GroupsTable = ({ groups, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { groups.map(
                    group => <TableRow key={ group.id } group={ group } tabledefinition={tabledefinition}/>
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

