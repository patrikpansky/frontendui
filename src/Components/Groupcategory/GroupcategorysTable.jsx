
import { GroupcategoryTableDefinition as TableDefinition} from './GroupcategoryTableDefinition';

import { GroupcategoryTableRow as TableRow} from './GroupcategoryTableRow';
import { GroupcategoryTableHeaderRow as TableHeaderRow} from './GroupcategoryTableHeaderRow';
import { GroupcategoryTableRowSpan as TableRowSpan} from './GroupcategoryTableRowSpan';
//import { GroupcategoryLoadMoreButton as LoadMoreButton} from './GroupcategoryLoadMoreButton';

export const GroupcategorysTable = ({ groupcategorys, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { groupcategorys.map(
                    groupcategory => <TableRow key={ groupcategory.id } groupcategory={ groupcategory } tabledefinition={tabledefinition}/>
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

