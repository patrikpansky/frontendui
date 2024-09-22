
import { FormsectionTableDefinition as TableDefinition} from './FormsectionTableDefinition';
import { FormsectionLink as Link} from './FormsectionLink';

export const FormsectionTableRowSpan = ({ formsection, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

