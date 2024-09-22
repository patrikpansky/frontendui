
import { InvitationtypeTableDefinition as TableDefinition} from './InvitationtypeTableDefinition';
import { InvitationtypeLink as Link} from './InvitationtypeLink';

export const InvitationtypeTableRowSpan = ({ invitationtype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

