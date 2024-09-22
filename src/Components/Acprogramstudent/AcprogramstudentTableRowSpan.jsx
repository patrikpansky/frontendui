
import { AcprogramstudentTableDefinition as TableDefinition} from './AcprogramstudentTableDefinition';
import { AcprogramstudentLink as Link} from './AcprogramstudentLink';

export const AcprogramstudentTableRowSpan = ({ acprogramstudent, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

