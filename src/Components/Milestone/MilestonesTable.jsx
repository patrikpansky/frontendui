
import { MilestoneTableDefinition as TableDefinition} from './MilestoneTableDefinition';

import { MilestoneTableRow as TableRow} from './MilestoneTableRow';
import { MilestoneTableHeaderRow as TableHeaderRow} from './MilestoneTableHeaderRow';
import { MilestoneTableRowSpan as TableRowSpan} from './MilestoneTableRowSpan';
//import { MilestoneLoadMoreButton as LoadMoreButton} from './MilestoneLoadMoreButton';

export const MilestonesTable = ({ milestones, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { milestones.map(
                    milestone => <TableRow key={ milestone.id } milestone={ milestone } tabledefinition={tabledefinition}/>
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

