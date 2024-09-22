
import { RolecategoryTableDefinition as TableDefinition} from './RolecategoryTableDefinition';

import { RolecategoryTableRow as TableRow} from './RolecategoryTableRow';
import { RolecategoryTableHeaderRow as TableHeaderRow} from './RolecategoryTableHeaderRow';
import { RolecategoryTableRowSpan as TableRowSpan} from './RolecategoryTableRowSpan';
//import { RolecategoryLoadMoreButton as LoadMoreButton} from './RolecategoryLoadMoreButton';

export const RolecategorysTable = ({ rolecategorys, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { rolecategorys.map(
                    rolecategory => <TableRow key={ rolecategory.id } rolecategory={ rolecategory } tabledefinition={tabledefinition}/>
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

