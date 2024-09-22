
import { GroupTableDefinition as TableDefinition} from './GroupTableDefinition';
import { GroupLink as Link} from './GroupLink';

export const GroupTableRowSpan = ({ group, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

