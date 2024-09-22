
import { GrouptypeTableDefinition as TableDefinition} from './GrouptypeTableDefinition';
import { GrouptypeLink as Link} from './GrouptypeLink';

export const GrouptypeTableRowSpan = ({ grouptype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

