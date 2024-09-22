
import { StateTableDefinition as TableDefinition} from './StateTableDefinition';

import { StateTableRow as TableRow} from './StateTableRow';
import { StateTableHeaderRow as TableHeaderRow} from './StateTableHeaderRow';
import { StateTableRowSpan as TableRowSpan} from './StateTableRowSpan';
//import { StateLoadMoreButton as LoadMoreButton} from './StateLoadMoreButton';

export const StatesTable = ({ states, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { states.map(
                    state => <TableRow key={ state.id } state={ state } tabledefinition={tabledefinition}/>
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

