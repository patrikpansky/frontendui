
import { UserconnectionTableDefinition as TableDefinition} from './UserconnectionTableDefinition';
import { UserconnectionLink as Link} from './UserconnectionLink';

export const UserconnectionTableRow = ({ userconnection, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ userconnection.id + name }><Link userconnection={ userconnection } /></td>:
                    <td key={ userconnection.id + name}>{ userconnection[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

