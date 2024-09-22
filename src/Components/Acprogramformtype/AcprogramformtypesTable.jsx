
import { AcprogramformtypeTableDefinition as TableDefinition} from './AcprogramformtypeTableDefinition';

import { AcprogramformtypeTableRow as TableRow} from './AcprogramformtypeTableRow';
import { AcprogramformtypeTableHeaderRow as TableHeaderRow} from './AcprogramformtypeTableHeaderRow';
import { AcprogramformtypeTableRowSpan as TableRowSpan} from './AcprogramformtypeTableRowSpan';
//import { AcprogramformtypeLoadMoreButton as LoadMoreButton} from './AcprogramformtypeLoadMoreButton';

export const AcprogramformtypesTable = ({ acprogramformtypes, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { acprogramformtypes.map(
                    acprogramformtype => <TableRow key={ acprogramformtype.id } acprogramformtype={ acprogramformtype } tabledefinition={tabledefinition}/>
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

