
import { AcclassificationTableDefinition as TableDefinition} from './AcclassificationTableDefinition';
import { AcclassificationLink as Link} from './AcclassificationLink';

export const AcclassificationTableRowSpan = ({ acclassification, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

