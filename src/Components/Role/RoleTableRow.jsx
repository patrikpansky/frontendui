
import { RoleTableDefinition as TableDefinition} from './RoleTableDefinition';
import { RoleLink as Link} from './RoleLink';

export const RoleTableRow = ({ role, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ role.id + name }><Link role={ role } /></td>:
                    <td key={ role.id + name}>{ role[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

