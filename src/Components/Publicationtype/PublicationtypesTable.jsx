
import { PublicationtypeTableDefinition as TableDefinition} from './PublicationtypeTableDefinition';

import { PublicationtypeTableRow as TableRow} from './PublicationtypeTableRow';
import { PublicationtypeTableHeaderRow as TableHeaderRow} from './PublicationtypeTableHeaderRow';
import { PublicationtypeTableRowSpan as TableRowSpan} from './PublicationtypeTableRowSpan';
//import { PublicationtypeLoadMoreButton as LoadMoreButton} from './PublicationtypeLoadMoreButton';

export const PublicationtypesTable = ({ publicationtypes, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { publicationtypes.map(
                    publicationtype => <TableRow key={ publicationtype.id } publicationtype={ publicationtype } tabledefinition={tabledefinition}/>
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

