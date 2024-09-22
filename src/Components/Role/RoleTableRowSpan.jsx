
import { RoleTableDefinition as TableDefinition} from './RoleTableDefinition';
import { RoleLink as Link} from './RoleLink';

export const RoleTableRowSpan = ({ role, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

