
import { AcsubjectTableDefinition as TableDefinition} from './AcsubjectTableDefinition';
import { AcsubjectLink as Link} from './AcsubjectLink';

export const AcsubjectTableRowSpan = ({ acsubject, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

