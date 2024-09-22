
import { AclessontypeTableDefinition as TableDefinition} from './AclessontypeTableDefinition';

import { AclessontypeTableRow as TableRow} from './AclessontypeTableRow';
import { AclessontypeTableHeaderRow as TableHeaderRow} from './AclessontypeTableHeaderRow';
import { AclessontypeTableRowSpan as TableRowSpan} from './AclessontypeTableRowSpan';
//import { AclessontypeLoadMoreButton as LoadMoreButton} from './AclessontypeLoadMoreButton';

export const AclessontypesTable = ({ aclessontypes, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { aclessontypes.map(
                    aclessontype => <TableRow key={ aclessontype.id } aclessontype={ aclessontype } tabledefinition={tabledefinition}/>
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

