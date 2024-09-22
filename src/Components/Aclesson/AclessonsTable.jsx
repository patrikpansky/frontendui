
import { AclessonTableDefinition as TableDefinition} from './AclessonTableDefinition';

import { AclessonTableRow as TableRow} from './AclessonTableRow';
import { AclessonTableHeaderRow as TableHeaderRow} from './AclessonTableHeaderRow';
import { AclessonTableRowSpan as TableRowSpan} from './AclessonTableRowSpan';
//import { AclessonLoadMoreButton as LoadMoreButton} from './AclessonLoadMoreButton';

export const AclessonsTable = ({ aclessons, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { aclessons.map(
                    aclesson => <TableRow key={ aclesson.id } aclesson={ aclesson } tabledefinition={tabledefinition}/>
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

