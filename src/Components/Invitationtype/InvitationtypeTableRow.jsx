
import { InvitationtypeTableDefinition as TableDefinition} from './InvitationtypeTableDefinition';
import { InvitationtypeLink as Link} from './InvitationtypeLink';

export const InvitationtypeTableRow = ({ invitationtype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ invitationtype.id + name }><Link invitationtype={ invitationtype } /></td>:
                    <td key={ invitationtype.id + name}>{ invitationtype[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

