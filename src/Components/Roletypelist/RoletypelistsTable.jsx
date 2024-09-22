
import { RoletypelistTableDefinition as TableDefinition} from './RoletypelistTableDefinition';

import { RoletypelistTableRow as TableRow} from './RoletypelistTableRow';
import { RoletypelistTableHeaderRow as TableHeaderRow} from './RoletypelistTableHeaderRow';
import { RoletypelistTableRowSpan as TableRowSpan} from './RoletypelistTableRowSpan';
//import { RoletypelistLoadMoreButton as LoadMoreButton} from './RoletypelistLoadMoreButton';

export const RoletypelistsTable = ({ roletypelists, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { roletypelists.map(
                    roletypelist => <TableRow key={ roletypelist.id } roletypelist={ roletypelist } tabledefinition={tabledefinition}/>
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

