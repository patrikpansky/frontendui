
import { ActopicTableDefinition as TableDefinition} from './ActopicTableDefinition';

import { ActopicTableRow as TableRow} from './ActopicTableRow';
import { ActopicTableHeaderRow as TableHeaderRow} from './ActopicTableHeaderRow';
import { ActopicTableRowSpan as TableRowSpan} from './ActopicTableRowSpan';
//import { ActopicLoadMoreButton as LoadMoreButton} from './ActopicLoadMoreButton';

export const ActopicsTable = ({ actopics, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { actopics.map(
                    actopic => <TableRow key={ actopic.id } actopic={ actopic } tabledefinition={tabledefinition}/>
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

