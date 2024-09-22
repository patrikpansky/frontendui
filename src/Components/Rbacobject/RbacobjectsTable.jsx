
import { RbacobjectTableDefinition as TableDefinition} from './RbacobjectTableDefinition';

import { RbacobjectTableRow as TableRow} from './RbacobjectTableRow';
import { RbacobjectTableHeaderRow as TableHeaderRow} from './RbacobjectTableHeaderRow';
import { RbacobjectTableRowSpan as TableRowSpan} from './RbacobjectTableRowSpan';
//import { RbacobjectLoadMoreButton as LoadMoreButton} from './RbacobjectLoadMoreButton';

export const RbacobjectsTable = ({ rbacobjects, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { rbacobjects.map(
                    rbacobject => <TableRow key={ rbacobject.id } rbacobject={ rbacobject } tabledefinition={tabledefinition}/>
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

