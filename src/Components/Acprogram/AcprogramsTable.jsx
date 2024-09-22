
import { AcprogramTableDefinition as TableDefinition} from './AcprogramTableDefinition';

import { AcprogramTableRow as TableRow} from './AcprogramTableRow';
import { AcprogramTableHeaderRow as TableHeaderRow} from './AcprogramTableHeaderRow';
import { AcprogramTableRowSpan as TableRowSpan} from './AcprogramTableRowSpan';
//import { AcprogramLoadMoreButton as LoadMoreButton} from './AcprogramLoadMoreButton';

export const AcprogramsTable = ({ acprograms, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { acprograms.map(
                    acprogram => <TableRow key={ acprogram.id } acprogram={ acprogram } tabledefinition={tabledefinition}/>
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

