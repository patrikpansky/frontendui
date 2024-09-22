
import { FormitemcategoryTableDefinition as TableDefinition} from './FormitemcategoryTableDefinition';

import { FormitemcategoryTableRow as TableRow} from './FormitemcategoryTableRow';
import { FormitemcategoryTableHeaderRow as TableHeaderRow} from './FormitemcategoryTableHeaderRow';
import { FormitemcategoryTableRowSpan as TableRowSpan} from './FormitemcategoryTableRowSpan';
//import { FormitemcategoryLoadMoreButton as LoadMoreButton} from './FormitemcategoryLoadMoreButton';

export const FormitemcategorysTable = ({ formitemcategorys, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { formitemcategorys.map(
                    formitemcategory => <TableRow key={ formitemcategory.id } formitemcategory={ formitemcategory } tabledefinition={tabledefinition}/>
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

