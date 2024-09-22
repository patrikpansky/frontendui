
import { GroupconnectionedgeTableDefinition as TableDefinition} from './GroupconnectionedgeTableDefinition';

import { GroupconnectionedgeTableRow as TableRow} from './GroupconnectionedgeTableRow';
import { GroupconnectionedgeTableHeaderRow as TableHeaderRow} from './GroupconnectionedgeTableHeaderRow';
import { GroupconnectionedgeTableRowSpan as TableRowSpan} from './GroupconnectionedgeTableRowSpan';
//import { GroupconnectionedgeLoadMoreButton as LoadMoreButton} from './GroupconnectionedgeLoadMoreButton';

export const GroupconnectionedgesTable = ({ groupconnectionedges, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { groupconnectionedges.map(
                    groupconnectionedge => <TableRow key={ groupconnectionedge.id } groupconnectionedge={ groupconnectionedge } tabledefinition={tabledefinition}/>
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

