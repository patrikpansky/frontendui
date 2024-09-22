
import { RequestTableDefinition as TableDefinition} from './RequestTableDefinition';

import { RequestTableRow as TableRow} from './RequestTableRow';
import { RequestTableHeaderRow as TableHeaderRow} from './RequestTableHeaderRow';
import { RequestTableRowSpan as TableRowSpan} from './RequestTableRowSpan';
//import { RequestLoadMoreButton as LoadMoreButton} from './RequestLoadMoreButton';

export const RequestsTable = ({ requests, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { requests.map(
                    request => <TableRow key={ request.id } request={ request } tabledefinition={tabledefinition}/>
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

