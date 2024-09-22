
import { AcprogramstudentTableDefinition as TableDefinition} from './AcprogramstudentTableDefinition';

import { AcprogramstudentTableRow as TableRow} from './AcprogramstudentTableRow';
import { AcprogramstudentTableHeaderRow as TableHeaderRow} from './AcprogramstudentTableHeaderRow';
import { AcprogramstudentTableRowSpan as TableRowSpan} from './AcprogramstudentTableRowSpan';
//import { AcprogramstudentLoadMoreButton as LoadMoreButton} from './AcprogramstudentLoadMoreButton';

export const AcprogramstudentsTable = ({ acprogramstudents, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { acprogramstudents.map(
                    acprogramstudent => <TableRow key={ acprogramstudent.id } acprogramstudent={ acprogramstudent } tabledefinition={tabledefinition}/>
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

