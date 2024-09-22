
import { PresenceTableDefinition as TableDefinition} from './PresenceTableDefinition';

import { PresenceTableRow as TableRow} from './PresenceTableRow';
import { PresenceTableHeaderRow as TableHeaderRow} from './PresenceTableHeaderRow';
import { PresenceTableRowSpan as TableRowSpan} from './PresenceTableRowSpan';
//import { PresenceLoadMoreButton as LoadMoreButton} from './PresenceLoadMoreButton';

export const PresencesTable = ({ presences, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { presences.map(
                    presence => <TableRow key={ presence.id } presence={ presence } tabledefinition={tabledefinition}/>
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

