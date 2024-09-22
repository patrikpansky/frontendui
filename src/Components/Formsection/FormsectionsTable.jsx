
import { FormsectionTableDefinition as TableDefinition} from './FormsectionTableDefinition';

import { FormsectionTableRow as TableRow} from './FormsectionTableRow';
import { FormsectionTableHeaderRow as TableHeaderRow} from './FormsectionTableHeaderRow';
import { FormsectionTableRowSpan as TableRowSpan} from './FormsectionTableRowSpan';
//import { FormsectionLoadMoreButton as LoadMoreButton} from './FormsectionLoadMoreButton';

export const FormsectionsTable = ({ formsections, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { formsections.map(
                    formsection => <TableRow key={ formsection.id } formsection={ formsection } tabledefinition={tabledefinition}/>
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

