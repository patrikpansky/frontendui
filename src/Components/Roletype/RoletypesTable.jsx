
import { RoletypeTableDefinition as TableDefinition} from './RoletypeTableDefinition';

import { RoletypeTableRow as TableRow} from './RoletypeTableRow';
import { RoletypeTableHeaderRow as TableHeaderRow} from './RoletypeTableHeaderRow';
import { RoletypeTableRowSpan as TableRowSpan} from './RoletypeTableRowSpan';
//import { RoletypeLoadMoreButton as LoadMoreButton} from './RoletypeLoadMoreButton';

export const RoletypesTable = ({ roletypes, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { roletypes.map(
                    roletype => <TableRow key={ roletype.id } roletype={ roletype } tabledefinition={tabledefinition}/>
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

