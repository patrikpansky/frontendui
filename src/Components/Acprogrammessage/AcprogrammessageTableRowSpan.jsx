
import { AcprogrammessageTableDefinition as TableDefinition} from './AcprogrammessageTableDefinition';
import { AcprogrammessageLink as Link} from './AcprogrammessageLink';

export const AcprogrammessageTableRowSpan = ({ acprogrammessage, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

