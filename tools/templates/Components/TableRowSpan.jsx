
import { {{Name name}}TableDefinition as TableDefinition} from './{{Name name}}TableDefinition';
import { {{Name name}}Link as Link} from './{{Name name}}Link';

export const {{Name name}}TableRowSpan = ({ {{name name}}, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

