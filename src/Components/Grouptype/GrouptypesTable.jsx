
import { GrouptypeTableDefinition as TableDefinition} from './GrouptypeTableDefinition';

import { GrouptypeTableRow as TableRow} from './GrouptypeTableRow';
import { GrouptypeTableHeaderRow as TableHeaderRow} from './GrouptypeTableHeaderRow';
import { GrouptypeTableRowSpan as TableRowSpan} from './GrouptypeTableRowSpan';
//import { GrouptypeLoadMoreButton as LoadMoreButton} from './GrouptypeLoadMoreButton';

export const GrouptypesTable = ({ grouptypes, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { grouptypes.map(
                    grouptype => <TableRow key={ grouptype.id } grouptype={ grouptype } tabledefinition={tabledefinition}/>
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

