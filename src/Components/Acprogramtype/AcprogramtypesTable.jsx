
import { AcprogramtypeTableDefinition as TableDefinition} from './AcprogramtypeTableDefinition';

import { AcprogramtypeTableRow as TableRow} from './AcprogramtypeTableRow';
import { AcprogramtypeTableHeaderRow as TableHeaderRow} from './AcprogramtypeTableHeaderRow';
import { AcprogramtypeTableRowSpan as TableRowSpan} from './AcprogramtypeTableRowSpan';
//import { AcprogramtypeLoadMoreButton as LoadMoreButton} from './AcprogramtypeLoadMoreButton';

export const AcprogramtypesTable = ({ acprogramtypes, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { acprogramtypes.map(
                    acprogramtype => <TableRow key={ acprogramtype.id } acprogramtype={ acprogramtype } tabledefinition={tabledefinition}/>
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

