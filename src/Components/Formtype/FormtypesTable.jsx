
import { FormtypeTableDefinition as TableDefinition} from './FormtypeTableDefinition';

import { FormtypeTableRow as TableRow} from './FormtypeTableRow';
import { FormtypeTableHeaderRow as TableHeaderRow} from './FormtypeTableHeaderRow';
import { FormtypeTableRowSpan as TableRowSpan} from './FormtypeTableRowSpan';
//import { FormtypeLoadMoreButton as LoadMoreButton} from './FormtypeLoadMoreButton';

export const FormtypesTable = ({ formtypes, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { formtypes.map(
                    formtype => <TableRow key={ formtype.id } formtype={ formtype } tabledefinition={tabledefinition}/>
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

