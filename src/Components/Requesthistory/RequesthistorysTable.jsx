
import { RequesthistoryTableDefinition as TableDefinition} from './RequesthistoryTableDefinition';

import { RequesthistoryTableRow as TableRow} from './RequesthistoryTableRow';
import { RequesthistoryTableHeaderRow as TableHeaderRow} from './RequesthistoryTableHeaderRow';
import { RequesthistoryTableRowSpan as TableRowSpan} from './RequesthistoryTableRowSpan';
//import { RequesthistoryLoadMoreButton as LoadMoreButton} from './RequesthistoryLoadMoreButton';

export const RequesthistorysTable = ({ requesthistorys, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { requesthistorys.map(
                    requesthistory => <TableRow key={ requesthistory.id } requesthistory={ requesthistory } tabledefinition={tabledefinition}/>
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

