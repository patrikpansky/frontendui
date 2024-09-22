
import { AcprogramtypeTableDefinition as TableDefinition} from './AcprogramtypeTableDefinition';
import { AcprogramtypeLink as Link} from './AcprogramtypeLink';

export const AcprogramtypeTableRowSpan = ({ acprogramtype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

