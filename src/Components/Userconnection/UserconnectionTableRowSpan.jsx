
import { UserconnectionTableDefinition as TableDefinition} from './UserconnectionTableDefinition';
import { UserconnectionLink as Link} from './UserconnectionLink';

export const UserconnectionTableRowSpan = ({ userconnection, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

