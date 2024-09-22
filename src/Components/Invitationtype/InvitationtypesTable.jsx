
import { InvitationtypeTableDefinition as TableDefinition} from './InvitationtypeTableDefinition';

import { InvitationtypeTableRow as TableRow} from './InvitationtypeTableRow';
import { InvitationtypeTableHeaderRow as TableHeaderRow} from './InvitationtypeTableHeaderRow';
import { InvitationtypeTableRowSpan as TableRowSpan} from './InvitationtypeTableRowSpan';
//import { InvitationtypeLoadMoreButton as LoadMoreButton} from './InvitationtypeLoadMoreButton';

export const InvitationtypesTable = ({ invitationtypes, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { invitationtypes.map(
                    invitationtype => <TableRow key={ invitationtype.id } invitationtype={ invitationtype } tabledefinition={tabledefinition}/>
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

