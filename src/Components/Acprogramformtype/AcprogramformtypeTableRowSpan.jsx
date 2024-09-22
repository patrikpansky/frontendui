
import { AcprogramformtypeTableDefinition as TableDefinition} from './AcprogramformtypeTableDefinition';
import { AcprogramformtypeLink as Link} from './AcprogramformtypeLink';

export const AcprogramformtypeTableRowSpan = ({ acprogramformtype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

