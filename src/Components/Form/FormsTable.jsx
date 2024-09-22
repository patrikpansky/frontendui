
import { FormTableDefinition as TableDefinition} from './FormTableDefinition';

import { FormTableRow as TableRow} from './FormTableRow';
import { FormTableHeaderRow as TableHeaderRow} from './FormTableHeaderRow';
import { FormTableRowSpan as TableRowSpan} from './FormTableRowSpan';
//import { FormLoadMoreButton as LoadMoreButton} from './FormLoadMoreButton';

export const FormsTable = ({ forms, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { forms.map(
                    form => <TableRow key={ form.id } form={ form } tabledefinition={tabledefinition}/>
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

