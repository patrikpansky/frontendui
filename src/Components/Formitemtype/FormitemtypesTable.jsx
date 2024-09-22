
import { FormitemtypeTableDefinition as TableDefinition} from './FormitemtypeTableDefinition';

import { FormitemtypeTableRow as TableRow} from './FormitemtypeTableRow';
import { FormitemtypeTableHeaderRow as TableHeaderRow} from './FormitemtypeTableHeaderRow';
import { FormitemtypeTableRowSpan as TableRowSpan} from './FormitemtypeTableRowSpan';
//import { FormitemtypeLoadMoreButton as LoadMoreButton} from './FormitemtypeLoadMoreButton';

export const FormitemtypesTable = ({ formitemtypes, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { formitemtypes.map(
                    formitemtype => <TableRow key={ formitemtype.id } formitemtype={ formitemtype } tabledefinition={tabledefinition}/>
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

