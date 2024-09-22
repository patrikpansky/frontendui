
import { StatetransitionTableDefinition as TableDefinition} from './StatetransitionTableDefinition';

import { StatetransitionTableRow as TableRow} from './StatetransitionTableRow';
import { StatetransitionTableHeaderRow as TableHeaderRow} from './StatetransitionTableHeaderRow';
import { StatetransitionTableRowSpan as TableRowSpan} from './StatetransitionTableRowSpan';
//import { StatetransitionLoadMoreButton as LoadMoreButton} from './StatetransitionLoadMoreButton';

export const StatetransitionsTable = ({ statetransitions, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { statetransitions.map(
                    statetransition => <TableRow key={ statetransition.id } statetransition={ statetransition } tabledefinition={tabledefinition}/>
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

