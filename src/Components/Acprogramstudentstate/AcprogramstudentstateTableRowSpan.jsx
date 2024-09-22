
import { AcprogramstudentstateTableDefinition as TableDefinition} from './AcprogramstudentstateTableDefinition';
import { AcprogramstudentstateLink as Link} from './AcprogramstudentstateLink';

export const AcprogramstudentstateTableRowSpan = ({ acprogramstudentstate, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

