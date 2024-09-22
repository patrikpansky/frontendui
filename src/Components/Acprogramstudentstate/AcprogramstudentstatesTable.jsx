
import { AcprogramstudentstateTableDefinition as TableDefinition} from './AcprogramstudentstateTableDefinition';

import { AcprogramstudentstateTableRow as TableRow} from './AcprogramstudentstateTableRow';
import { AcprogramstudentstateTableHeaderRow as TableHeaderRow} from './AcprogramstudentstateTableHeaderRow';
import { AcprogramstudentstateTableRowSpan as TableRowSpan} from './AcprogramstudentstateTableRowSpan';
//import { AcprogramstudentstateLoadMoreButton as LoadMoreButton} from './AcprogramstudentstateLoadMoreButton';

export const AcprogramstudentstatesTable = ({ acprogramstudentstates, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { acprogramstudentstates.map(
                    acprogramstudentstate => <TableRow key={ acprogramstudentstate.id } acprogramstudentstate={ acprogramstudentstate } tabledefinition={tabledefinition}/>
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

