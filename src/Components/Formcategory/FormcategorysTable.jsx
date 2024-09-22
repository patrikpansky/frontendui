
import { FormcategoryTableDefinition as TableDefinition} from './FormcategoryTableDefinition';

import { FormcategoryTableRow as TableRow} from './FormcategoryTableRow';
import { FormcategoryTableHeaderRow as TableHeaderRow} from './FormcategoryTableHeaderRow';
import { FormcategoryTableRowSpan as TableRowSpan} from './FormcategoryTableRowSpan';
//import { FormcategoryLoadMoreButton as LoadMoreButton} from './FormcategoryLoadMoreButton';

export const FormcategorysTable = ({ formcategorys, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { formcategorys.map(
                    formcategory => <TableRow key={ formcategory.id } formcategory={ formcategory } tabledefinition={tabledefinition}/>
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

