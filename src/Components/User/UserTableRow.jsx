
import { UserTableDefinition as TableDefinition} from './UserTableDefinition';
import { UserLink as Link} from './UserLink';

export const UserTableRow = ({ user, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ user.id + name }><Link user={ user } /></td>:
                    <td key={ user.id + name}>{ user[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

