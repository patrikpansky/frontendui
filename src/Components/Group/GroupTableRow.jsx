
import { GroupTableDefinition as TableDefinition} from './GroupTableDefinition';
import { GroupLink as Link} from './GroupLink';

export const GroupTableRow = ({ group, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ group.id + name }><Link group={ group } /></td>:
                    <td key={ group.id + name}>{ group[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

