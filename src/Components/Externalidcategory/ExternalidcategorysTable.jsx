
import { ExternalidcategoryTableDefinition as TableDefinition} from './ExternalidcategoryTableDefinition';

import { ExternalidcategoryTableRow as TableRow} from './ExternalidcategoryTableRow';
import { ExternalidcategoryTableHeaderRow as TableHeaderRow} from './ExternalidcategoryTableHeaderRow';
import { ExternalidcategoryTableRowSpan as TableRowSpan} from './ExternalidcategoryTableRowSpan';
//import { ExternalidcategoryLoadMoreButton as LoadMoreButton} from './ExternalidcategoryLoadMoreButton';

export const ExternalidcategorysTable = ({ externalidcategorys, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { externalidcategorys.map(
                    externalidcategory => <TableRow key={ externalidcategory.id } externalidcategory={ externalidcategory } tabledefinition={tabledefinition}/>
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

