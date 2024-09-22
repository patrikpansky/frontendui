
import { PresenceTableDefinition as TableDefinition} from './PresenceTableDefinition';
import { PresenceLink as Link} from './PresenceLink';

export const PresenceTableRowSpan = ({ presence, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

