
import { GroupconnectionedgeTableDefinition as TableDefinition} from './GroupconnectionedgeTableDefinition';
import { GroupconnectionedgeLink as Link} from './GroupconnectionedgeLink';

export const GroupconnectionedgeTableRow = ({ groupconnectionedge, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ groupconnectionedge.id + name }><Link groupconnectionedge={ groupconnectionedge } /></td>:
                    <td key={ groupconnectionedge.id + name}>{ groupconnectionedge[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

