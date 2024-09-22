
import { AcprogramTableDefinition as TableDefinition} from './AcprogramTableDefinition';
import { AcprogramLink as Link} from './AcprogramLink';

export const AcprogramTableRowSpan = ({ acprogram, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

