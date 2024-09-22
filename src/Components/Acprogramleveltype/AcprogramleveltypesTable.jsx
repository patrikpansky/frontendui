
import { AcprogramleveltypeTableDefinition as TableDefinition} from './AcprogramleveltypeTableDefinition';

import { AcprogramleveltypeTableRow as TableRow} from './AcprogramleveltypeTableRow';
import { AcprogramleveltypeTableHeaderRow as TableHeaderRow} from './AcprogramleveltypeTableHeaderRow';
import { AcprogramleveltypeTableRowSpan as TableRowSpan} from './AcprogramleveltypeTableRowSpan';
//import { AcprogramleveltypeLoadMoreButton as LoadMoreButton} from './AcprogramleveltypeLoadMoreButton';

export const AcprogramleveltypesTable = ({ acprogramleveltypes, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { acprogramleveltypes.map(
                    acprogramleveltype => <TableRow key={ acprogramleveltype.id } acprogramleveltype={ acprogramleveltype } tabledefinition={tabledefinition}/>
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

