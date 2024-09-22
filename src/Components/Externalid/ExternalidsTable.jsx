
import { ExternalidTableDefinition as TableDefinition} from './ExternalidTableDefinition';

import { ExternalidTableRow as TableRow} from './ExternalidTableRow';
import { ExternalidTableHeaderRow as TableHeaderRow} from './ExternalidTableHeaderRow';
import { ExternalidTableRowSpan as TableRowSpan} from './ExternalidTableRowSpan';
//import { ExternalidLoadMoreButton as LoadMoreButton} from './ExternalidLoadMoreButton';

export const ExternalidsTable = ({ externalids, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { externalids.map(
                    externalid => <TableRow key={ externalid.id } externalid={ externalid } tabledefinition={tabledefinition}/>
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

