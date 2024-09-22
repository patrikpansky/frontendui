
import { ProjectcategoryTableDefinition as TableDefinition} from './ProjectcategoryTableDefinition';

import { ProjectcategoryTableRow as TableRow} from './ProjectcategoryTableRow';
import { ProjectcategoryTableHeaderRow as TableHeaderRow} from './ProjectcategoryTableHeaderRow';
import { ProjectcategoryTableRowSpan as TableRowSpan} from './ProjectcategoryTableRowSpan';
//import { ProjectcategoryLoadMoreButton as LoadMoreButton} from './ProjectcategoryLoadMoreButton';

export const ProjectcategorysTable = ({ projectcategorys, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { projectcategorys.map(
                    projectcategory => <TableRow key={ projectcategory.id } projectcategory={ projectcategory } tabledefinition={tabledefinition}/>
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

