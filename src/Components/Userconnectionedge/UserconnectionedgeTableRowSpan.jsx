
import { UserconnectionedgeTableDefinition as TableDefinition} from './UserconnectionedgeTableDefinition';
import { UserconnectionedgeLink as Link} from './UserconnectionedgeLink';

export const UserconnectionedgeTableRowSpan = ({ userconnectionedge, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

