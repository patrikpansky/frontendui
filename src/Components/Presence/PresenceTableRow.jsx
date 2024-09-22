
import { PresenceTableDefinition as TableDefinition} from './PresenceTableDefinition';
import { PresenceLink as Link} from './PresenceLink';

export const PresenceTableRow = ({ presence, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ presence.id + name }><Link presence={ presence } /></td>:
                    <td key={ presence.id + name}>{ presence[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

