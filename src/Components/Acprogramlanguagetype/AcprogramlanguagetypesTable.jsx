
import { AcprogramlanguagetypeTableDefinition as TableDefinition} from './AcprogramlanguagetypeTableDefinition';

import { AcprogramlanguagetypeTableRow as TableRow} from './AcprogramlanguagetypeTableRow';
import { AcprogramlanguagetypeTableHeaderRow as TableHeaderRow} from './AcprogramlanguagetypeTableHeaderRow';
import { AcprogramlanguagetypeTableRowSpan as TableRowSpan} from './AcprogramlanguagetypeTableRowSpan';
//import { AcprogramlanguagetypeLoadMoreButton as LoadMoreButton} from './AcprogramlanguagetypeLoadMoreButton';

export const AcprogramlanguagetypesTable = ({ acprogramlanguagetypes, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { acprogramlanguagetypes.map(
                    acprogramlanguagetype => <TableRow key={ acprogramlanguagetype.id } acprogramlanguagetype={ acprogramlanguagetype } tabledefinition={tabledefinition}/>
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

