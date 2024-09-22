
import { AcprogrammessageTableDefinition as TableDefinition} from './AcprogrammessageTableDefinition';

import { AcprogrammessageTableRow as TableRow} from './AcprogrammessageTableRow';
import { AcprogrammessageTableHeaderRow as TableHeaderRow} from './AcprogrammessageTableHeaderRow';
import { AcprogrammessageTableRowSpan as TableRowSpan} from './AcprogrammessageTableRowSpan';
//import { AcprogrammessageLoadMoreButton as LoadMoreButton} from './AcprogrammessageLoadMoreButton';

export const AcprogrammessagesTable = ({ acprogrammessages, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { acprogrammessages.map(
                    acprogrammessage => <TableRow key={ acprogrammessage.id } acprogrammessage={ acprogrammessage } tabledefinition={tabledefinition}/>
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

