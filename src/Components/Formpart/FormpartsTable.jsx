
import { FormpartTableDefinition as TableDefinition} from './FormpartTableDefinition';

import { FormpartTableRow as TableRow} from './FormpartTableRow';
import { FormpartTableHeaderRow as TableHeaderRow} from './FormpartTableHeaderRow';
import { FormpartTableRowSpan as TableRowSpan} from './FormpartTableRowSpan';
//import { FormpartLoadMoreButton as LoadMoreButton} from './FormpartLoadMoreButton';

export const FormpartsTable = ({ formparts, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { formparts.map(
                    formpart => <TableRow key={ formpart.id } formpart={ formpart } tabledefinition={tabledefinition}/>
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

