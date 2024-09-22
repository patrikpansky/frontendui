
import { GroupconnectionTableDefinition as TableDefinition} from './GroupconnectionTableDefinition';
import { GroupconnectionLink as Link} from './GroupconnectionLink';

export const GroupconnectionTableRowSpan = ({ groupconnection, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

