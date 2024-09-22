
import { AcclassificationtypeTableDefinition as TableDefinition} from './AcclassificationtypeTableDefinition';
import { AcclassificationtypeLink as Link} from './AcclassificationtypeLink';

export const AcclassificationtypeTableRowSpan = ({ acclassificationtype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

