
import { UserconnectionedgeTableDefinition as TableDefinition} from './UserconnectionedgeTableDefinition';
import { UserconnectionedgeLink as Link} from './UserconnectionedgeLink';

export const UserconnectionedgeTableRow = ({ userconnectionedge, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ userconnectionedge.id + name }><Link userconnectionedge={ userconnectionedge } /></td>:
                    <td key={ userconnectionedge.id + name}>{ userconnectionedge[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

