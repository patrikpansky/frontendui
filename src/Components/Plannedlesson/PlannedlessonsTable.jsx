
import { PlannedlessonTableDefinition as TableDefinition} from './PlannedlessonTableDefinition';

import { PlannedlessonTableRow as TableRow} from './PlannedlessonTableRow';
import { PlannedlessonTableHeaderRow as TableHeaderRow} from './PlannedlessonTableHeaderRow';
import { PlannedlessonTableRowSpan as TableRowSpan} from './PlannedlessonTableRowSpan';
//import { PlannedlessonLoadMoreButton as LoadMoreButton} from './PlannedlessonLoadMoreButton';

export const PlannedlessonsTable = ({ plannedlessons, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { plannedlessons.map(
                    plannedlesson => <TableRow key={ plannedlesson.id } plannedlesson={ plannedlesson } tabledefinition={tabledefinition}/>
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

