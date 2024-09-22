
import { ExternalidtypeTableDefinition as TableDefinition} from './ExternalidtypeTableDefinition';

import { ExternalidtypeTableRow as TableRow} from './ExternalidtypeTableRow';
import { ExternalidtypeTableHeaderRow as TableHeaderRow} from './ExternalidtypeTableHeaderRow';
import { ExternalidtypeTableRowSpan as TableRowSpan} from './ExternalidtypeTableRowSpan';
//import { ExternalidtypeLoadMoreButton as LoadMoreButton} from './ExternalidtypeLoadMoreButton';

export const ExternalidtypesTable = ({ externalidtypes, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { externalidtypes.map(
                    externalidtype => <TableRow key={ externalidtype.id } externalidtype={ externalidtype } tabledefinition={tabledefinition}/>
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

