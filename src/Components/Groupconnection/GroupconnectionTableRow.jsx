
import { GroupconnectionTableDefinition as TableDefinition} from './GroupconnectionTableDefinition';
import { GroupconnectionLink as Link} from './GroupconnectionLink';

export const GroupconnectionTableRow = ({ groupconnection, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ groupconnection.id + name }><Link groupconnection={ groupconnection } /></td>:
                    <td key={ groupconnection.id + name}>{ groupconnection[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

