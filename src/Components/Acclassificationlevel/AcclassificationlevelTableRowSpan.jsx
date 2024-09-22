
import { AcclassificationlevelTableDefinition as TableDefinition} from './AcclassificationlevelTableDefinition';
import { AcclassificationlevelLink as Link} from './AcclassificationlevelLink';

export const AcclassificationlevelTableRowSpan = ({ acclassificationlevel, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

