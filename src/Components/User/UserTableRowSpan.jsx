
import { UserTableDefinition as TableDefinition} from './UserTableDefinition';
import { UserLink as Link} from './UserLink';

export const UserTableRowSpan = ({ user, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

