
import { FormitemTableDefinition as TableDefinition} from './FormitemTableDefinition';

import { FormitemTableRow as TableRow} from './FormitemTableRow';
import { FormitemTableHeaderRow as TableHeaderRow} from './FormitemTableHeaderRow';
import { FormitemTableRowSpan as TableRowSpan} from './FormitemTableRowSpan';
//import { FormitemLoadMoreButton as LoadMoreButton} from './FormitemLoadMoreButton';

export const FormitemsTable = ({ formitems, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { formitems.map(
                    formitem => <TableRow key={ formitem.id } formitem={ formitem } tabledefinition={tabledefinition}/>
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

